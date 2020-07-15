import React from "react";
// @ts-ignore
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

import styles from "./index.module.scss";

const TwitchChannel = ({ channel }: { channel: string }) => {
  const [showChat, setShowChat] = React.useState(false);

  return (
    <div>
      <div className={styles.StreamControls}>
        <button
          className={styles.ChatButton}
          onClick={() => setShowChat(!showChat)}
        >
          {showChat ? "Hide" : "Show"} Chat
        </button>
      </div>
      <ReactTwitchEmbedVideo
        layout={showChat ? "video-with-chat" : "video"}
        chat={window.innerWidth > 1025 ? "default" : "mobile"}
        theme="dark"
        width="100%"
        height={window.innerWidth > 1025 || showChat ? "900px" : "300px"}
        channel={channel}
        parent={["impactfestival.ca"]}
      />
    </div>
  );
};

export default TwitchChannel;
