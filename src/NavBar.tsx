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
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute' as 'absolute',
  top: '15%',
  right: '2%',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const NavBar = () => {

  const navigate = useNavigate();
 const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          <IconButton  onClick={handleOpen} color="inherit">
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
     <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Alert
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      user x liked your post
    </Typography>
  </Box>
</Modal>
    </AppBar>
  );
}

export default NavBar;