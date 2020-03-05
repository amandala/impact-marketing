import React from "react";

import Section from "../../components/Section";
import { H1, P } from "../../components/Typography";
import PadFooterWrapper from "../../components/PadFooterWrapper";

import styles from "./index.module.scss";

export default () => {
  return (
    <PadFooterWrapper>
      <div className={styles.Wrapper}>
        <Section>
          <H1>Lineup TBA</H1>
        </Section>
        <Section>
          <P>Check out last year's lineup</P>
          <img
            alt="Last year's lineup"
            className={styles.Poster}
            src="/assets/lineup19.png"
            //TODO: get compressed image
          />
        </Section>
      </div>
    </PadFooterWrapper>
  );
};
