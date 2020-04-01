import React from "react";

import Section from "../../components/Section";
import { H1, P } from "../../components/Typography";
import Layout from "../../components/Layout";

import styles from "./index.module.scss";

export default () => {
  return (
    <Layout className={styles.Coed}>
      <Section>
        <H1>We're streaming awesome bass straight to your home!</H1>
      </Section>
      <Section>
        <a href="/stream">
          <img
            alt="COED-19"
            className={styles.Coed19}
            src="/assets/coed19-min.jpg"
          />
        </a>
      </Section>
    </Layout>
  );
};
