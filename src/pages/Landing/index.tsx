import React from "react";
import { H1, H3 } from "../../components/Typography";
import Layout from "../../components/Layout";
import Particle from "../../components/Particles";
import Link from "../../components/Link";

import styles from "./index.module.scss";

export default () => {
  return (
    <Layout>
      <Particle />
      <div className={styles.AboveTheFold}>
        <div className={styles.Details}>
          <img
            className={styles.Wordmark}
            src="/assets/wordmark.png"
            alt="Impact Wordmark Logo"
          />
          <H1 className={styles.FestivalDescription}>
            Transformational Charity Organization
          </H1>
          <H3 className={styles.Location}>
            April 16 & 17 6pm - 1am<span className={styles.NoMobile}>, </span>
            <span className={styles.BlockMobile}>COED-19 Twitch Stream</span>
          </H3>
        </div>
        <div className={styles.HomeLink}>
          <Link href="/about">
            What is a transformational charity organization?
          </Link>
        </div>
      </div>
    </Layout>
  );
};
