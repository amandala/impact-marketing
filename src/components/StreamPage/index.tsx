import React from "react";

import TwitchChannel from "../../components/TwitchChannel";

import { ButtonLinkExternal } from "../../components/Button";
import StreamNav from "./StreamNav";

import styles from "./index.module.scss";

export default ({
  channel,
  eventLogo,
  eventName,
}: {
  channel: string;
  eventLogo: string;
  eventName: string;
}) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <img
          className={styles.Logo}
          src={`/assets/streamChannelLogos/${channel}.png`}
          alt={`${channel} Twitch Stream`}
        />
      </div>
      <ButtonLinkExternal
        className={styles.DonateButton}
        to="https://paypal.me/makeimpact"
      >
        Donate @ paypal.me/makeimpact
      </ButtonLinkExternal>
      <TwitchChannel channel={channel} />
      <img alt={eventName} className={styles.EventGraphic} src={eventLogo} />
      <StreamNav
        activeChannel={channel}
        channels={[
          "dusk2dawnproductions",
          "fouroverfourmusic",
          "socialsound",
          "truesoundevents",
        ]}
      />
    </div>
  );
};
