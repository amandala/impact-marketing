import React from "react";
import StreamPage from "../../../components/StreamPage";
import Layout from "../../../components/Layout";
import Section from "../../../components/Section";

import styles from "./index.module.scss";
const Dusk2Dawn = () => {
  return (
    <StreamPage
      eventName="Digital Impact"
      eventLogo="/assets/primary/digital-impact.png"
      channel="dusk2dawnproductions"
      channelLogo="/assets/streamChannelLogos/dusk2dawnproductions.png"
    >
      <Layout black>
        <Section>
          <img
            className={styles.Poster}
            src="./assets/events/digital-impact/d2d-schedule.jpg"
            alt="Odyssey Schedule"
          />
        </Section>
      </Layout>
    </StreamPage>
  );
};

export default Dusk2Dawn;
