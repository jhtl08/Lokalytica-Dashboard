import Image from "next/image";
import styles from "./readings.module.css";

const Readings = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Readings</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Username</td>
            <td>Date</td>
            <td>Power Consumed</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="https://images.pexels.com/photos/9879552/pexels-photo-9879552.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                User00007
              </div>
            </td>
            <td>16.03.2024</td>
            <td>183.7 kWh</td>
            <td>
              <span className={`${styles.status} ${styles.less}`}>
                Decreased
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="https://images.pexels.com/photos/20189631/pexels-photo-20189631/free-photo-of-a-vase-of-yellow-tulips-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                User00005
              </div>
            </td>
            <td>02.03.2024</td>
            <td>208.2 kWh</td>
            <td>
              <span className={`${styles.status} ${styles.neutral}`}>
                Neutral
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="https://images.pexels.com/photos/20532916/pexels-photo-20532916/free-photo-of-red-haired-woman-in-jacket-on-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                User00006
              </div>
            </td>
            <td>01.03.2024</td>
            <td>210.2 kWh</td>
            <td>
              <span className={`${styles.status} ${styles.more}`}>
                Increased
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Readings;
