import { Stack, TextField } from "@mui/material";
import { Typography, Grid, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TagsInput } from "react-tag-input-component";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import UtilityUser from "../Utility/UtilityUser";

/*The code has been referenced from: https://mui.com/material-ui/react-modal/*/
const style = {
  pt: 2,
  px: 4,
  pb: 3,
  transform: "translate(-50%, -50%)",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  bgcolor: "background.paper",
  width: 500,
  boxShadow: 24,
  border: "3px solid #000",
};

const CreatePost = () => {
  const navigate = useNavigate();

  const [del, setDel] = React.useState(false);

  const [tags, setTags] = React.useState<string[]>();
  const [errorstags, setErrostags] = React.useState<{ tags: string }>();

  const [topic, setTopic] = React.useState<string>();
  const [errorstopic, setErrostopic] = React.useState<{ topic: string }>();

  const [body, setBody] = React.useState<string>();
  const [errorsbody, setErrosbody] = React.useState<{ body: string }>();

  const [type, setType] = React.useState('');
  
  const [userId, setUserId] = useState();

  useEffect(() => {
    UtilityUser().then(function (response) {
      setUserId(response.user._id);
      console.log('User Id------>',userId);
    });
  }, []);

  const handleDeleteCloseOption = () => setDel(false);

  const handleChangeInType = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const postClick = () => {
      const postBody = { 
      "userId": userId ,  
      "topic": topic,  
      "body": body,  
      "tags": tags,  
      "type": type, 
      "reactions":[],  
      "__v": 0
    }
    
    console.log(postBody);

    axios.post(`https://csci5709-answerme-backend.herokuapp.com/posts/savePost`, postBody)
      .then(res => {
        console.log(res);
      })

    navigate("/feeds");
  };

  const discardClick = () => {
    navigate("/feeds");
  };

  const handleChangeInBody = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setBody(value);
  };

  const handleChangeInTopic = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setTopic(value);
  };

  return (
    <Grid container spacing={4} alignItems="center" justifyContent="center">
      <div>
        <Modal open={del} onClose={handleDeleteCloseOption}>
          <Box sx={style}>
            <Typography id="title" variant="h6" component="h2" display="block">
              This post is now visible to public.
            </Typography>
            <Typography id="title" variant="h6" component="h2" display="block">
              Topic: {topic}
            </Typography>
            <Typography id="title" variant="h6" component="h2" display="block">
              Body: {body}
            </Typography>
            <Typography id="title" variant="h6" component="h2" display="block">
              Tags: {tags}
            </Typography>
          </Box>
        </Modal>
      </div>
      <Grid item xs={12} md={7}>
        <Stack
          className="divProfileFields"
          direction="row"
          spacing={5}
          mb={3}
          mt={5}
          sx={{ paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%" }}
        >
          <Stack className="profileFields">
            <Stack
              direction="column"
              spacing={3}
              sx={{ paddingTop: "1%" }}
              justifyContent="flex-start"
            >
              <Stack spacing={2}>
                <Typography variant="h5" style={{ fontWeight: 600 }}>
                  Topic
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Be specific about the topic of your post.
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={topic}
                  onChange={handleChangeInTopic}
                  id="topic"
                  placeholder="e.g. what are wireframes?"
                  name="topic"
                  autoFocus
                />
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h5" style={{ fontWeight: 600 }}>
                  Body
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="body"
                  value={body}
                  onChange={handleChangeInBody}
                  multiline
                  rows={6}
                  id="body"
                />
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h5" style={{ fontWeight: 600 }}>
                  Tags
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Add tags to explain what your post is
                </Typography>
                <TagsInput
                  name="tags-input"
                  value={tags}
                  onChange={setTags}
                  placeHolder="Enter tags here"
                />
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h5" style={{ fontWeight: 600 }}>
                  Type of Post
                </Typography>
                  <Select
                    id="select-input-id"
                    value={type}
                    label="Type"
                    onChange={handleChangeInType}
                  >
                    <MenuItem value={'Social'}>Social</MenuItem>
                    <MenuItem value={'Technical'}>Technical</MenuItem>
                  </Select>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={() => postClick()}
                >
                  Post
                </Button>
                <Button
                  href="#discard-button"
                  fullWidth
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={discardClick}
                >
                  Discard
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CreatePost;
