import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

const data = [
  { name: "Residential", value: 108, color: "#0088FE" },
  { name: "Commercial", value: 45, color: "#00C49F" },
  { name: "Industrial", value: 53, color: "#FFBB28" },
  { name: "Losses", value: 21, color: "#FF4242" },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h3>Monthly Energy Consumption Distribution (in MW)</h3>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"60%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value} MW</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
