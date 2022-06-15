import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import useStyles from "./Style";
import AddIcon from "@mui/icons-material/Add";
import { Link, useNavigate} from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate();

  function avatarclick(){
    navigate("/userprofile");
    
  }

  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <a href="/" className={classes.link}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            AnswerBook
          </Typography>
        </a>
        <Box sx={{ flexGrow: 1 }} />

        <div>
          <Button color="inherit">
            {" "}
            <AddIcon />
            Create Post
          </Button>
          <IconButton color="inherit">
            <NotificationsIcon className={classes.menus} />
          </IconButton>
          <IconButton color="inherit">
            
          </IconButton>
        </div>
        <div>
        <Avatar
            alt="Remy Sharp"
            src="http://bootdey.com/img/Content/avatar/avatar7.png"
            sx={{ width: 50, height: 50 , backgroundColor:'white'}}
            onClick={avatarclick}>
          </Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;