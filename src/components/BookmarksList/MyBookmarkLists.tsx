import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { dataJson } from "../../data/dummy-bookmarks";
import { BookmarkListM, Feed } from "../../models/models";
import BookmarkListItem from "./BookmarkListItem";

const MyBookmarkLists: React.FC = () => {
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [bookmarkList, setBookmarkList] = useState<BookmarkListM[]>([]);

  useEffect(() => {
    const feed = dataJson.feed;
    const bmList = dataJson.bookmarkLists;

    setFeeds(feed);
    setBookmarkList(bmList);
  }, []);

  return (
    <Grid
      container
      sx={{
        bgcolor: "#009688",
        padding: "1rem",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {bookmarkList.map(bm => (
        <Grid
          key={bm.id}
          item
          xs={10}
          sm={10}
          md={4}
          xl={4}
          sx={{ bgcolor: "#272727", padding: "1rem" }}
        >
          <BookmarkListItem
            key={bm.id}
            id={bm.id}
            title={bm.title}
            posts={bm.posts}
            feeds={feeds}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MyBookmarkLists;
