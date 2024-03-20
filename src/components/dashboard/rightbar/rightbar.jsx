import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdLibraryBooks } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/lightning.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>⚡ Lightning News</span>
          <h3 className={styles.title}>Meralco rates up in March billing</h3>
          <span className={styles.subtitle}>March 9, 2024</span>
          <p className={styles.description}>
            Energy utility provider Manila Electric Co. (Meralco) has increased
            electricity rates this March by P0.0229 per kilowatt-hour...
          </p>
          <button className={styles.button}>
            <MdLibraryBooks />
            <a href="https://www.philstar.com/headlines/2024/03/09/2339242/meralco-rates-march-billing">
              Read
            </a>
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>🔋 Energy Update</span>
          <h3 className={styles.title}>
            US urges Philippines to embrace renewable energy storage
          </h3>
          <span className={styles.subtitle}>January 30, 2024</span>
          <p className={styles.description}>
            After a severe power outage hit Panay Island and other parts of
            Western Visayas earlier this month, the United States is urging...
          </p>
          <button className={styles.button}>
            <MdLibraryBooks />
            <a href="https://www.gmanetwork.com/news/money/economy/895911/us-urges-philippines-to-embrace-renewable-energy-storage/story/">
              Read
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
