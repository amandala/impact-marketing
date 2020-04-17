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
      <img
        alt="COED-19"
        className={styles.Coed19}
        src="/assets/coed19/coed19-promo.jpg"
      />
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
          <H1>Friday's Channel Partners</H1>
          <div className={styles.ChannelLinks}>
            <ChannelLink channel="dusk2dawnproductions" />
            <ChannelLink channel="emengymusic" />
            <ChannelLink channel="zillalivepresents" />
            <ChannelLink channel="truesoundevents" />
          </div>
        </Section>
      </Layout>
      <img
        alt="COED-19"
        className={styles.Schedule}
        src="/assets/coed19/coed19-day2.jpg"
      />
    </div>
  );
};
