import React from "react";
import Highcharts from "highcharts/highstock";
import HighChartsReact from "highcharts-react-official";
import OutlinedCard from "./OutlinedCard";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

const options = {
  chart: {
    type: "spline",
    height: "300px",
  },
  title: {
    text: "",
  },
  xAxis: {
    categories: ["January", "February", "March", "April", "May", "June"],
    crosshair: true,
  },
  series: [
    {
      data: [40, 80, 30, 90, 100, 10],
      name: "Total Posts",
    },
    {
      data: [20, 50, 17, 50, 72, 3],
      name: "Answered Posts",
      color: "orange",
    },
  ],
};

export default class AdminDashboard extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Container>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "220px",
            flexWrap: "wrap",
            flexBasis: "33%",
          }}
        > */}
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <div style={{ textAlign: "center" }}>
              <OutlinedCard title="Total Posts" body="1231"></OutlinedCard>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div style={{ textAlign: "center" }}>
              <OutlinedCard title="Total Users" body="635"></OutlinedCard>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div style={{ textAlign: "center" }}>
              <OutlinedCard title="Total Roles" body="2"></OutlinedCard>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div style={{ textAlign: "center" }}>
              <OutlinedCard
                title="Total Posts Answered"
                body="973"
              ></OutlinedCard>
            </div>
          </Grid>
        </Grid>
        {/* </div> */}

        <div style={{ marginTop: "20px" }}>
          <HighChartsReact highcharts={Highcharts} options={options} />
        </div>
      </Container>
    );
  }
}
