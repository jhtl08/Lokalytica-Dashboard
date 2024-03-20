import Card from "@/components/dashboard/card/card";
import Chart from "@/components/dashboard/chart/chart";
import styles from "@/components/dashboard/dashboard.module.css";
import Rightbar from "@/components/dashboard/rightbar/rightbar";
import Readings from "@/components/dashboard/readings/readings";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card type="Users" data="3" change="3 more" />
          <Card type="Power Consumed" data="602.07 kWh" change="4.99% less" />
          <Card type="Cost" data="₱ 7,174.72" change="0.18% less" />
        </div>
        <Chart />
        <Readings />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
