import React from "react";
import YouTube from "react-youtube-embed";

import Layout from "../../components/Layout";
import Section from "../../components/Section";

import styles from "./index.module.scss";

const BlackFreedomSociety = () => {
  return (
    <Layout className={styles.Black}>
      <div className={styles.LogoWrapper}>
        <img
          className={styles.Logo}
          src="/assets/black-freedom-society.png"
          alt="Black Freedom Society Logo"
        />
      </div>
      <Section>
        <img
          className={styles.Poster}
          src="/assets/freedom-march-poster.png"
          alt="Freedom March Poster"
        />
      </Section>
      <Section>
        <YouTube id="P-_orN0eG9k" />
      </Section>
    </Layout>
  );
};

export default BlackFreedomSociety;
