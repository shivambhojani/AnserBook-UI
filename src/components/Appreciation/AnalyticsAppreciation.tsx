import React from "react";
import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";

const options = {
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

export default class AnalyticsAppreciation extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <PieChart highcharts={Highcharts} options={options} />
      </div>
    );
  }
}
