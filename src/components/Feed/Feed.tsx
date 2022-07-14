import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Chip, Avatar, IconButton, Grid } from "@mui/material";
import useStyles from "./Style";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardActionArea, Menu, MenuItem } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkSelector from "../BookmarkSelector/BookmarkSelector";
import { FacebookSelector, FacebookCounter } from "@charkour/react-reactions";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";
import "react-toastify/dist/ReactToastify.css";
interface feed {
  initials: string;
  image?: any;
  username: string;
  createdOn: string;
  body: string;
  topic: string;
  tags: Array<string>;
  type: string;
  user: any;
}

function Feed(props: feed) {
  const classes = useStyles();
  const navigate = useNavigate();

  const [feed, setFeed] = useState({
    initials: props.user.firstname.charAt(0) + props.user.lastname.charAt(0),
    username: props.user.firstname + " " + props.user.lastname,
    createdOn: props.createdOn,
    body: props.body,
    topic: props.topic,
    tags: props.tags,
    type: props.type,
    image: props.image,
    user: props.user,
  });
  {
    /* Below code was referenced from https://mui.com/material-ui/react-menu/#customization */
  }

  const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(
    null
  );
  const open = Boolean(anchorElement);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorElement(null);
  };
  const redirectToPost = () => {
    navigate("/post", {
      state: {
        feed,
      },
    });
  };

  return (
    // The below code is referred from https://mui.com/material-ui/react-card/#complex-interaction
    <>
      <br />
      <Card>
        <CardContent>
          <div className={classes.flex}>
            <div className={classes.tags}>
              <Avatar className={classes.avatar}>
                {props.user.firstname.charAt(0).toUpperCase() +
                  props.user.lastname.charAt(0).toUpperCase()}
              </Avatar>

              <div>
                <Typography variant="h5" component="div">
                  {props.user.firstname + " " + props.user.lastname}
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  color="text.secondary"
                >
                  {moment(props.createdOn).format("MMM Do YYYY")}
                </Typography>
              </div>

              <Chip
                label={props.type}
                className={
                  props.type.toLowerCase() == "social"
                    ? classes.social
                    : classes.technical
                }
              />
            </div>
            <IconButton onClick={handleOpenMenu}>
              {" "}
              <MoreVertIcon className={classes.moreIcon} />
            </IconButton>
            {/* Below code was referenced from https://mui.com/material-ui/react-menu/#customization */}
            <Menu
              anchorEl={anchorElement}
              open={open}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu}>Subscribe</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Report</MenuItem>
            </Menu>
          </div>
          <CardActionArea onClick={redirectToPost}>
            <Typography gutterBottom variant="h5">
              {props.topic}
            </Typography>
            <Typography gutterBottom variant="body2">
              {props.body}
            </Typography>
            {props.image ? (
              <img src={props.image} style={{ height: "200px" }} />
            ) : null}
          </CardActionArea>

          <div className={classes.lastRow}>
            <Grid container spacing={2}>
              <Grid item md={4} xs={12}>
                <div className={classes.tags}>
                  {" "}
                  {props.tags.map((tag) => (
                    <Chip label={tag} className={classes.tag} />
                  ))}
                </div>
              </Grid>
              <Grid item md={4} xs={12}>
                <div className={classes.tags}>
                  <BookmarkSelector />
                </div>
              </Grid>
              <Grid item md={4} xs={12}>
                <div className={classes.end}>
                  {/* <FacebookSelector
                    onSelect={(select) => {
                      console.log(select);

                      toast.info("🦄 Cool reaction!", {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    }}
                  /> */}
                  <FacebookCounter />
                </div>
              </Grid>
            </Grid>
          </div>
        </CardContent>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Card>
    </>
  );
}

export default Feed;
