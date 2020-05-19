import React from "react";
import { H1 } from "../../components/Typography";

import Particle from "../../components/Particles";
import Link from "../../components/Link";

import styles from "./index.module.scss";

export default () => {
  return (
    <div>
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
        </div>
        <div className={styles.HomeLink}>
          <Link className={styles.CTA} href="/stream">
            DIF - Digital Impact Festival July 16 - 19
          </Link>
        </div>
      </div>
    </div>
  );
};
