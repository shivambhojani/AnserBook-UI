import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import "./UserProfile.css"

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Profile = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    interface userData {
        id: string;
        lastName: string;
        firstName: string;
        email: string;
        title: string;
        picture: string
    }

    let { userid } = useParams();
    const [data, setData] = useState<userData>();


    // const fetchData = (): void => {
    //     let url: string = 'https://tutorial4-api.herokuapp.com/api/users/' + userid;
    //     axios.get(url).then(result => {

    //         setData(result.data.data)
    //         console.log(result.data.data);
    //     }).catch(err => {
    //         console.error(err);
    //         alert("Something wrong with API")
    //     });
    // };

    // useEffect(() => {
    //     fetchData();
    // }, [])

    // console.log(userid)
    return (

        <>
            <div className="maindiv">
                <div className = "carddiv">
                <Card sx={{ maxWidth: 500}}>
                    <div className = "divAvatar">
                    <CardHeader
                        avatar={
                            <Avatar
                                alt="Tony Stark"
                                src="https://randomuser.me/api/portraits/women/82.jpg"
                                sx={{ width: 200, height: 200 }}
                            />
                        }
                    />
                    </div>
                    <div className="subscribebutton">
                    <Button variant="contained">Subscribe</Button>
                    </div>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary"> ID: 5788 </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Title: Miss.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Name: Lilly Collins
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email: lilly@gmail.com
                        </Typography>
                    </CardContent>

                </Card>
                </div>
            </div>
        </>
    )
};

export default Profile;