import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
} from "@mui/material";
import Feed from "./Feed";
import { Container } from "@mui/system";
import Employee from "./Employee";
import { SelectChangeEvent } from "@mui/material/Select";
import useStyles from "./Style";
import httpClient from "../../thunk/interceptor";
import UtilityUser from "../Utility/UtilityUser";
/*
 * @author: Shivangi Bhatt
 *
 */
function Feeds() {
  const classes = useStyles();
  const [feeds, setFeeds] = React.useState([]);
  const [employees, setEmployees] = React.useState([]);
  const [filter, setFilter] = useState("all");
  const [subscribedTo, setSubscribedTo] = useState([]);

  // get the user details to check out the bookmark lists
  useEffect(() => {
    UtilityUser().then(function (response) {
      setSubscribedTo(response.user.subscribedTo);

      console.log("User fetched for bms:", response.user);
    });
  }, []);

  useEffect(() => {
    httpClient
      .get("/feeds/feeds/" + filter)
      .then((res) => {
        if (filter.toLowerCase() == "subscribed") {
          let posts = res.data.message;
          console.log(posts[0].user);

          let filteredPosts = posts.filter((post: any) =>
            subscribedTo.includes(post.userId as never)
          );
          setFeeds(filteredPosts);
        } else {
          setFeeds(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filter]);
  useEffect(() => {
    httpClient
      .get("/feeds/getStarEmployees")
      .then((res) => {
        setEmployees(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFilterChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
    // console.log("event.target.value", event.target.value);
  };
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <div className={classes.flex}>
              <Typography
                variant="h5"
                component="div"
                style={{ margin: "20px" }}
              >
                My Feed{" "}
              </Typography>
              {/* The below code was referred from https://mui.com/material-ui/react-menu/#max-height-menu */}
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Filter
                </InputLabel>
                <Select
                  value={filter}
                  onChange={handleFilterChange}
                  label="Filter"
                >
                  <MenuItem value="All">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value={"hotTopics"}>Hot Topics</MenuItem>
                  <MenuItem value={"social"}>Social</MenuItem>
                  <MenuItem value={"technical"}>Technical</MenuItem>
                  <MenuItem value={"subscribed"}>Subscribed</MenuItem>
                </Select>
              </FormControl>
            </div>
            {feeds.length > 0 ? (
              feeds.map((feed: any) => <Feed {...feed} filter={filter} />)
            ) : (
              <Card color="red">
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    align="center"
                    // className={classes.text}
                  >
                    No Posts found
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" component="div" style={{ margin: "20px" }}>
              Star Employees{" "}
            </Typography>
            {employees.map((employee: any) => (
              <Employee {...employee} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default Feeds;
