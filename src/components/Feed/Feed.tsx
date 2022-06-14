import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Chip, Avatar, IconButton } from "@mui/material";
import useStyles from "./Style";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardActionArea, Menu, MenuItem } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface feed {
  initials: string;
  image?: any;
  username: string;
  date: string;
  question: string;
  shortQuestion: string;
  tags: Array<string>;
  type: string;
}

function Feed(props: feed) {
  const classes = useStyles();
  const navigate = useNavigate();

  const feed = {
    initials: props.initials,
    username: props.username,
    date: props.date,
    question: props.question,
    shortQuestion: props.shortQuestion,
    tags: props.tags,
    type: props.type,
    image: props.image,
  };
  // const [feed, setFeed] = useState({
  //   initials: props.initials,
  //   username: props.username,
  //   date: props.date,
  //   question: props.question,
  //   shortQuestion: props.shortQuestion,
  //   tags: props.tags,
  //   type: props.type,
  //   image: props.image,
  // });
  //{
  /* Below code was referenced from https://mui.com/material-ui/react-menu/#customization */
  //}

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

    <Card>
      <CardContent>
        <div className={classes.flex}>
          <div className={classes.tags}>
            <Avatar className={classes.avatar}>{props.initials}</Avatar>

            <div>
              <Typography variant="h5" component="div">
                {props.username}
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
                props.type.toLowerCase() === "social"
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
            <MenuItem onClick={handleCloseMenu}>Subscribe</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Report</MenuItem>
          </Menu>
        </div>
        <CardActionArea onClick={redirectToPost}>
          <Typography gutterBottom variant="h5">
            {props.shortQuestion}
          </Typography>
          <Typography gutterBottom variant="body2">
            {props.question}
          </Typography>
          {props.image ? <img src={props.image} height="200px" alt="" /> : null}
        </CardActionArea>

        <div className={classes.lastRow}>
          <div className={classes.tags}>
            {" "}
            {props.tags.map((tag) => (
              <Chip label={tag} className={classes.tag} />
            ))}
          </div>
          <div>
            <FavoriteIcon color="warning" className={classes.icon} />
            <BookmarkBorderIcon />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Feed;
