import React from "react";

import ChannelLink from "../../../components/ChannelLink";
import { H2 } from "../../../components/Typography";

import styles from "./index.module.scss";

const StreamNav = ({
  activeChannel,
  channels,
}: {
  activeChannel: string;
  channels: Array<string>;
}) => {
  return (
    <div className={styles.StreamNav}>
      <H2>Stream Navigation</H2>
      <div className={styles.ChannelLinks}>
        {channels.map((channel) => {
          if (channel !== activeChannel) {
            return <ChannelLink channel={channel} />;
          }
        })}
      </div>
    </div>
  );
};

export default StreamNav;
