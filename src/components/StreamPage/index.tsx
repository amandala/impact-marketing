import React from "react";
import cx from "classnames";
import TwitchChannel from "../../components/TwitchChannel";
import WidgetBot from "@widgetbot/react-embed";

import styles from "./index.module.scss";

export default ({
  channel,
  channelLogo,
  eventLogo,
  eventName,
  children,
}: {
  channel: string;
  channelLogo: string;
  eventLogo?: string;
  eventName: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        {eventLogo ? (
          <div className={styles.EventLogoWrapper}>
            <img alt={eventName} className={styles.EventLogo} src={eventLogo} />
          </div>
        ) : null}
        <div className={styles.LogoWrapper}>
          <img
            className={styles.Logo}
            src={channelLogo}
            alt={`${eventName} Twitch Stream`}
          />
        </div>
      </div>
      <TwitchChannel channel={channel} />
      <WidgetBot className={styles.Discord} server="732653839458500720" />
      {children}
    </div>
  );
};
