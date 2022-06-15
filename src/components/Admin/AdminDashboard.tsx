import React from "react";
import Highcharts from "highcharts/highstock";
import HighChartsReact from "highcharts-react-official";
import OutlinedCard from "./OutlinedCard";

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
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "220px",
            flexWrap: "wrap",
            flexBasis: "33%",
          }}
        >
          <OutlinedCard title="Total Posts" body="1231"></OutlinedCard>
          <OutlinedCard title="Total Users" body="635"></OutlinedCard>
          <OutlinedCard title="Total Roles" body="2"></OutlinedCard>
          <OutlinedCard title="Total Posts Answered" body="973"></OutlinedCard>
        </div>

        <div style={{ margin: "20px" }}>
          <HighChartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    );
  }
}
