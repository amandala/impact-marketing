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
          <Link href="/odessy">
            <div className={styles.LogoWrapper}>
              <img
                className={styles.Logo}
                src="/odessy.png"
                alt="Odessey Stage"
              />
            </div>
          </Link>
          <Link href="/oasis">
            <div className={styles.LogoWrapper}>
              <img className={styles.Logo} src="/oasis.png" alt="Oasis Stage" />
            </div>
          </Link>
          <Link href="/limitless">
            <div className={styles.LogoWrapper}>
              <img
                className={styles.Logo}
                src="/limitless.png"
                alt="Limitless Stage"
              />
            </div>
          </Link>
        </div>
      </PhotoDiv>
      {/* <Layout>
        <Section>
          <div className={styles.LogoWrapper}>
            <img className={styles.Logo} src="/oasis.png" alt="Oasis Stage" />
          </div>
          <H1>
            The digital Oasis is somewhere you must find on your journey to
            experience peaceful serenity.
          </H1>
          <H2>
            Enjoy human connection in the Lumid Lounge and experience the
            various artwork found at this unique stage
          </H2>
        </Section>
        <Section>
          <div className={styles.LogoWrapper}>
            <img
              className={styles.Logo}
              src="/limitless.png"
              alt="Limitless Stage"
            />
          </div>
          <H1>Learn to become Limitless at our new transformational stage</H1>
        </Section>
      </Layout> */}
    </div>
  );
};
