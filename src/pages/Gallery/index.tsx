import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { InlineLink } from "../../components/Link";
import { H1, H2, P } from "../../components/Typography";

import styles from "./index.module.scss";

export default () => {
  return (
    <Layout className={styles.Black}>
      <Section className={styles.HeadingWrapper}>
        <img
          className={styles.Logo}
          src="/assets/impactlogo.png"
          alt="Impact Logo"
        />
        <div>
          <H1 impact className={styles.Heading}>
            Virtual Art Gallery
          </H1>
        </div>
      </Section>
      <Section>
        <P>More details coming soon</P>
      </Section>
    </Layout>
  );
};
