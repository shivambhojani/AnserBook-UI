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


function createData(name: string, calories: number, fat: number) {
    return { name, calories, fat };
}

export default function SearchUsers() {

    const [users, setUsers] = useState<any[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
    const [search, setSearch] = useState<string>("");

    const navigate = useNavigate();

    const [data, setData] = React.useState<any[]>();
    const [searchtxt, setsearchtxt] = React.useState<string>();

    React.useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // Reference taken from https://masteringjs.io/tutorials/fundamentals/filter-array-of-objects
        const filteredUsersTemp = users.filter(
            (user) =>
                user.firstname.toLowerCase().startsWith(search.toLowerCase()) ||
                user.lastname.toLowerCase().startsWith(search.toLowerCase())
        );
        setFilteredUsers(filteredUsersTemp);
    }, [search]);


    const fetchData = (): void => {
        console.log("Fetch Data");
        httpClient
            .get("/userprofile")
            .then((result: any) => {
                console.log(result.data);
                setUsers(result.data.users);
                console.log("Users",users);
            })
            .catch((err) => {
                setUsers(err.response.data.message);
                console.error(err);
                alert("Something wrong with API");
            });
    };

    function openUserProfile(emailid:any) {
        navigate("/openprofile/"+emailid);
    }


    function searchfilter(event: React.ChangeEvent<HTMLInputElement>) {
        //Ref: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_table

        const {
            target: { value },
        } = event;
        setsearchtxt(value);
        let input: string = value;
        console.log(input);
        console.log(input?.length);
        let filter = input.toUpperCase();
        let table = document.getElementById("myTable");
        // if (table != null) {
        //   let tr = table.getElementsByTagName("tr");

        //   let td_name: any;

        //   for (let i = 0; i < tr.length; i++) {
        //     td_name = tr[i].getElementsByTagName("td")[1];

        //     if (td_name) {
        //       let txtValue_firstName: string = td_name.textContent;

        //       if (txtValue_firstName?.toUpperCase().indexOf(filter) > -1) {
        //         tr[i].style.display = "";
        //       }
        //       else {
        //         tr[i].style.display = "none"
        //       }
        //     }

        //   }

        // }
    }

    const renderUsers = (userArray: any) => {
        return userArray.map((user: any) => (
            <Grid item xs={12} sm={6} md={4}>
                <Card variant="outlined">
                    <CardActionArea onClick={(e) => openUserProfile(user.email)}>
                        <CardContent>
                            <img style={{ width: "100%" }} src={user.picture} />
                            <Typography variant="h6" gutterBottom component={"p"}>
                             {user.firstname} {user.lastname}
                            </Typography>
                            <Typography variant="subtitle1" component={"p"}>
                                Email: {user.email}
                            </Typography>
                            <Typography variant="subtitle1" component={"p"}>
                                Mobile: {user.mobile}
                            </Typography>
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
                        label="Search"
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
                                : "No user found"}
                        </>
                    ) : (
                        renderUsers(users)
                    )}
                </Grid>
            </Container>
            {/* <div className="maindiv">
                <div className="elements">
                    <div className="searchbox">
                        <TextField
                            id="searchfilter"
                            onChange={searchfilter}
                            label="Search User with firstname or lastname"
                            helperText="Search User with firstname or lastname"
                            variant="outlined"
                            value={searchtxt}
                            fullWidth
                        />
                    </div>
                    <div className="table-users">
                        <table cellSpacing="0" id="myTable">
                            <tbody>
                                {data?.length
                                    ? data.map((user, index) => {
                                        console.log(data.length);
                                        return (
                                            <tr key={index}>
                                                <td>{user.firstname + " " + user.lastname}</td>
                                                <td>{user.email}</td>
                                                <td>{user.isActive}</td>
                                                {console.log(user.isActive)}
                                                <td>
                                                    <Button variant="contained"
                                                        color="primary"
                                                        onClick={() => openUserProfile(user.email)}>
                                                        User Info
                                                    </Button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                    : null}
                                ;
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> */}
        </>
    );
}
