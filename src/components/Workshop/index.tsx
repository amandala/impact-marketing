import React from "react";
import styles from "./index.module.scss";

const Workshop = ({
  time,
  title,
  host,
}: {
  time: string;
  title: string;
  host: string;
}) => {
  return (
    <li className={styles.Workshop}>
      <span className={styles.Time}>{time}</span>
      <span className={styles.Host}>{host}</span>
      <span className={styles.Title}>{title}</span>
    </li>
  );
};

export default Workshop;
