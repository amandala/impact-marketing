import React from "react";
import Head from "../../components/head";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { H1, H2, H3, P } from "../../components/Typography";

import styles from "./index.module.scss";

export default () => {
  return (
    <div>
      <Head title="Stages | Impact Music Festival" />
      <Layout>
        <Section>
          <H1>IMPACT Festival 2020 will have 3 unique stages</H1>
        </Section>
      </Layout>
    </div>
  );
};
