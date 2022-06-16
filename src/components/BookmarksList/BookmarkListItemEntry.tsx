import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Feed } from "../../models/models";

const BookmarkListItemEntry: React.FC<Feed> = ({
  id,
  heading,
  body,
  imgUrl,
}) => {
  return (
    <List
      key={id}
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.black" }}
    >
      <ListItem alignItems="flex-start">
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
                {`${body.slice(0, 150)}...`}
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default BookmarkListItemEntry;
