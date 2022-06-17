import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Avatar,
  TextField,
  InputAdornment,
  Autocomplete,
  Menu,
  MenuItem,
  Badge,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import useStyles from "./Style";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { Link, useNavigate } from "react-router-dom";
import MoreIcon from "@mui/icons-material/MoreVert";
import MailIcon from "@mui/icons-material/Mail";

import Modal from "@mui/material/Modal";
const style = {
  position: "absolute" as "absolute",
  top: "15%",
  right: "2%",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const options = [
  {
    groupBy: "User",
    search: "Shivangi Bhatt",
  },
  {
    groupBy: "User",
    search: "Shivam Bhojani",
  },
  {
    groupBy: "User",
    search: "Aman Bhandari",
  },
  {
    groupBy: "Post",
    search: "Lorem ipsum 1 dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    groupBy: "Post",
    search: "Lorem ipsum 2 dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    groupBy: "Post",
    search: "Lorem ipsum 3 dolor sit amet, consectetur adipiscing elit. ",
  },
];
{
  /* Referred from https://mui.com/material-ui/react-autocomplete/#grouped */
}

const NavBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState<{
    groupBy: any;
    search: any;
  }>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function avatarclick() {
    navigate("/userprofile");
  }
  function createPostClick() {
    navigate("/createPost");
  }
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const classes = useStyles();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button color="inherit" onClick={createPostClick}>
          {" "}
          <AddIcon />
          Create Post
        </Button>
      </MenuItem>
      <MenuItem>
        <Button onClick={handleOpen} color="inherit">
          <NotificationsIcon className={classes.menus} /> Notifications
        </Button>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Button
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar
            alt="Remy Sharp"
            src="http://bootdey.com/img/Content/avatar/avatar7.png"
            sx={{ width: 30, height: 30, backgroundColor: "white" }}
            onClick={avatarclick}
          />
        </Button>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  useEffect(() => {
    if (searchValue && searchValue.groupBy) {
      if (searchValue.groupBy == "User") {
        navigate("/openprofile");
      } else {
        navigate("/post", {
          state: {
            feed: {
              initials: "SB",
              username: "Shivangi Bhatt",
              date: "Februrary 28, 2022",
              image: "./assets/Post.png",
              question:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tellus vel cursus luctus. Cras molestie lacus auctor, volutpat felis et, bibendum ipsum. Praesent tincidunt consequat enim et aliquam. Cras tempor orci vel lorem imperdiet, at egestas ipsum tempus. Aenean nec felis tristique, congue sem quis, euismod leo.",
              tags: ["Tag1", "Tag2", "Tag3"],
              type: "Social",
              shortQuestion:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            },
          },
        });
      }
    }
  }, [searchValue]);

  return (
    <AppBar position="static">
      <Toolbar>
        <a href="/feeds" className={classes.link}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            AnswerBook
          </Typography>
        </a>
        {/* Referred from https://mui.com/material-ui/react-autocomplete/#grouped */}
        <Autocomplete
          id="free-solo-2-demo"
          disableClearable
          value={searchValue}
          onChange={(event: any, newValue: any) => {
            setSearchValue(newValue);
            console.log("newValue=-==-", newValue);
          }}
          options={options}
          groupBy={(option) => option.groupBy}
          getOptionLabel={(option) => option.search}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search"
              sx={{ border: "solid white 1px", borderRadius: "4px" }}
              className={classes.searchBox}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon className={classes.searchIcon} />
                  </InputAdornment>
                ),
                type: "search",

                className: classes.searchInput,
              }}
            />
          )}
        />
        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button color="inherit" onClick={createPostClick}>
            {" "}
            <AddIcon />
            Create Post
          </Button>
          <IconButton onClick={handleOpen} color="inherit">
            <NotificationsIcon className={classes.menus} />
          </IconButton>
          <IconButton color="inherit">
            <Avatar
              alt="Remy Sharp"
              src="http://bootdey.com/img/Content/avatar/avatar7.png"
              sx={{ width: 50, height: 50, backgroundColor: "white" }}
              onClick={avatarclick}
            ></Avatar>
          </IconButton>
        </Box>
        {/* Referred from https://mui.com/material-ui/react-app-bar/#app-bar-with-a-primary-search-field */}
        <Box sx={{ display: { xs: "flex", md: "none" }, marginLeft: "30px" }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>{" "}
          {renderMobileMenu}
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <>
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Alert
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                user x liked your post
              </Typography>
            </Box>
          </>
        </Modal>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;