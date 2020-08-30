import React from "react";
import { Radar } from "react-chartjs-2";
import { OmitProps } from "antd/lib/transfer/ListBody";
export const RadarChart = ({ labels, flavors }) => {
  let data = {
    labels: labels,
    datasets: [
      {
        label: "Previous Tasting",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: Object.values(flavors),
      },
    ],
  };

  const options = {
    scale: {
      angleLines: {
        display: false,
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 10,
      },
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
  };

  return <Radar data={data} options={options} />;
};
