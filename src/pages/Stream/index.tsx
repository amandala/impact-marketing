import React from "react";
import ReactGA from "react-ga";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { ButtonLinkExternal } from "../../components/Button";
import { H1 } from "../../components/Typography";
import ChannelLink from "../../components/ChannelLink";
import styles from "./index.module.scss";

export default () => {
  return (
    <div className={styles.Wrapper}>
      {window.screen.width > 1024 && (
        <div className="VideoWrapper">
          <video style={{ height: "100%", width: "100vw" }} autoPlay>
            <source src="/videos/blastoffv2.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      <Layout className={styles.Channels}>
        <ButtonLinkExternal
          className={styles.DonateButton}
          to="https://paypal.me/makeimpact"
          onClick={() => {
            ReactGA.event({
              category: "stream",
              action: "donate button click",
              label: "coed19",
            });
          }}
        >
          Donate @ paypal.me/makeimpact
        </ButtonLinkExternal>
        <Section>
          <H1>Channel Partners</H1>
          <div className={styles.ChannelLinks}>
            <ChannelLink channel="dusk2dawnproductions" />
          </div>
        </Section>
      </Layout>
    </div>
  );
};
