import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { H1, P } from "../../components/Typography";

import styles from "./index.module.scss";
import { ButtonLink } from "../../components/Button";

export default () => {
  return (
    <Layout className={styles.Black}>
      <Section>
        <H1 impact>
          We are on a mission to unite the world and maximize our collective
          impact!
        </H1>
        <P>
          Check out the great causes we are supporting for our Digital Impact
          event July 16 - 19.
        </P>
      </Section>
      <Section>2</Section>
      <Section>
        <ButtonLink to="/apply">Apply as a Creative</ButtonLink>
      </Section>
      <Section>
        <ButtonLink to="/liveart">Graffiti Jam Details</ButtonLink>
      </Section>
    </Layout>
  );
};
