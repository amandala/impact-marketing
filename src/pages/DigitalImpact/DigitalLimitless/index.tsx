import React from "react";
import StreamPage from "../../../components/StreamPage";
import Layout from "../../../components/Layout";
import Section from "../../../components/Section";
import { H1, P } from "../../../components/Typography";
import styles from "./index.module.scss";
import thursdaySchedule from "./thursday.json";
console.log(thursdaySchedule);

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
      channel="limitlesstage"
      channelLogo="/assets/stages/limitless-white.png"
    >
      <Layout black>
        <Section>
          <img
            className={styles.Poster}
            src="./assets/events/digital-impact/workshop-poster.jpg"
            alt="Workshop Schedule"
          />
          <H1>Thursday Schedule</H1>
          <ul className={styles.Sched}>
            {thursdaySchedule.map((workshop) => (
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
