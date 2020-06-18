import React from "react";
import ReactGA from "react-ga";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { ButtonLinkExternal } from "../../components/Button";
import { H1 } from "../../components/Typography";
import ChannelLink from "../../components/ChannelLink";
import StreamPage from "../../components/StreamPage";
import styles from "./index.module.scss";

export default () => {
  return (
    <div className={styles.Wrapper}>
      <Section>
        <StreamPage
          eventChannels={[]}
          channel="blackfreedomsociety"
          eventLogo="/assets/freedom-march-poster.png"
          eventName="Freedom March"
        />
      </Section>
      {/* <Layout className={styles.Channels}>
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

        <Section>
          <H1>Channel Partners</H1>
          <div className={styles.ChannelLinks}>
            <ChannelLink channel="dusk2dawnproductions" />
          </div>
        </Section>
      </Layout> */}
    </div>
  );
};
