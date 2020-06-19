import React from "react";
import Section from "../../components/Section";
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
    </div>
  );
};
