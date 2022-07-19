import * as React from "react";

import { Avatar, Button, TextField } from "@mui/material";
import "../ProfilePage/MyFriends";
import httpClient from "../../thunk/interceptor";
import { useNavigate } from "react-router-dom";

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number
    ) => void;
}

function createData(name: string, calories: number, fat: number) {
    return { name, calories, fat };
}

export default function SearchUsers() {

    const navigate = useNavigate();

    interface userData {
        _id: string;
        firstname: string;
        lastname: string;
        email: string;
        password: string;
        employeeId: string;
        addressline1: string;
        mobile: string;
        city: string;
        pinCode: string;
        profilePicture: string;
        isActive: boolean;
        subscribedTo: any;
        bookmarkLists: any;
    }

    const [data, setData] = React.useState<any[]>();
    const [searchtxt, setsearchtxt] = React.useState<string>();

    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = (): void => {
        console.log("Fetch Data");
        httpClient
            .get("/userprofile")
            .then((result: any) => {
                console.log(result.data);
                setData(result.data.users);
            })
            .catch((err) => {
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
    return (
        <>
            <div className="maindiv">
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
                                                        onClick={()=>openUserProfile(user.email)}>
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
            </div>
        </>
    );
}
