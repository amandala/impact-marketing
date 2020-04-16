import React from "react";

import TwitchChannel from "../../components/TwitchChannel";
import Layout from "../../components/Layout";
import { ButtonLinkExternal } from "../../components/Button";
import { H1 } from "../../components/Typography";
import ChannelLink from "./ChannelLink";
import styles from "./index.module.scss";

export default () => {
  return (
    <div className={styles.Wrapper}>
      <img
        alt="COED-19"
        className={styles.Coed19}
        src="/assets/coed19/coed19-day1.jpg"
      />

      <Layout className={styles.Channels}>
        <ButtonLinkExternal
          className={styles.DonateButton}
          to="https://paypal.me/makeimpact"
        >
          Donate @ paypal.me/makeimpact
        </ButtonLinkExternal>
        <H1>Thursday's Showcase Channels</H1>
        <div className={styles.ChannelLinks}>
          <ChannelLink channel="dusk2dawnproductions" />
          <ChannelLink channel="fouroverfourmusic" />
          <ChannelLink channel="socialsound" />
          <ChannelLink channel="truesoundevents" />
        </div>
      </Layout>
      {/* <TwitchChannel channel={"dusk2dawnproductions"} /> */}
    </div>
  );
};
