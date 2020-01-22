import React from "react";
import Head from "../../components/head";

import styles from "./index.module.scss";

export default () => {
  return (
    <div>
      <Head title="Home" />
      <img className={styles.Image} src="/lineup.png" alt="lineup" />
    </div>
  );
};
