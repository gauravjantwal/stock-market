import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

function Stocksgraph(props) {
  const timeseries = props.Stocks;
  const [stocksdata, setStocksData] = useState(null);
  useEffect(() => {
    if (timeseries) {
      let objdata = null;
      const timeseries5minkey = "Time Series (5min)";
      const timeseries1minkey = "Time Series (1min)";
      const closekey = "4. close";
      if (timeseries[timeseries5minkey]) {
        objdata = timeseries[timeseries5minkey];
      } else if (timeseries[timeseries1minkey]) {
        objdata = timeseries[timeseries1minkey];
      }
      if (objdata) {
        const graphlabels = [];
        const graphvalues = [];
        Object.keys(objdata).forEach((key) => {
          const value = objdata[key];
          graphlabels.push(key);
          graphvalues.push(value[closekey]);
        });
        setStocksData({ labels: graphlabels, values: graphvalues });
      }
    }
  }, [props.Stocks]);
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
        text: "NYSE",
        position: "bottom",
        align: "start",
      },
      subtitle: {
        display: true,
        text: "All values are in $",
        align: "end",
      },
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
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
    labels: stocksdata?.labels ?? [],
    datasets: [
      {
        data: stocksdata?.values ?? [],
        backgroundColor: ["#00b386"],
        borderColor: ["green"],
        barThickness: 30,
      },
    ],
  };
  return (
    <>
      {stocksdata && (
        <div className="stocksline p-2">
          <Line data={barchartdata} height={height} options={barchartoptions} />
        </div>
      )}
    </>
  );
}

export default Stocksgraph;
