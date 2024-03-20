import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ type, data, change }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={20} />
      <div className={styles.texts}>
        <span className={styles.title}>Total {type}</span>
        <span className={styles.number}>{data}</span>
        <span className={styles.detail}>
          <span className={styles.positive}>{change} </span> than previous month
        </span>
      </div>
    </div>
  );
};

export default Card;
