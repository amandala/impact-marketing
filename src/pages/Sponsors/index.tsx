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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.truesoundevents.com/"
          className={styles.Wrapper}
        >
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-truesound.png"
            alt="True Sound"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.zillalive.com/"
          className={styles.Wrapper}
        >
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-zillalive.png"
            alt="Zillalive"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.elatedsociety.com/"
          className={styles.Wrapper}
        >
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-elated.png"
            alt="Elated Society"
          />
        </a>
      </Section>
      <Section className={styles.Sponsors}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://theartparty.org/donate"
          className={styles.Wrapper}
        >
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-artparty.png"
            alt="The Art Party"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://earthcharter.org/"
          className={styles.Wrapper}
        >
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-earthcharter.png"
            alt="Earth Charter"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/catseyevancouver/"
          className={styles.Wrapper}
        >
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-catseye.png"
            alt="Cat's Eye Solutions"
          />
        </a>
      </Section>
      <Section className={styles.Sponsors}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/lone.wolf.bench/"
          className={styles.Wrapper}
        >
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-wolfpackcreative.png"
            alt="Wolf Pack Creative"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.nowayjoseproductions.com/"
          className={styles.Wrapper}
        >
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-nowayjose.png"
            alt="No Way Jose Productions"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://realtalkswithnav.com/"
          className={styles.Wrapper}
        >
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-realtalkswithnav.png"
            alt="Real Talks with Nav"
          />
        </a>
      </Section>
      <Section className={styles.Sponsors}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/posifest/"
          className={styles.Wrapper}
        >
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-posifest.png"
            alt="PosiFest"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.unify.org/"
          className={styles.Wrapper}
        >
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-unify.png"
            alt="Unify"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.utherverse.net/"
          className={styles.Wrapper}
        >
          <img
            className={styles.Sponsor}
            src="/assets/sponsors/sponsor-utherverse.png"
            alt="Utherverse"
          />
        </a>
      </Section>
    </Layout>
  );
};

export default Sponsors;
