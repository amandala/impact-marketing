import React from "react";
import Head from "../../components/head";
import { H1, H2, H3, P } from "../../components/Typography";

import styles from "./index.module.scss";

export default () => {
  return (
    <>
      <Head title="Impact Music Festival" />
      <div>
        <div className={styles.AboveTheFold}>
          <img className={styles.Wordmark} src="/wordmark.png" alt="impact" />
          <H1 className={styles.Sub}>
            Transformational Charity Music Festival
          </H1>
          <H2>Pritchard, BC</H2>
          <H3>July 3rd & 4th</H3>
        </div>
      </div>
    </>
  );
};
