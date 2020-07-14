import React from "react";
import FestivalNav from "../../components/FestivalNav";
import TwitchChannel from "../../components/TwitchChannel";
import Layout from "../../components/Layout";
import { H1, P } from "../../components/Typography";
import WidgetBot from "@widgetbot/react-embed";
import DonateButton from "../../components/DonateButton";
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
        <div>
          <H1 impact>Connect with the impact Tribe on Discord</H1>
          <P>
            Join in on the conversation. The server is embedded across all our
            stages, so you can keep chatting with your friends as you explore.
          </P>
          <P>
            Make sure you join the server before you start sending messages, or
            they will disappear into the ether 👽
          </P>
          <div className={styles.JoinDiscord}>
            <ButtonLinkExternal to="https://discord.gg/ACPxzJA">
              Join the impact Discord server
            </ButtonLinkExternal>
          </div>
        </div>
        <WidgetBot className={styles.Discord} server="713214250079748096" />
      </Layout>
      <Layout black>
        <H1 impact>Festival Navigation</H1>
        <FestivalNav />
      </Layout>
      {children}
    </div>
  );
};
