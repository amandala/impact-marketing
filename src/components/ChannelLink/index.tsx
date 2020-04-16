import React from "react";
import cx from "classnames";
import Link from "../Link";
import styles from "./index.module.scss";

const ChannelLink = ({
  channel,
  small,
}: {
  channel: string;
  small?: boolean;
}) => {
  return (
    <Link
      href={`/streams/${channel}`}
      className={cx(styles.Channel, { [styles.ChannelSmall]: small })}
    >
      <img
        className={cx(styles.Logo, {
          [styles.LogoInvert]: channel === "zillalivepresents",
        })}
        src={`/assets/streamChannelLogos/${channel}.png`}
        alt={`${channel} Twitch Stream`}
      />
    </Link>
  );
};

export default ChannelLink;
