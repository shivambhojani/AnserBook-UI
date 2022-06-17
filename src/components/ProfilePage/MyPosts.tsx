import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Chip, Avatar, IconButton } from "@mui/material";
import useStyles from "../Feed/Style.js";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardActionArea, Menu, MenuItem } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

interface post {
  initials: string;
  image?: any;
  username: string;
  date: string;
  question: string;
  shortQuestion: string;
  tags: Array<string>;
  type: string;
}

/*The code has been referenced from: https://mui.com/material-ui/react-modal/*/
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "3px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};

function MyPosts(props: post) {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleDeleteOpenOption = () => setDel(true);
  const handleDeleteCloseOption = () => setDel(false);

  const [feed, setFeed] = useState({
    initials: props.initials,
    username: props.username,
    date: props.date,
    question: props.question,
    shortQuestion: props.shortQuestion,
    tags: props.tags,
    type: props.type,
    image: props.image
  });
  {
    /* Below code was referenced from https://mui.com/material-ui/react-menu/#customization */
  }

  const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(
    null
  );

  const [del, setDel] = React.useState(false);

  const open = Boolean(anchorElement);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElement(null);
  };

  const handleEdit = () => {
    navigate("/editpost");
  };

  const handleDelete = () => {
    console.log("delete");
    setDel(true);
  };

  return (
    // The below code is referred from https://mui.com/material-ui/react-card/#complex-interaction
    <Card sx={{ margin: 2, boxShadow: 2, gap: 2, borderRadius: 2 }}>
      <div>
        <Modal open={del} onClose={handleDeleteCloseOption}>
          <Box sx={style}>
            <Typography id="title" variant="h6" component="h2">
              This post has been deleted.
            </Typography>
          </Box>
        </Modal>
      </div>
      <CardContent>
        <div className={classes.flex}>
          <div className={classes.tags}>
            <div>
              <Typography gutterBottom variant="h5">
                {props.shortQuestion}
              </Typography>
              <Typography
                variant="body2"
                component="div"
                color="text.secondary"
              >
                {props.date}
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

          <Menu anchorEl={anchorElement} open={open} onClose={handleCloseMenu}>
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
          </Menu>
        </div>
        <CardActionArea>
          <Typography gutterBottom variant="body2">
            {props.question}
          </Typography>
          {props.image ? <img src={props.image} height="200px" /> : null}
        </CardActionArea>

        <div className={classes.lastRow}>
          <div className={classes.tags}>
            {" "}
            {props.tags.map((tag) => (
              <Chip label={tag} className={classes.tag} />
            ))}
          </div>
          <div></div>
        </div>
      </CardContent>
    </Card>
  );
}

export default MyPosts;
