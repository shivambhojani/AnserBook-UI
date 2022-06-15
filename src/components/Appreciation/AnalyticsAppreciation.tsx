import { Pie } from "react-chartjs-2";

interface DatasetType {
  data: number[];
  backgroundColor: string[];
}

function AnalayticsAppreciation({
  labels = ["2010", "2012", "2014", "2016", "2018"],
  datasets = [
    {
      data: [2000, 4000, 2300, 2222, 3333],
      backgroundColor: ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"],
    },
  ],
}) {
  return (
    <Pie
      data={{
        labels: labels,
        datasets: datasets,
      }}
    />
  );
}

export default AnalayticsAppreciation;
