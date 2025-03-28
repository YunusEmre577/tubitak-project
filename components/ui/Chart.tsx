"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title,
  ChartOptions,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { FC } from "react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title
);
type ChartType = "bar" | "line";
interface CustomChartProps {
  type: ChartType;
  data: object;
  className?: string;
}
const CustomChart: FC<CustomChartProps> = ({ type, data, className }) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: "hsla(257, 12%, 10%, 0.6)",
        titleColor: "#fff",
        bodyColor: "#889",
        cornerRadius: 20,
        padding: 15,
        displayColors: false,
        titleFont: {
          family: "Instrument Sans",
          weight: 600,
          size: 13,
        },
        bodyFont: {
          family: "Instrument Sans",
          weight: 400,
          size: 12,
        },
        boxPadding: 6,
      },
      legend: {
        position: "top" as const,
        fullSize: false,
        labels: {
          color: "#fff",
          font: {
            family: "Instrument Sans",
            size: 14,
            weight: 500,
          },
        },
      },
      title: {},
    },
    scales: {
      x: {
        ticks: {
          color: "#fff",
          font: { family: "Instrument Sans", weight: 600 },
        },
        grid: {
          color: "rgba(255,255,255,0.01)",
        },
        offset: true,
      },
      y: {
        ticks: {
          color: "#fff",
          font: { family: "Instrument Sans", weight: 600 },
        },
        grid: {
          color: "rgba(255,255,255,0.01)",
        },
        offset: true,
      },
    },
  } as const satisfies ChartOptions<"bar"|"line">

  const ChartComponent = type === "bar" ? Bar : Line;
  return (
    <div className={`relative w-full ${className}`}>
      <ChartComponent data={data as any} options={defaultOptions} />
    </div>
  );
};

export default CustomChart;
