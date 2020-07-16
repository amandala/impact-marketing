import React from "react";
import { Stages, Extras, SpecialMentions } from "../../components/FestivalNav";
import TwitchChannel from "../../components/TwitchChannel";
import Layout from "../../components/Layout";
import { H1, P } from "../../components/Typography";
import DonateButton from "../../components/DonateButton";
import DiscordChat from "../../components/DiscordChat";
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
      <Layout>
        <div className={styles.Header}>
          {eventLogo ? (
            <div className={styles.EventLogoWrapper}>
              <img
                alt={eventName}
                className={styles.EventLogo}
                src={eventLogo}
              />
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
      </Layout>
      <Layout black className={styles.Stages}>
        <Stages />
      </Layout>
      <TwitchChannel channel={channel} />
      <Layout black>
        <DiscordChat />
        <DonateButton href="/causes" />
      </Layout>
      <Layout black>
        <H1 impact>Festival Navigation</H1>
        <Extras />
        <SpecialMentions />
      </Layout>
      {children}
    </div>
  );
};
