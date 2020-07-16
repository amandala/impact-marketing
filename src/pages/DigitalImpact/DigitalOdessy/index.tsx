import React from "react";
import Layout from "../../../components/Layout";
import Section from "../../../components/Section";

import StreamPage from "../../../components/StreamPage";

import styles from "./index.module.scss";

const DigitalOdessy = () => {
  return (
    <StreamPage
      eventName="Digital Impact"
      eventLogo="/assets/primary/digital-impact.png"
      channel="dusk2dawnproductions"
      channelLogo="/assets/stages/odyssey.png"
    >
      <Layout black>
        <Section>
          <img
            className={styles.Poster}
            src="./assets/events/digital-impact/odyessy-schedule.jpg"
            alt="Odyssey Schedule"
          />
        </Section>
      </Layout>
    </StreamPage>
  );
};

export default DigitalOdessy;
