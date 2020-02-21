import React from "react";
import { H1, H2, H3 } from "../../components/Typography";
import Layout from "../../components/Layout";
import Particle from "../../components/Particles";

import styles from "./index.module.scss";

export default () => {
  return (
    <Layout>
      <Particle />
      <div className={styles.AboveTheFold}>
        <div className={styles.Details}>
          <img
            className={styles.Wordmark}
            src="/wordmark.png"
            alt="Impact Wordmark Logo"
          />
          <H1 className={styles.FestivalDescription}>
            Transformational Charity Music Festival
          </H1>
          <H2 className={styles.Location}>Pritchard, BC</H2>
          <H3>July 2nd - 4th</H3>
        </div>
        {/* <div className={styles.TicketsLink}>
          <Link disabled href="/tickets">
            Ticket on sale soon
          </Link>
        </div> */}
      </div>
      {/* <Section>
        <H1 className={styles.SectionHeading}>Our Core Values</H1>
        <div className={styles.ValuesList}>
          <div className={styles.Value}>
            <span className={styles.Placeholder}>value placeholder</span>
          </div>
          <div className={styles.Value}>
            <span className={styles.Placeholder}>value placeholder</span>
          </div>
          <div className={styles.Value}>
            <span className={styles.Placeholder}>value placeholder</span>
          </div>
          <div className={styles.Value}>
            <span className={styles.Placeholder}>value placeholder</span>
          </div>
        </div>
      </Section> */}
    </Layout>
  );
};