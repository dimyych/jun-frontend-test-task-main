import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

import { useDispatch, useSelector } from "react-redux";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const Chart = () => {
  const horses = useSelector((state) => state.race.horses);
  const dispatch = useDispatch();
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      datalabels: {
        formatter: function (value, context) {
          return context.chart.data.labels[context.dataIndex];
        },
        position: "absolute",
        align: "top",
        anchor: "center",
        offset: 25,
        padding: -2,
        clip: true,
        color: "white",
        font: {
          size: "26",
          weight: "bold",
        },
      },
    },
  };

  const labels = horses.map((el) => el.name);

  const data = {
    labels: labels,
    datasets: [
      {
        data: [...horses.map((el) => el.distance), [1000]],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgb(133, 44, 221)",
          "rgba(255, 206, 86)",
          "rgb(50, 230, 150)",
          "rgb(209, 98, 253)",
        ],
        borderColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgb(133, 44, 221)",
          "rgba(255, 206, 86)",
          "rgb(50, 230, 150)",
          "rgb(209, 98, 253)",
        ],
        color: "white",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
