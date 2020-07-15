import React from "react";

import Layout from "../../components/Layout";

import Section from "../../components/Section";
import DigitalImpactBanner from "../../components/DigitalImpactBanner";
import { P, H1, Tiny } from "../../components/Typography";
import { Stages, Extras, SpecialMentions } from "../../components/FestivalNav";
import styles from "./index.module.scss";
import DiscordChat from "../../components/DiscordChat";
import DonateButton from "../../components/DonateButton";
import YouTubeEmbed from "react-youtube-embed";

const Home = () => {
  return (
    <Layout black>
      <DigitalImpactBanner before={"Welcome to"} />
      <Section className={styles.Section}>
        <P>
          We've curated a ton of awesome digital experiences for you to explore.
          Click around the navigation links below to visit the different areas
          of our digital festival.
        </P>
      </Section>
      <Section className={styles.Section}>
        <DonateButton href="/causes" />
        <Stages />
        <Extras />
        <SpecialMentions />
      </Section>
      <Section className={styles.Section}>
        <DiscordChat>
          <P>
            Join in on the conversation. The server is embedded across all our
            stages, so you can keep chatting with your friends as you explore.
            You can also download the desktop or mobile app and keep the
            conversation going wherever you are.
          </P>
          <P>
            Make sure you join the server before you start sending messages, or
            they will disappear into the ether 👽
          </P>
        </DiscordChat>
      </Section>
      <Section className={styles.Section}>
        <H1 impact>Check out our lineup on the Odyssey and Dusk2Dawn Stages</H1>
        <img
          src="/assets/events/digital-impact/lineup.jpg"
          alt="Lineup Poster"
          className={styles.Poster}
        />
      </Section>
      <Section>
        <H1 impact>Explore the Utherverse 3d Virtual world</H1>
        <Tiny>Requires a minimum $25 donation</Tiny>
        <YouTubeEmbed id="HeySE5BSURo" />
      </Section>
    </Layout>
  );
};

export default Home;
