import React from "react";
import { H1, H2, H3 } from "../../components/Typography";
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
            src="/wordmark.png"
            alt="Impact Wordmark Logo"
          />
          <H1 className={styles.FestivalDescription}>
            Transformational Charity Festival
          </H1>
          <H3>July 2nd - 4th, Pritchard, BC</H3>
        </div>
        <div className={styles.TicketsLink}>
          <Link href="/about">
            What is a transformational charity festival?
          </Link>
        </div>
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
