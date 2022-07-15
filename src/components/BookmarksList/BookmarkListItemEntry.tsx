import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { Feed } from "../../models/models";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookmarkListItemEntry: React.FC<Feed> = ({
  id,
  heading,
  body,
  imgUrl,
}) => {
  return (
    <List
      key={id}
      sx={{ width: "100%", minWidth: 300, bgcolor: "background.black" }}
    >
      <ListItem
        alignItems="center"
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              toast.error("Will remove this from the list");
            }}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar src={imgUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={`${
            heading.length > 50 ? `${heading.slice(0, 40)}...` : heading
          }`}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {`${body.slice(0, 50)}...`}
              </Typography>
            </>
          }
        />
      </ListItem>
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default BookmarkListItemEntry;
