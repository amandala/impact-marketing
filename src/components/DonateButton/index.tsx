import React from "react";
import Section from "../../components/Section";
import { Tiny } from "../../components/Typography";
import styles from "./index.module.scss";

const DonateButton = ({ href }: { href: string }) => {
  return (
    <Section className={styles.DonateWrapper}>
      <a
        className={styles.Donate}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        Donate
        <img
          className={styles.Logo}
          src="/assets/stages/causes.png"
          alt="Causes Logo"
        />
      </a>
      <a
        className={styles.Donate}
        target="_blank"
        rel="noopener noreferrer"
        href="https://paypal.me/dusk2dawnproductions"
      >
        Donate
        <img
          className={styles.Logo}
          src="/assets/causes/artist-fund-logo.png"
          alt="Artist Fund Logo"
        />
        <Tiny>Impact Artist Fund</Tiny>
      </a>
    </Section>
  );
};

export default DonateButton;
