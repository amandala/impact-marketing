import React from "react";
import Link from "../../../components/Link";
import styles from "./index.module.scss";

const ChannelLink = ({ channel }: { channel: string }) => {
  return (
    <Link href={`/${channel}`} className={styles.Channel}>
      <img
        className={styles.Logo}
        src={`/assets/streamChannelLogos/${channel}.png`}
        alt={`${channel} Twitch Stream`}
      />
    </Link>
  );
};

export default ChannelLink;
