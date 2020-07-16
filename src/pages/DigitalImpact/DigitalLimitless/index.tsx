import React from "react";
import StreamPage from "../../../components/StreamPage";
import Layout from "../../../components/Layout";
import Section from "../../../components/Section";
import { H1, P } from "../../../components/Typography";
import styles from "./index.module.scss";

const Workshop = ({
  time,
  title,
  host,
}: {
  time: string;
  title: string;
  host: string;
}) => {
  return (
    <li className={styles.Workshop}>
      <span className={styles.Time}>{time}</span>
      <span className={styles.Host}>{host}</span>
      <span className={styles.Title}>{title}</span>
    </li>
  );
};

const DigitalLimitless = () => {
  return (
    <StreamPage
      eventName="Digital Impact"
      eventLogo="/assets/primary/digital-impact.png"
      channel="limitlessstage"
      channelLogo="/assets/stages/limitless-white.png"
    >
      <Layout black>
        <Section>
          <img
            className={styles.Poster}
            src="./assets/events/digital-impact/workshop-poster.jpg"
            alt="Workshop Schedule"
          />
          {/* <H1>Thursday Schedule</H1>
          <ul className={styles.Sched}>
            <Workshop
              time="9:30am"
              host="Even Carmichael"
              title="Interview: “How to Maximzie Your Positive Impact”"
            />
            <Workshop
              time="10:00am"
              host="Shannon Kelly-Thomas"
              title="Opening Ceremonies"
            />
          </ul> */}
        </Section>
      </Layout>
    </StreamPage>
  );
};

export default DigitalLimitless;
