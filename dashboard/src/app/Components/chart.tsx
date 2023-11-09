
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { random } from "animejs";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Heart Rate",
      data: labels.map(() => (Math.random()*2000)-1000),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "SpO2",
      data: labels.map(() => (Math.random()*2000)-1000),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Hours Slept",
      data: labels.map(() => (Math.random()*2000)-1000),
      borderColor: "#FF9900",
      backgroundColor: "#FF990044",
    },
  ],
};

export function Chart(params:any) {
  return (
    <div className={"w-[36rem] border border-1 rounded-lg border-gray-100 p-2 mt-4 ml-4"}>
      <h1 className="font-bold text-xl">{params.title}</h1>
      <Line options={options} data={data} />
    </div>
  );
}