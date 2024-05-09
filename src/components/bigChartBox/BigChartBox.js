import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "2023-8",
    Purok1: 48510.96,
    Purok2: 45491.9,
    Purok3: 59681.31,
  },
  {
    name: "2023-9",
    Purok1: 45740.07,
    Purok2: 57597.4,
    Purok3: 58785.95,
  },
  {
    name: "2023-10",
    Purok1: 49904.03,
    Purok2: 48180.57,
    Purok3: 55230.85,
  },
  {
    name: "2023-11",
    Purok1: 40650.91,
    Purok2: 49280.47,
    Purok3: 57100.5,
  },
  {
    name: "2023-12",
    Purok1: 40917.28,
    Purok2: 47226.42,
    Purok3: 52494.14,
  },
  {
    name: "2024-1",
    Purok1: 44409.68,
    Purok2: 53717.52,
    Purok3: 56983.8,
  },
  {
    name: "2024-2",
    Purok1: 43467.94,
    Purok2: 51017.9,
    Purok3: 55518.67,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Zonal Energy Consumption Distribution</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Purok3"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="Purok2"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="Purok1"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
