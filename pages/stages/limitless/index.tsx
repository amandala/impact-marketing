import React from "react";
import Head from "../../../components/head";

import Section from "../../../components/Section";
import { H1 } from "../../../components/Typography";

import styles from "./index.module.scss";

export default () => {
  return (
    <div className={styles.Page}>
      <Head title="Limitless | Impact Music Festival" />
      <div className={styles.PhotoDiv1}>
        <Section className={styles.PhotoContent}>
          <div className={styles.LogoWrapper}>
            <img
              className={styles.Logo}
              src="/limitless.png"
              alt="Limitless Stage"
            />
          </div>
          <H1>Learn to become limitless at our new transformational stage</H1>
        </Section>
      </div>
      <div className={styles.PhotoDiv2}>
        <Section className={styles.PhotoContent}>
          <H1>
            Enjoy Vibrant Live Music and an array of motivational speakers,
            trail-blazers, and movement workshops.
          </H1>
        </Section>
      </div>
      <div className={styles.PhotoDiv3}>
        <Section className={styles.PhotoContent}>
          <H1>
            Purchase an early entry ticket to become immersed in the
            transformation. Thursday will feature many transformational aspects
            to get you in a positive mindset before the festival starts
          </H1>
        </Section>
      </div>
      <div className={styles.PhotoDiv4}>
        <Section className={styles.PhotoContent}>
          <H1>
            During the rest of the event, workshops and Live music acts will
            take the stage, alternating throughout the day to bring true
            diversity to the festival
          </H1>
        </Section>
      </div>
    </div>
  );
};
