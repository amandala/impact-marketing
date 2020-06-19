import React from "react";
import cx from "classnames";
import TwitchChannel from "../../components/TwitchChannel";

import styles from "./index.module.scss";

export default ({
  channel,
  eventLogo,
  eventName,
  children,
}: {
  channel: string;
  eventChannels: Array<string>;
  eventLogo?: string;
  eventName: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <div className={styles.LogoWrapper}>
          <img
            className={cx(styles.Logo, {
              [styles.LogoInvert]: channel === "zillalivepresents",
            })}
            src={`/assets/streamChannelLogos/${channel}.png`}
            alt={`${channel} Twitch Stream`}
          />
        </div>
      </div>
      {eventLogo ? (
        <div className={styles.EventGraphicWrapper}>
          <img
            alt={eventName}
            className={styles.EventGraphic}
            src={eventLogo}
          />
        </div>
      ) : null}
      {children}
      <TwitchChannel channel={channel} />
    </div>
  );
};
