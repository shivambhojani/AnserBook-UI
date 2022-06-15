import React, { useState } from "react";
import Feed from "../Feed/Feed";
import { useLocation } from "react-router-dom";
import { Container } from "@mui/system";
import { Typography, TextField, Grid, Button } from "@mui/material";
import useStyles from "../../Style";
import Comment from "../Comment/Comment";

interface feedInterface {
  feed: any;
}
function Post(props: any) {
  const location = useLocation();
  const state = location.state as feedInterface;
  const { feed } = state;
  const classes = useStyles();
  const [comment, setComment] = useState("");

  const handleCancel = () => {
    setComment("");
  };
  const handleChange = (e: any) => {
    setComment(e.target.value);
  };
  const handleSubmit = () => {
    console.log("form submitted");
  };

  return (
    <Container>
      <Feed {...feed} />
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
      <Comment
        avatar="A"
        author="Anupam Ratha"
        date="June 14, 2022"
        content="The simplest way to specify/override the color of an Icon in Material-UI is to use a custom CSS class name. Suppose that you want to show a green checkbox rather than a red triangle, depending on the outcome of some process."
        isBestAnswer={true}
      ></Comment>
      <Comment
        avatar="S"
        author="Sachin Sharma"
        date="June 12, 2022"
        content="Let's just think this differently and disregard rules established by HTML5 and focusing only on JSX. JSX has exactly two ways of passing true, <MyComponent prop /> and <MyComponent prop={true} /> and exactly one way of passing false <MyComponent prop={false} />."
        isBestAnswer={false}
      ></Comment>
      <Comment
        avatar="P"
        author="Patrick Wright"
        date="May 10, 2022"
        content="This is where JSX's behavior differ from HTML5's boolean attributes behavior. There is not such thing as defaulting to false in JSX; it is only applicable for passing an explicit true."
        isBestAnswer={false}
      ></Comment>
    </Container>
  );
}

export default Post;
