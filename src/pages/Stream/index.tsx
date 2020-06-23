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
          channel="dusk2dawnproductions"
          eventLogo="/assets/events/digital-impact/difbanner-min.jpg"
          eventName="Digital Impact"
        />
      </Section>
    </div>
  );
};
