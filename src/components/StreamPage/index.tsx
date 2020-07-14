import React from "react";
import FestivalNav from "../../components/FestivalNav";
import TwitchChannel from "../../components/TwitchChannel";
import Layout from "../../components/Layout";
import WidgetBot from "@widgetbot/react-embed";
import DonateButton from "../../components/DonateButton";
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
      <DonateButton href="/causes" />
      <TwitchChannel channel={channel} />
      <WidgetBot className={styles.Discord} server="713214250079748096" />
      <Layout black>
        <FestivalNav />
      </Layout>
      {children}
    </div>
  );
};
