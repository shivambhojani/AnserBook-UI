import React, { useState } from "react";
import Feed from "../Feed/Feed";
import { useLocation } from "react-router-dom";
import { Container } from "@mui/system";
import { Typography, TextField, Grid, Button } from "@mui/material";
import useStyles from "../../Style";

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
    </Container>
  );
}

export default Post;
