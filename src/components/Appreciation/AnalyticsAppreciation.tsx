import React from "react";
import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";
import UtilityUser from "../Utility/UtilityUser";
import httpClient from "../../thunk/interceptor";

export default class AnalyticsAppreciation extends React.Component {
  componentDidMount = () => {};

  constructor(props: any) {
    super(props);
  }

  getOptions() {
    // const { user } = await UtilityUser();
    // console.log("user details:::::::" + user._id);
    // const response = await httpClient.get("/appreciation/" + user._id);

    var options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "Reputation Earned: 80",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
      },
      series: [
        {
          name: "Brands",
          colorByPoint: true,
          data: [
            {
              name: "Earned from Comments",
              y: 10,
              sliced: true,
              selected: true,
            },
            {
              name: "Earned from Likes",
              y: 5,
            },
            {
              name: "Earned from Posts",
              y: 12,
            },
            {
              name: "Earned from Best Answer",
              y: 53,
            },
          ],
        },
      ],
    };

    // options.series[0].data[0].y = response.data.appreciation.commentsScore;
    // options.series[0].data[1].y = response.data.appreciation.likesScore;
    // options.series[0].data[2].y = response.data.appreciation.postsScore;
    // options.series[0].data[3].y = response.data.appreciation.bestAnswerScore;
    // console.log("-------------" + options.series[0].data[0].y);

    return options;
  }

  render() {
    return (
      <div>
        <PieChart highcharts={Highcharts} options={this.getOptions()} />
      </div>
    );
  }
}
