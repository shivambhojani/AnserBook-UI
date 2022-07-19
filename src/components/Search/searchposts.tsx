import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import "../ProfilePage/MyFriends";
import httpClient from "../../thunk/interceptor";
import { Container } from "@mui/system";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";


function createData(name: string, calories: number, fat: number) {
    return { name, calories, fat };
}
export interface feed {
    initials: string;
    image?: any;
    username: string;
    createdOn: string;
    body: string;
    topic: string;
    tags: Array<string>;
    type: string;
    user: any;
    _id: string;
    reactions: any;
    bookmarkListName: string;
    addPostToBookmarkList: (
        postId: string,
        addPostToBookmarkListName: string
    ) => any;
    removeFromBookmarkList: (
        postId: string,
        removeFromBookmarkListName: string
    ) => any;
    bookmarkListNames: Array<{
        id: string;
        name: string;
        inputValue: string;
        getOptionLabel: string;
    }>;
}

export default function SearchPosts() {


    const [feed, setFeed] = useState();

    const [posts, setposts] = useState<any[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
    const [search, setSearch] = useState<string>("");

    const navigate = useNavigate();

    const [data, setData] = React.useState<any[]>();

    const redirectToPost = () => {
        navigate("/post", {
            state: {
                feed: JSON.parse(JSON.stringify(feed)),
            },
        });
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // Reference taken from https://masteringjs.io/tutorials/fundamentals/filter-array-of-objects
        // console.log("posts", posts);
        const filteredUsersTemp = posts.filter(
            (post) =>
                post.topic.toLowerCase().startsWith(search.toLowerCase())

        );
        console.log(search)
        setFilteredUsers(filteredUsersTemp);
        console.log("filteredUsersTemp", filteredUsersTemp)
    }, [search]);


    const fetchData = (): void => {
        console.log("Fetch Data");
        httpClient
            .get("/posts/getTotalPosts")
            .then((result: any) => {
                // console.log(result.data.posts);
                setposts(result.data.posts);
            })
            .catch((err) => {
                setposts(err.response.data.message);
                console.error(err);
                alert("Something wrong with API");
            });
    };

    function openUserProfile(emailid: any) {
        navigate("/openprofile/" + emailid);
    }


    const renderUsers = (postArray: any) => {
        return postArray.map((post: any) => (
            <Grid item xs={12} sm={6} md={4}>
                <Card variant="outlined">
                    <CardActionArea>
                        <CardContent>
                            {/* <img style={{ width: "100%" }} src={post.picture} /> */}
                            <Typography variant="h6" gutterBottom component={"p"}>
                                {post.topic}
                            </Typography>
                            {/* <Typography variant="subtitle1" component={"p"}>
                                Email: {post.email}
                            </Typography>
                            <Typography variant="subtitle1" component={"p"}>
                                Mobile: {post.mobile}
                            </Typography> */}
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        ));
    };
    return (
        <>
            <Container>
                <Grid container spacing={2} m={5}>
                    <TextField
                        label="Search By Topic"
                        variant="outlined"
                        fullWidth
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    {search.length != 0 ? (
                        <>
                            {filteredUsers.length != 0
                                ? renderUsers(filteredUsers)
                                : "No Posts Idea"}
                        </>
                    ) : (
                        renderUsers(posts)
                    )}
                </Grid>
            </Container>

        </>
    );
}
