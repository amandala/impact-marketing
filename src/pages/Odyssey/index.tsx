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
            <img
              className={styles.Logo}
              src="/odyssey.png"
              alt="Odyssey Stage"
            />
          </div>
          <H1>
            A spaceship has crash-landed on our planet, bringing hard hitting
            bass that is sure to bring you to another world.
          </H1>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.PhotoDiv2}>
        <Section className={styles.PhotoContent}>
          <H1>Featuring world class talent</H1>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.PhotoDiv3}>
        <Section className={styles.PhotoContent}>
          <H1>Next level listening experience</H1>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.PhotoDiv4}>
        <Section className={styles.PhotoContent}>
          <H1>Unique stage design</H1>
        </Section>
      </PhotoDiv>
    </div>
  );
};
