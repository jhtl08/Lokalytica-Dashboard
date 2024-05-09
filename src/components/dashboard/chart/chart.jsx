"use client";

import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    { name: "2023-8", Consumption: 200.55, Cost: 10.8991 },
    { name: "2023-9", Consumption: 199.3, Cost: 11.3997 },
    { name: "2023-10", Consumption: 205.57, Cost: 11.82 },
    { name: "2023-11", Consumption: 206.78, Cost: 12.0545 },
    { name: "2023-12", Consumption: 210.62, Cost: 11.2584 },
    { name: "2024-01", Consumption: 211.22, Cost: 11.343 },
    { name: "2024-02", Consumption: 200.68, Cost: 11.9168 },
  ];

  const leftAxisDomain = [
    Math.min(...data.map((d) => d.Consumption)) - 5,
    Math.max(...data.map((d) => d.Consumption)) + 5,
  ];

  const rightAxisDomain = [
    Math.min(...data.map((d) => d.Cost)) - 1,
    Math.max(...data.map((d) => d.Cost)) + 1,
  ];

  const decimalFormatter = (tick) => {
    return tick.toFixed(1);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Average Monthly Power Consumption per Household and Electricity Cost
      </h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis
            yAxisId="left"
            label={{
              value: "in kWh",
              angle: -90,
              position: "insideLeft",
              dx: -10,
              dy: 30,
            }}
            domain={leftAxisDomain}
            tickFormatter={decimalFormatter} // Apply the formatter here
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{
              value: "in PhP/kWh",
              angle: 90,
              position: "insideRight",
              dx: 3,
              dy: 40,
            }}
            domain={rightAxisDomain}
            tickFormatter={decimalFormatter} // Apply the formatter here
          />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="Consumption"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            yAxisId="left"
          />
          <Line
            type="monotone"
            dataKey="Cost"
            stroke="#82ca9d"
            yAxisId="right"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
