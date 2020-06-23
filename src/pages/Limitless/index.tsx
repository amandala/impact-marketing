import React from "react";
import Section from "../../components/Section";
import { H1 } from "../../components/Typography";
import styles from "./index.module.scss";
import PhotoDiv from "../../components/PhotoDiv";

export default () => {
  return (
    <div>
      <PhotoDiv className={styles.PhotoDiv1}>
        <Section className={styles.PhotoContent}>
          <div className={styles.LogoWrapper}>
            <img
              className={styles.Logo}
              src="/assets/primary/limitless.png"
              alt="Limitless Stage"
            />
          </div>
          <H1>Learn to become limitless at our new transformational stage</H1>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.PhotoDiv2}>
        <Section className={styles.PhotoContent}>
          <H1>
            Enjoy vibrant live music and an array of motivational speakers,
            trail-blazers, and movement workshops
          </H1>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.PhotoDiv4}>
        <Section className={styles.PhotoContent}>
          <H1>
            All weekend long, workshops and live music acts alternate throughout
            the day to bring true diversity to the festival
          </H1>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.PhotoDiv3}>
        <Section className={styles.PhotoContent}>
          <H1>
            Thursday early entry will feature a full day of transformational
            workshops to get you in a positive mindset before the festival
            starts
          </H1>
        </Section>
      </PhotoDiv>
    </div>
  );
};
