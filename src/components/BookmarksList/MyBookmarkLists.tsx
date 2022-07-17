import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UtilityUser from "../Utility/UtilityUser";
import { bookmarkService } from "../../services/bookmark.service";
import httpClient from "../../thunk/interceptor";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

interface bmListType {
  bmListName: string;
  posts: any[];
}

const MyBookmarkLists: React.FC = () => {
  // const [feeds, setFeeds] = useState([]);
  const [currentUserId, setCurrentUserId] = useState("");
  const [bookmarkLists, setBookmarkLists] = useState<bmListType[]>([]);
  const navigate = useNavigate();

  // Navigate to that post
  const redirectToBookmarkedPost = (feed: any) => {
    navigate("/post", {
      state: {
        feed,
      },
    });
  };

  // get the user details to check out the bookmark lists
  useEffect(() => {
    UtilityUser().then(function (response) {
      setCurrentUserId(response.user._id);
    });
  }, []);

  useEffect(() => {
    bookmarkService.getBookmarkListOfUser(currentUserId).then((result) => {
      const bmListsRes = result.data;

      console.log("The whole bmList", bmListsRes);
      for (let bmList of bmListsRes) {
        const bmListName = bmList.bookmarkListName;
        const postIds = bmList.postIds;

        for (let postId of postIds) {
          // Fetch the post
          httpClient
            .get(`/posts/getOne/${postId}`)
            .then((res) => {
              const bmPost = res.data.post;
              // setting the state
              setBookmarkLists((prevBmList) => {
                let added = false;
                const newBmList = prevBmList;
                for (let bmList of newBmList) {
                  if (!!bmList.bmListName && bmList.bmListName === bmListName) {
                    bmList.posts.push(bmPost);
                    added = true;
                    break;
                  }
                }

                if (!added) {
                  newBmList.push({
                    bmListName,
                    posts: [bmPost],
                  });
                }

                //  Remove duplicates
                for (let bmList of newBmList) {
                  bmList.posts = [...new Set(bmList.posts)];
                }

                return [...newBmList];
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    });
  }, [currentUserId]);

  return (
    <Grid
      container
      sx={{
        bgcolor: "#ffffaa",
        color: "#000000",
        padding: "1rem",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {console.log("bmfinall", bookmarkLists)}
      {bookmarkLists.map((bmList) => (
        <div style={{ width: "100%" }}>
          <h1 style={{ marginTop: "0.5rem" }}>
            Bookmark list: <b>{bmList.bmListName}</b>
          </h1>
          {bmList.posts.map((post) => (
            <Accordion key={post._id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
              >
                <Typography style={{ marginLeft: "0.5rem" }}>
                  {post.topic}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                onClick={() => {
                  redirectToBookmarkedPost(post);
                }}
              >
                <div>
                  <Typography>{post.body}</Typography>
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      alert("Will remove this from the list");
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      ))}
    </Grid>
  );
};

export default MyBookmarkLists;
