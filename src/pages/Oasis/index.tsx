import React from "react";

import Section from "../../components/Section";
import { H1 } from "../../components/Typography";

import styles from "./index.module.scss";
import PhotoDiv from "../../components/PhotoDiv";

export default () => {
  return (
    <div className={styles.Page}>
      <PhotoDiv className={styles.PhotoDiv1}>
        <Section className={styles.PhotoContent}>
          <div className={styles.LogoWrapper}>
            <img className={styles.Logo} src="/oasis.png" alt="Oasis Stage" />
          </div>
          <H1>
            Enjoy human connection in the Lumid Lounge and get lost enjoying the
            various artwork found at this unique stage
          </H1>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.PhotoDiv2}>
        <Section className={styles.PhotoContent}>
          <H1>Featuring eye-popping visuals</H1>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.PhotoDiv3}>
        <Section className={styles.PhotoContent}>
          <H1>Live graffiti painting</H1>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.PhotoDiv4}>
        <Section className={styles.PhotoContent}>
          <H1>Unique art installations</H1>
        </Section>
      </PhotoDiv>
    </div>
  );
};
