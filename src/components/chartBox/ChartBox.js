import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip, YAxis } from "recharts";

const ChartBox = (props) => {
  // Calculate the minimum and maximum values of the data for the Y-axis domain
  const minYValue = Math.min(
    ...props.chartData.map((entry) => entry[props.dataKey])
  );
  const maxYValue = Math.max(
    ...props.chartData.map((entry) => entry[props.dataKey])
  );

  // Calculate the padding for the Y-axis domain
  const yDomainPadding = Math.abs(maxYValue - minYValue) * 0.1;

  const yDomain = [minYValue - yDomainPadding, maxYValue + yDomainPadding];

  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <YAxis domain={yDomain} hide={true} />
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
