import React from "react";
import { Pie } from "react-chartjs-2";

function Hobbies() {
  const data = {
    datasets: [
      {
        data: [25, 25, 15, 15, 15, 5],

        backgroundColor: [
          "#2c6e7c",
          "#62b0a5",
          "#c8cfd6",
          "#b1d0ca",
          "#09222d",
          "#005254",
        ],
        borderColor: "black",

        legend: {
          display: true,
          labels: {
            fontColor: "rgb(255, 99, 132)",
            boxWidth: "10",
          },
        },
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      "Watching Movies",
      "Coding",
      "Cooking/Baking",
      "Shopping",
      "Listening to Music",
      "Pickleball",
    ],
  };
  const w = "70vh";
  const h = "40vh";
  return (
    <div className="pie">
      <Pie
        data={data}
        width={w}
        height={h}
        options={{
          maintainAspectRatio: false,
          legend: {
            display: true,
            labels: {
              fontSize: 23,
              fontColor: "white",
            },
          },
        }}
      />
    </div>
  );
}

export default Hobbies;
