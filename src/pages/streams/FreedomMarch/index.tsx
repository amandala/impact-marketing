import React from "react";
import ReactGA from "react-ga";

import TwitchChannel from "../../../components/TwitchChannel";
import Layout from "../../../components/Layout";
import Section from "../../../components/Section";
import { ButtonLinkExternal } from "../../../components/Button";

import styles from "./index.module.scss";

const BlackFreedomSociety = () => {
  return (
    <div>
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
      </Layout>
      <Section className={styles.Links}>
        <ButtonLinkExternal
          className={styles.DonateButton}
          to="https://www.hogansalleysociety.org/donations/"
          onClick={() => {
            ReactGA.event({
              category: "external link",
              action: "donate button click",
              label: "freedom march - Hogan's Alley Society",
            });
          }}
        >
          Donate to: Hogan's Alley Society
        </ButtonLinkExternal>
        <ButtonLinkExternal
          className={styles.DonateButton}
          to="https://www.paypal.me/blackfreedomsociety"
          onClick={() => {
            ReactGA.event({
              category: "external link",
              action: "donate button click",
              label: "freedom march - Black Freedom Society",
            });
          }}
        >
          Donate to: Black Freedom Society
        </ButtonLinkExternal>
        <ButtonLinkExternal
          className={styles.DonateButton}
          to="https://blacklivesmatters.carrd.co/"
          onClick={() => {
            ReactGA.event({
              category: "external link",
              action: "info button click",
              label: "freedom march",
            });
          }}
        >
          Black Lives Matter Support
        </ButtonLinkExternal>
      </Section>
      <TwitchChannel channel={"dusk2dawnproductions"} />
    </div>
  );
};

export default BlackFreedomSociety;
