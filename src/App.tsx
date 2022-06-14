import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Feed from "./components/Feed/Feeds";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import useStyles from "./Style";
import AddIcon from "@mui/icons-material/Add";
import Post from "./components/Post/Post";
import EditAppreciation from "./components/Appreciation/EditAppreciation";

function App() {
  const classes = useStyles();
  return (
    <>
      {/* The below code was referred from https://mui.com/material-ui/react-app-bar/#app-bar-with-menu */}
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
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>{" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/post" element={<Post />} />
          <Route path="/editappreciation" element={<EditAppreciation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
