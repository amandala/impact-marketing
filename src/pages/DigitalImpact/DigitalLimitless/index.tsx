import React from "react";
import StreamPage from "../../../components/StreamPage";
import Layout from "../../../components/Layout";
import Section from "../../../components/Section";
import { H1, P } from "../../../components/Typography";
import Workshop from "../../../components/Workshop";
import styles from "./index.module.scss";
import schedule from "./schedule.json";

const DigitalLimitless = () => {
  return (
    <StreamPage
      eventName="Digital Impact"
      eventLogo="/assets/primary/digital-impact.png"
      channel="limitlesstage"
      channelLogo="/assets/stages/limitless-white.png"
    >
      <Layout black>
        <Section>
          <img
            className={styles.Poster}
            src="./assets/events/digital-impact/workshop-titles.jpg"
            alt="Workshop Schedule"
          />
          <H1>Sunday Schedule</H1>
          <ul className={styles.Sched}>
            {schedule.map((workshop) => (
              <Workshop
                time={workshop.time}
                host={workshop.host}
                title={workshop.title}
              />
            ))}
          </ul>
        </Section>
      </Layout>
    </StreamPage>
  );
};

export default DigitalLimitless;
