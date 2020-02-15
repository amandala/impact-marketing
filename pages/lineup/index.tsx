import React from "react";
import Head from "../../components/head";
import Section from "../../components/Section";
import { H1, P } from "../../components/Typography";
import Layout from "../../components/Layout";

import styles from "./index.module.scss";

export default () => {
  return (
    <Layout>
      <Head title="Lineup | Impact Music Festival" />
      <Section>
        <H1>Lineup TBA</H1>
      </Section>
      <Section>
        <P>Check out last year's lineup</P>
        <img className={styles.Poster} src="lineup19.png" />
      </Section>
    </Layout>
  );
};
