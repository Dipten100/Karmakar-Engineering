import React, { useCallback, useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";

const SalesAndRevenueChart = ({ Revenue }) => {
  console.log(Revenue);
  const [chartInstance, setChartInstance] = useState(null);

  const createChart = useCallback(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }
  }, [chartInstance]);

  useEffect(() => {
    createChart();
  }, [createChart]);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 20, 30, 40, 50],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Dataset 2",
        data: [50, 40, 30, 20, 10],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Dataset 3",
        data: [20, 30, 40, 50, 60],
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
  return (
    <div>
      <Bar data={data} options={options} ref={(chartInstance) => setChartInstance(chartInstance)} />
    </div>
  );
};

export default SalesAndRevenueChart;
