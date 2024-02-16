import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const Financial_barchart = (props) => {
  useEffect(() => {}, [props.data]);
  const data = props.data;
  const height = 300;
  const barchartoptions = {
    plugins: {
      datalabels: {
        display: true,
        color: "black",
        formatter: Math.round,
        anchor: "end",
        offset: -20,
        align: "start",
      },
      title: {
        display: true,
        text: 'All values are in Rs. Cr',
        align: "end"
      },
      legend: {
        display: false
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  const barchartdata = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: ["#00b386"],
        borderColor: ["green"],
        barThickness: 30,
      },
    ],
  };
  return (
    <>
      <div>
        {/* <div className="float-right mr-2 section-title">
          All values are in Rs. Cr
        </div> */}
      </div>
      <div className="financialbar">
        <Bar
          data={barchartdata}
          plugins={[ChartDataLabels]}
          height={height}
          options={barchartoptions}
        />
      </div>
    </>
  );
};

export const Financialbarchart = React.memo(Financial_barchart);
