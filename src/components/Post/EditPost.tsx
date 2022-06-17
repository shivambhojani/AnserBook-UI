import { Stack, TextField } from "@mui/material";
import { Typography, Grid, Button } from "@mui/material";
import React from "react";
import { TagsInput } from "react-tag-input-component";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

/*The code has been referenced from: https://mui.com/material-ui/react-modal/*/
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "3px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function EditPost() {
  const navigate = useNavigate();

  const handleDeleteCloseOption = () => setDel(false);

  const [del, setDel] = React.useState(false);

  const [tags, setTags] = React.useState<string[]>(["Tag1", "Tag2", "Tag3"]);
  const [errorstags, setErrostags] = React.useState<{ tags: string }>();

  const [topic, setTopic] = React.useState<string>(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
  );
  const [errorstopic, setErrostopic] = React.useState<{ topic: string }>();

  const [body, setBody] = React.useState<string>(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tellus vel cursus luctus. Cras molestie lacus auctor, volutpat felis et, bibendum ipsum. Praesent tincidunt consequat enim et aliquam. Cras tempor orci vel lorem imperdiet, at egestas ipsum tempus. Aenean nec felis tristique, congue sem quis, euismod leo."
  );
  const [errorsbody, setErrosbody] = React.useState<{ body: string }>();

  const postClick = (topic: any, body: any, tags: any) => {
    setDel(true);
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
                  disabled
                  id="topic"
                  name="topic"
                  autoFocus
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
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
                  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tellus vel cursus luctus. Cras molestie lacus auctor, volutpat felis et, bibendum ipsum. Praesent tincidunt consequat enim et aliquam. Cras tempor orci vel lorem imperdiet, at egestas ipsum tempus. Aenean nec felis tristique, congue sem quis, euismod leo."
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
              <Stack direction="row" spacing={1}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={() => postClick(topic, body, tags)}
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
}

export default EditPost;
