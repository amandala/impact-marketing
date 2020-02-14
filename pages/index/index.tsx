import React from "react";
import Link from "../../components/Link";
import Head from "../../components/head";
import { H1, H2, H3, P } from "../../components/Typography";
import Section from "../../components/Section";
import Layout from "../../components/Layout";
import Particle from "../../components/Particles";

import styles from "./index.module.scss";

export default () => {
  return (
    <Layout>
      <Head title="Home - Impact Music Festival" />
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
          <H2>Pritchard, BC</H2>
          <H3>July 2nd - 4th</H3>
        </div>
        <div className={styles.TicketsLink}>
          <Link href="/tickets">Get Tickets</Link>
        </div>
      </div>
      <Section>
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
      </Section>
    </Layout>
  );
};
