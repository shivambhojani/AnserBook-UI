import * as React from "react";
import { Box, Grid } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProfilePage from "./ProfilePage";
import "./MyAccount.css";
import MyFriends from "./MyFriends";
import AnalyticsAppreciation from "../Appreciation/AnalyticsAppreciation";
import Feeds from "../Feed/Feeds";
import Feed from "../Feed/Feed";
import { Container } from "@mui/system";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [feeds, setFeeds] = React.useState([
    {
      initials: "SB",
      username: "Shivangi Bhatt",
      date: "Februrary 28, 2022",
      image: "./assets/Post.png",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tellus vel cursus luctus. Cras molestie lacus auctor, volutpat felis et, bibendum ipsum. Praesent tincidunt consequat enim et aliquam. Cras tempor orci vel lorem imperdiet, at egestas ipsum tempus. Aenean nec felis tristique, congue sem quis, euismod leo.",
      tags: ["Tag1", "Tag2", "Tag3"],
      type: "Social",
      shortQuestion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    },
    {
      initials: "SB",
      username: "Shivangi Bhatt",
      date: "Februrary 28, 2022",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tellus vel cursus luctus. Cras molestie lacus auctor, volutpat felis et, bibendum ipsum. Praesent tincidunt consequat enim et aliquam. Cras tempor orci vel lorem imperdiet, at egestas ipsum tempus. Aenean nec felis tristique, congue sem quis, euismod leo.",
      tags: ["Tag1", "Tag2", "Tag3"],
      type: "Technical",
      shortQuestion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    },
    {
      initials: "SB",
      username: "Shivangi Bhatt",
      date: "Februrary 29, 2022",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tellus vel cursus luctus. Cras molestie lacus auctor, volutpat felis et, bibendum ipsum. Praesent tincidunt consequat enim et aliquam. Cras tempor orci vel lorem imperdiet, at egestas ipsum tempus. Aenean nec felis tristique, congue sem quis, euismod leo.",
      tags: ["Tag1", "Tag2", "Tag3"],
      type: "Social",
      shortQuestion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    },
    {
      initials: "SB",
      username: "Shivangi Bhatt",
      date: "January 28, 2022",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tellus vel cursus luctus. Cras molestie lacus auctor, volutpat felis et, bibendum ipsum. Praesent tincidunt consequat enim et aliquam. Cras tempor orci vel lorem imperdiet, at egestas ipsum tempus. Aenean nec felis tristique, congue sem quis, euismod leo.",
      tags: ["Tag1", "Tag2", "Tag3"],
      type: "Technical",
      shortQuestion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    },
  ]);

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <div className="Tabs">
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Profile Settings" value="1" />
              <Tab label="My Posts" value="2" />
              <Tab label="My Friends" value="3" />
              <Tab label="My Reputation" value="4" />
            </TabList>
          </div>
        </Box>
        <TabPanel value="1">
          <ProfilePage></ProfilePage>
        </TabPanel>
        <TabPanel value="2">
          <Container>
            <Grid container spacing={2}>
              {feeds.map((feed: any) => (
                <Grid item xs={12} md={12}>
                  <Feed {...feed} />
                </Grid>
              ))}
            </Grid>{" "}
          </Container>
        </TabPanel>
        <TabPanel value="3">
          <MyFriends></MyFriends>
        </TabPanel>
        <TabPanel value="4">
          <AnalyticsAppreciation />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
