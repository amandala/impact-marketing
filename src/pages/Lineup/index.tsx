import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { H1 } from "../../components/Typography";

import styles from "./index.module.scss";

export default () => {
  return (
    <Layout>
      <Section>
        <H1 className={styles.Heading}>
          We're streaming awesome bass straight to your home!
        </H1>
      </Section>
      <Section>
        <a href="/stream">
          <img
            alt="COED-19"
            className={styles.Coed19}
            src="/assets/coed19/coed19-lineup.jpg"
          />
        </a>
      </Section>
    </Layout>
  );
};
