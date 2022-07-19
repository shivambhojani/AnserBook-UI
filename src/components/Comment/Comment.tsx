//author - Aman Singh BHandari
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import "./Comment.css";
import { Typography, Button } from "@mui/material";
import DownloadDoneRoundedIcon from "@mui/icons-material/DownloadDoneRounded";
import { getThemeProps } from "@mui/system";
import httpClient from "../../thunk/interceptor";

interface comment {
  avatar: string;
  author: string;
  date: Date;
  content: string;
  isBestAnswer: boolean;
  _id: string;
  userId: string;
}

export default function Comment(props: comment) {
  const [attributes, setAttributes] = useState<comment>(props);

  return (
    <Card className="card">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {attributes.avatar}
          </Avatar>
        }
        title={attributes.author}
        subheader={attributes.date}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {attributes.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {attributes.isBestAnswer ? (
          <IconButton aria-label="add to favorites">
            <DownloadDoneRoundedIcon
              style={{ color: "green" }}
              fontSize="large"
            />
          </IconButton>
        ) : null}
        <Button
          onClick={() => {
            httpClient
              .put("/comment", {
                _id: attributes._id,
                userId: attributes.userId,
                isBestAnswer: !attributes.isBestAnswer,
              })
              .then((response) => {
                var attr = JSON.parse(JSON.stringify(attributes));
                attr.isBestAnswer = !attr.isBestAnswer;
                setAttributes(attr);
              });
          }}
        >
          {attributes.isBestAnswer
            ? "Unmark as correct answer"
            : "Mark as correct answer"}
        </Button>
      </CardActions>
    </Card>
  );
}
