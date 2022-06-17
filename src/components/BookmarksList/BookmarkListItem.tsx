import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BookmarkListWithFeeds, Feed } from "../../models/models";
import BookmarkListItemEntry from "./BookmarkListItemEntry";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    sm: 250,
    md: 250,
    lg: 800,
  },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
};

const BookmarkListItem: React.FC<BookmarkListWithFeeds> = ({
  id,
  title,
  posts,
  feeds,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [bmPostsFiltered, setBmPostsFiltered] = useState<Feed[]>([]);

  useEffect(() => {
    const filteredPosts = feeds.filter(feed => posts.includes(feed.id));
    setBmPostsFiltered(filteredPosts);
  }, [posts, feeds]);

  return (
    <>
      <Card
        style={{ margin: "1rem auto", cursor: "pointer" }}
        className="bookmark-list"
        onClick={handleOpen}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          {bmPostsFiltered.map(filteredPost => (
            <BookmarkListItemEntry key={filteredPost.id} {...filteredPost} />
          ))}
        </Box>
      </Modal>
    </>
  );
};

export default BookmarkListItem;
