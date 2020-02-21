import React from "react";

import Section from "../../components/Section";
import { H1, P } from "../../components/Typography";
import Layout from "../../components/Layout";

import styles from "./index.module.scss";

export default () => {
  return (
    <Layout>
      <Section>
        <H1>Lineup TBA</H1>
      </Section>
      <Section>
        <P>Check out last year's lineup</P>
        <img
          alt="Last year's lineup"
          className={styles.Poster}
          src="lineup19.png"
        />
      </Section>
    </Layout>
  );
};