import React from "react";
import ReactGA from "react-ga";
import cx from "classnames";
import TwitchChannel from "../../components/TwitchChannel";
import Layout from "../../components/Layout";
import { ButtonLinkExternal } from "../../components/Button";
import StreamNav from "./StreamNav";

import styles from "./index.module.scss";

export default ({
  channel,
  eventChannels,
  eventLogo,
  eventName,
}: {
  channel: string;
  eventChannels: Array<string>;
  eventLogo: string;
  eventName: string;
}) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <img
          className={cx(styles.Logo, {
            [styles.LogoInvert]: channel === "zillalivepresents",
          })}
          src={`/assets/streamChannelLogos/${channel}.png`}
          alt={`${channel} Twitch Stream`}
        />
      </div>
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
      <TwitchChannel channel={channel} />
      <Layout className={styles.Nav}>
        <StreamNav activeChannel={channel} channels={eventChannels} />
        <img alt={eventName} className={styles.EventGraphic} src={eventLogo} />
      </Layout>
    </div>
  );
};
