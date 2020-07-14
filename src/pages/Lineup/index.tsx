import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { H1 } from "../../components/Typography";

import styles from "./index.module.scss";

export default () => {
  return (
    <Layout black>
      <Section>
        <Section>
          <img
            alt="Digital Impact"
            className={styles.Poster}
            src="/assets/events/digital-impact/lineup.jpg"
          />
        </Section>
      </Section>
      <Section>
        <H1 className={styles.Heading}>Previous Events</H1>
      </Section>
      <Section>
        <img
          alt="COED-19"
          className={styles.Poster}
          src="/assets/events/coed19/coed19-lineup.jpg"
        />
      </Section>
      <Section>
        <img
          alt="Impact 2019"
          className={styles.Poster}
          src="/assets/events/impact2019/lineup19.png"
        />
      </Section>
    </Layout>
  );
};
