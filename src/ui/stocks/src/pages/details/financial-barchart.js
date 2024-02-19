import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const Financial_barchart = (props) => {

  const data = props.data;
  const report = props.report;
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
        text: "All values are in $. Millions",
        align: "end",
      },
      legend: {
        display: false,
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
    labels: report == 1 ? data?.quarterlylabels : data?.annuallabels,
    datasets: [
      {
        data: report == 1 ? data?.data?.quarterly : data?.data?.annual ,
        backgroundColor: ["#00b386"],
        borderColor: ["green"],
        barThickness: 30,
      },
    ],
  };
  return (
    <>
      {props.data && (
        <div className="financialbar">
          <Bar
            data={barchartdata}
            plugins={[ChartDataLabels]}
            height={height}
            options={barchartoptions}
          />
        </div>
      )}
    </>
  );
};

export const Financialbarchart = React.memo(Financial_barchart);
