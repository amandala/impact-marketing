import React from "react";

import Link from "../../components/Link";

import Section from "../../components/Section";
import { H1, P } from "../../components/Typography";

import styles from "./index.module.scss";
import PhotoDiv from "../../components/PhotoDiv";

export default () => {
  return (
    <div className={styles.Page}>
      <PhotoDiv className={styles.Stages}>
        <Section className={styles.PhotoContent}>
          <H1>impact Festival 2020 has 3 unique stages</H1>
          <P>
            Each will be equipped with world class PK Sound and an
            out-of-this-world visual experience
          </P>
        </Section>
        <div className={styles.MainLogos}>
          <Link href="/odyssey">
            <div className={styles.LogoWrapper}>
              <img
                className={styles.Logo}
                src="/assets/odyssey.png"
                alt="Odyssey Stage"
              />
            </div>
          </Link>
          <Link href="/oasis">
            <div className={styles.LogoWrapper}>
              <img
                className={styles.Logo}
                src="/assets/oasis.png"
                alt="Oasis Stage"
              />
            </div>
          </Link>
          <Link href="/limitless">
            <div className={styles.LogoWrapper}>
              <img
                className={styles.Logo}
                src="/assets/limitless.png"
                alt="Limitless Stage"
              />
            </div>
          </Link>
        </div>
      </PhotoDiv>
    </div>
  );
};
