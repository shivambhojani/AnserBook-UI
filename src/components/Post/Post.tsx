import React, { useState, useEffect } from "react";
import Feed from "../Feed/Feed";
import { feed } from "../Feed/Feed";
import { useLocation } from "react-router-dom";
import { Container } from "@mui/system";
import { Typography, TextField, Grid, Button } from "@mui/material";
import useStyles from "../../Style";
import Comment from "../Comment/Comment";
import httpClient from "../../thunk/interceptor";
import UtilityUser from "../Utility/UtilityUser";

interface feedInterface {
  feed: feed;
}

export interface CommentDetail {
  _id: string;
  userId: string;
  postId: string;
  content: string;
  isBestAnswer: boolean;
  createdOn: Date;
  updatedOn: Date;
  displayUserName: string;
}

function Post(props: any) {
  const location = useLocation();
  const state = location.state as feedInterface;
  const [feedc, setFeedc] = useState<feed>(state.feed);
  const classes = useStyles();
  const [comments, setComments] = useState<CommentDetail[]>([]); //List of old commnents to display
  const [comment, setComment] = useState(""); //comment inserted by user
  const handleCancel = () => {
    setComment("");
  };
  const handleChange = (e: any) => {
    setComment(e.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("form submitted");
    UtilityUser()
      .then((response) => {
        console.log("current user id ::" + response.user._id);
        const userId = response.user._id;

        httpClient
          .post("/comment", {
            userId,
            postId: feedc._id,
            content: comment,
            isBestAnswer: false,
          })
          .then((response) => {
            setComment("");
            updateComments();
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateComments = () => {
    httpClient
      .get("/comment/" + feedc._id)
      .then((response) => {
        const commentsResponse = response.data.comments;
        console.log("Comments fetched ::" + commentsResponse);

        //Get all users and set diaplay user in comment list
        httpClient
          .get("/userprofile")
          .then((response) => {
            console.log("User response" + response.data.users);
            response.data.users.map((user: any) => {
              console.log("userId====" + user._id);
              console.log("Comments fetched inside ::" + commentsResponse);

              commentsResponse.map((commentResponse: any) => {
                console.log("comment====" + commentResponse.userId);
                if (user._id === commentResponse.userId) {
                  commentResponse.displayUserName =
                    user.firstname + " " + user.lastname;

                  console.log(
                    "Display Name=====" + commentResponse.displayUserName
                  );
                }
              });
            });
            console.log("Setting comment again-----" + comments);
            setComments(commentsResponse);
          })
          .catch((err) => {
            console.log("Error in fetching users ::" + err);
          });
      })
      .catch((err) => {
        console.log("Error in fetching comments ::" + err);
      });
  };

  useEffect(() => {
    updateComments();
  }, []);

  return (
    <Container className="mt-3">
      <Feed {...feedc} />
      <Typography variant="h5" component="div" className={classes.margin}>
        0 Answers
      </Typography>
      <form id="myForm" onSubmit={handleSubmit} className={classes.margin}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <TextField
              label="Add Comment"
              multiline
              rows={4}
              variant="filled"
              onChange={handleChange}
              fullWidth
              value={comment}
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button variant="contained" type="submit">
              Post
            </Button>
            <Button
              variant="contained"
              className={classes.cancel}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>

      {comments.map((oldComment) => (
        <Comment
          avatar="A"
          author={oldComment.displayUserName}
          date={oldComment.createdOn}
          content={oldComment.content}
          isBestAnswer={oldComment.isBestAnswer}
          _id={oldComment._id}
          userId={oldComment.userId}
        ></Comment>
      ))}
    </Container>
  );
}

export default Post;
