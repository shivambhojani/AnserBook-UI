import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
} from "@mui/material";
import Feed from "./Feed";
import { Container } from "@mui/system";
import Employee from "./Employee";
import { SelectChangeEvent } from "@mui/material/Select";
import useStyles from "./Style";
import httpClient from "../../thunk/interceptor";
import { BackendURL } from "../../data/constants";
import UtilityUser from "../Utility/UtilityUser";
import { bookmarkService } from "../../services/bookmark.service";

function Feeds() {
  const classes = useStyles();
  // const [feeds, setFeeds] = React.useState([
  //   {
  //     initials: "SB",
  //     username: "Shivangi Bhatt",
  //     date: "Februrary 28, 2022",
  //     image: "./assets/Post.png",
  //     question:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tellus vel cursus luctus. Cras molestie lacus auctor, volutpat felis et, bibendum ipsum. Praesent tincidunt consequat enim et aliquam. Cras tempor orci vel lorem imperdiet, at egestas ipsum tempus. Aenean nec felis tristique, congue sem quis, euismod leo.",
  //     tags: ["Tag1", "Tag2", "Tag3"],
  //     type: "Social",
  //     shortQuestion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
  //   },
  //   {
  //     initials: "HB",
  //     username: "Hardik Bhatt",
  //     date: "Februrary 28, 2022",
  //     question:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tellus vel cursus luctus. Cras molestie lacus auctor, volutpat felis et, bibendum ipsum. Praesent tincidunt consequat enim et aliquam. Cras tempor orci vel lorem imperdiet, at egestas ipsum tempus. Aenean nec felis tristique, congue sem quis, euismod leo.",
  //     tags: ["Tag1", "Tag2", "Tag3"],
  //     type: "Technical",
  //     shortQuestion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
  //   },
  //   {
  //     initials: "DS",
  //     username: "Donna Singh",
  //     date: "Februrary 29, 2022",
  //     question:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tellus vel cursus luctus. Cras molestie lacus auctor, volutpat felis et, bibendum ipsum. Praesent tincidunt consequat enim et aliquam. Cras tempor orci vel lorem imperdiet, at egestas ipsum tempus. Aenean nec felis tristique, congue sem quis, euismod leo.",
  //     tags: ["Tag1", "Tag2", "Tag3"],
  //     type: "Social",
  //     shortQuestion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
  //   },
  //   {
  //     initials: "AS",
  //     username: "Aadesh Shah",
  //     date: "January 28, 2022",
  //     question:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tellus vel cursus luctus. Cras molestie lacus auctor, volutpat felis et, bibendum ipsum. Praesent tincidunt consequat enim et aliquam. Cras tempor orci vel lorem imperdiet, at egestas ipsum tempus. Aenean nec felis tristique, congue sem quis, euismod leo.",
  //     tags: ["Tag1", "Tag2", "Tag3"],
  //     type: "Technical",
  //     shortQuestion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
  //   },
  //   {
  //     initials: "BS",
  //     username: "Bhushan Singh",
  //     date: "Februrary 28, 2022",
  //     question:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tellus vel cursus luctus. Cras molestie lacus auctor, volutpat felis et, bibendum ipsum. Praesent tincidunt consequat enim et aliquam. Cras tempor orci vel lorem imperdiet, at egestas ipsum tempus. Aenean nec felis tristique, congue sem quis, euismod leo.",
  //     tags: ["Tag1", "Tag2", "Tag3"],
  //     type: "Technical",
  //     shortQuestion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
  //   },
  // ]);
  // const [employees, setEmployees] = React.useState([
  //   {
  //     username: "Shivangi Bhatt",
  //     image: "./assets/userImage.jpg",
  //     info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet",
  //     score: 100,
  //     badge: "Gold",
  //   },

  //   {
  //     username: "Raj Patel",
  //     image: "./assets/userImage.jpg",
  //     info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet",
  //     score: 90,
  //     badge: "Gold",
  //   },

  //   {
  //     username: "Donna Singh",
  //     image: "./assets/userImage.jpg",
  //     info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet",
  //     score: 80,
  //     badge: "Silver",
  //   },
  // ]);
  const [feeds, setFeeds] = React.useState([]);
  const [employees, setEmployees] = React.useState([]);
  const [filter, setFilter] = useState("all");
  const [currentUserId, setCurrentUserId] = useState("");
  const [bookmarkedPosts, setBookmarkedPosts] = useState<any>({});
  const [fetchAgain, setFetchAgain] = useState(false);

  // get the user details to check out the bookmark lists
  useEffect(() => {
    UtilityUser().then(response => {
      console.log("User fetched for bms:", response.user);
      setCurrentUserId(response.user._id);
    });
  }, []);

  useEffect(() => {
    bookmarkService
      .getBookmarkListOfUser(currentUserId)
      .then(result => {
        console.log("bmLists:::", result);
        const bookmarkLists = result.data;
        const bmPosts: any = {};

        for (let bmList of bookmarkLists) {
          const bmListName = bmList.bookmarkListName;
          const postIds = bmList.postIds;

          for (let postId of postIds) {
            bmPosts[postId] = bmListName;
          }
        }

        console.log("bmPostsMap::", bmPosts);
        setBookmarkedPosts(bmPosts);
      })
      .catch(err => {
        console.log(err);
      });
  }, [currentUserId, fetchAgain]);

  useEffect(() => {
    httpClient
      .get("/feeds/feeds/" + filter)
      .then(res => {
        console.log("Before setting the feeds", res.data.message);
        const interimFeeds: any = res.data.message;

        for (let f of interimFeeds) {
          const fId: any = f._id;
          if (bookmarkedPosts[fId]) {
            f.bookmarkListName = bookmarkedPosts[fId];
          }
        }
        setFeeds(interimFeeds);
      })
      .catch(err => {
        console.log(err);
      });
  }, [filter, bookmarkedPosts, fetchAgain]);

  const removeFromBookmarkList = async (
    postId: string,
    removeFromBookmarkListName: string,
  ) => {
    console.log(
      `Will delete post ${postId} from bmList ${removeFromBookmarkListName} for the user ${currentUserId}`,
    );
    bookmarkService
      .removePostFromBookmarkList(
        currentUserId,
        postId,
        removeFromBookmarkListName,
      )
      .then(result => {
        console.log("Res in frotend after deletig the bookmark", result);
        setFetchAgain(prev => !prev);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    httpClient
      .get("/feeds/getStarEmployees")
      .then(res => {
        setEmployees(res.data.message);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleFilterChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
    // console.log("event.target.value", event.target.value);
  };
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <div className={classes.flex}>
              <Typography
                variant="h5"
                component="div"
                style={{ margin: "20px" }}
              >
                My Feed{" "}
              </Typography>
              {/* The below code was referred from https://mui.com/material-ui/react-menu/#max-height-menu */}
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Filter
                </InputLabel>
                <Select
                  value={filter}
                  onChange={handleFilterChange}
                  label="Filter"
                >
                  <MenuItem value="All">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value={"hotTopics"}>Hot Topics</MenuItem>
                  <MenuItem value={"social"}>Social</MenuItem>
                  <MenuItem value={"technical"}>Technical</MenuItem>
                  <MenuItem value={"subscribed"}>Subscribed</MenuItem>
                </Select>
              </FormControl>
            </div>
            {feeds.length > 0 ? (
              feeds.map((feed: any) => (
                <Feed
                  {...feed}
                  removeFromBookmarkList={removeFromBookmarkList}
                  filter={filter}
                />
              ))
            ) : (
              <Card color="red">
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    align="center"
                    // className={classes.text}
                  >
                    No Posts found
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" component="div" style={{ margin: "20px" }}>
              Star Employees{" "}
            </Typography>
            {employees.map((employee: any) => (
              <Employee {...employee} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default Feeds;
