//author - Aman Singh BHandari
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import "./Comment.css";
import DownloadDoneRoundedIcon from "@mui/icons-material/DownloadDoneRounded";
import { getThemeProps } from "@mui/system";

interface comment {
  avatar: string;
  author: string;
  date: string;
  content: string;
  isBestAnswer: boolean;
}

export default function Comment(props: comment) {
  return (
    <Card className="card">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.avatar}
          </Avatar>
        }
        title={props.author}
        subheader={props.date}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {props.isBestAnswer ? (
          <IconButton aria-label="add to favorites">
            <DownloadDoneRoundedIcon
              style={{ color: "green" }}
              fontSize="large"
            />
          </IconButton>
        ) : null}
      </CardActions>
    </Card>
  );
}
