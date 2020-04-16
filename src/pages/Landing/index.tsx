import React from "react";
import { H1, H3 } from "../../components/Typography";
import PadFooterWrapper from "../../components/PadFooterWrapper";
import Particle from "../../components/Particles";
import Link from "../../components/Link";

import styles from "./index.module.scss";

export default () => {
  return (
    <PadFooterWrapper>
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
            COED-19 Twitch Stream April 16 & 17 6pm - 2am
          </Link>
        </div>
      </div>
    </PadFooterWrapper>
  );
};
