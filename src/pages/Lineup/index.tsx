import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { H1 } from "../../components/Typography";

import styles from "./index.module.scss";

export default () => {
  return (
    <Layout>
      <Section>
        <H1 className={styles.Heading}>Previous Events</H1>
      </Section>
      <Section>
        <a href="/stream">
          <img
            alt="COED-19"
            className={styles.Coed19}
            src="/assets/events/coed19/coed19-lineup.jpg"
          />
        </a>
      </Section>
      <Section>
        <a href="/stream">
          <img
            alt="Impact 2019"
            className={styles.Coed19}
            src="/assets/events/impact2019/lineup19.png"
          />
        </a>
      </Section>
    </Layout>
  );
};
