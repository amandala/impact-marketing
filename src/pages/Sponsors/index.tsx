import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { H1, P } from "../../components/Typography";
import styles from "./index.module.scss";

const Sponsors = () => {
  return (
    <Layout className={styles.Layout}>
      <Section>
        <H1 impact>Digital impact Sponsors and Partners</H1>
        <P>
          It takes a whole lot of behind the scenes effort to organize a
          transformational digital fesitval and we are eternally grateful for
          the generous help from our sponsors and partners.
        </P>
      </Section>

      <Section className={styles.Sponsors}>
        <div className={styles.Wrapper}>
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-truesound.png"
            alt="True Sound"
          />
        </div>
        <div className={styles.Wrapper}>
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-zillalive.png"
            alt="Zillalive"
          />
        </div>
        <div className={styles.Wrapper}>
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-elated.png"
            alt="Elated Society"
          />
        </div>
      </Section>
      <Section className={styles.Sponsors}>
        <div className={styles.Wrapper}>
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-artparty.png"
            alt="The Art Party"
          />
        </div>
        <div className={styles.Wrapper}>
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-earthcharter.png"
            alt="Earth Charter"
          />
        </div>
        <div className={styles.Wrapper}>
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-catseye.png"
            alt="Cat's Eye Solutions"
          />
        </div>
      </Section>
      <Section className={styles.Sponsors}>
        <div className={styles.Wrapper}>
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-wolfpackcreative.png"
            alt="Wolf Pack Creative"
          />
        </div>
        <div className={styles.Wrapper}>
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-nowayjose.png"
            alt="No Way Jose Productions"
          />
        </div>
        <div className={styles.Wrapper}>
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-realtalkswithnav.png"
            alt="Real Talks with Nav"
          />
        </div>
      </Section>

      <Section className={styles.Sponsors}>
        <div className={styles.Wrapper}>
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-posifest.png"
            alt="PosiFest"
          />
        </div>
        <div className={styles.Wrapper}>
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-unify.png"
            alt="Unify"
          />
        </div>
        <div className={styles.Wrapper}>
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-utherverse.png"
            alt="Utherverse"
          />
        </div>
      </Section>
    </Layout>
  );
};

export default Sponsors;
