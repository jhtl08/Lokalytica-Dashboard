export const topDealUsers = [
  {
    id: 1,
    username: "Average Monthly Consumption",
    amount: "226.8MW",
  },
  {
    id: 2,
    username: "Average Cost",
    amount: "₱8,635,678.23",
  },
  {
    id: 3,
    username: "Population",
    amount: "4,987 residents",
  },
  {
    id: 4,
    username: "Energy Savings",
    amount: "-53,623kWh",
  },
  {
    id: 5,
    username: "Peak Recorded",
    amount: "31.0kWh",
  },
  {
    id: 6,
    username: "Estimated GHG Emissions",
    amount: "25.02 tons",
  },
  {
    id: 7,
    username: "Cumulative Grid Downtime",
    amount: "0",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Peak Temp",
  number: "35.2°C",
  dataKey: "temp",
  percentage: 6.25,
  chartData: [
    { name: "Sun", temp: 33.2 },
    { name: "Mon", temp: 34.4 },
    { name: "Tue", temp: 33.2 },
    { name: "Wed", temp: 33.5 },
    { name: "Thu", temp: 35.2 },
    { name: "Fri", temp: 34.0 },
    { name: "Sat", temp: 33.9 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Humidity",
  number: "65%",
  dataKey: "humidity",
  percentage: 5.8,
  chartData: [
    { name: "Sun", humidity: 65.0 },
    { name: "Mon", humidity: 61.0 },
    { name: "Tue", humidity: 63.2 },
    { name: "Wed", humidity: 66.4 },
    { name: "Thu", humidity: 59.5 },
    { name: "Fri", humidity: 67.2 },
    { name: "Sat", humidity: 69.0 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Precipitation",
  number: "10 mm",
  dataKey: "precipitation",
  percentage: -12,
  chartData: [
    { name: "Sun", precipitation: 0 },
    { name: "Mon", precipitation: 5 },
    { name: "Tue", precipitation: 0 },
    { name: "Wed", precipitation: 0 },
    { name: "Thu", precipitation: 10 },
    { name: "Fri", precipitation: 0 },
    { name: "Sat", precipitation: 0 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Irradiance",
  number: "981 W/m²",
  dataKey: "irradiance",
  percentage: 11,
  chartData: [
    { name: "Sun", irradiance: 967 },
    { name: "Mon", irradiance: 881 },
    { name: "Tue", irradiance: 895 },
    { name: "Wed", irradiance: 871 },
    { name: "Thu", irradiance: 825 },
    { name: "Fri", irradiance: 950 },
    { name: "Sat", irradiance: 981 },
  ],
};

export const barChartBoxRevenue = {
  title: "Average Energy Consumption per Time of Day (kWh)",
  color: "#8884d8",
  dataKey: "consumption",
  chartData: [
    {
      name: "00",
      consumption: 300,
    },
    {
      name: "01",
      consumption: 250,
    },
    {
      name: "02",
      consumption: 200,
    },
    {
      name: "03",
      consumption: 180,
    },
    {
      name: "04",
      consumption: 170,
    },
    {
      name: "05",
      consumption: 200,
    },
    {
      name: "06",
      consumption: 500,
    },
    {
      name: "07",
      consumption: 800,
    },
    {
      name: "08",
      consumption: 1000,
    },
    {
      name: "09",
      consumption: 900,
    },
    {
      name: "10",
      consumption: 850,
    },
    {
      name: "11",
      consumption: 900,
    },
    {
      name: "12",
      consumption: 1050,
    },
    {
      name: "13",
      consumption: 1100,
    },
    {
      name: "14",
      consumption: 1050,
    },
    {
      name: "15",
      consumption: 1100,
    },
    {
      name: "16",
      consumption: 1050,
    },
    {
      name: "17",
      consumption: 1000,
    },
    {
      name: "18",
      consumption: 1100,
    },
    {
      name: "19",
      consumption: 1000,
    },
    {
      name: "20",
      consumption: 800,
    },
    {
      name: "21",
      consumption: 850,
    },
    {
      name: "22",
      consumption: 500,
    },
    {
      name: "23",
      consumption: 300,
    },
  ],
};
