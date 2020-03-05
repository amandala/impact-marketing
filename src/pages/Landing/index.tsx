import React from "react";
import { H1, H3 } from "../../components/Typography";
import PadFooterWrapper from "../../components/PadFooterWrapper";
import Particle from "../../components/Particles";
import Link from "../../components/Link";
import TicketsLink from "../../components/TicketLink";

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
            Transformational Charity Festival
          </H1>
          <H3 className={styles.Location}>
            July 2nd - 4th<span className={styles.NoMobile}>, </span>
            <span className={styles.BlockMobile}>Pritchard, BC</span>
          </H3>
        </div>
        <div className={styles.TicketsLink}>
          <Link href="/about">
            What is a transformational charity festival?
          </Link>
        </div>
        <TicketsLink />
      </div>
    </PadFooterWrapper>
  );
};
