import React from "react";
import FestivalNav from "../../components/FestivalNav";
import TwitchChannel from "../../components/TwitchChannel";
import Layout from "../../components/Layout";
import { H1, P } from "../../components/Typography";
import DonateButton from "../../components/DonateButton";
import DiscordChat from "../../components/DiscordChat";
import styles from "./index.module.scss";
import { ButtonLinkExternal } from "../Button";

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
      <Layout black>
        <DiscordChat>
          <P>Chat with the Impact Tribe across all our festival stages</P>
        </DiscordChat>
      </Layout>
      <Layout black>
        <H1 impact>Festival Navigation</H1>
        <FestivalNav />
      </Layout>
      {children}
    </div>
  );
};
