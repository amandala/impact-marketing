import React from "react";
// @ts-ignore
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

import styles from "./index.module.scss";

export default () => {
  const [showChat, setShowChat] = React.useState(false);

  return (
    <div className={styles.Wrapper}>
      <img
        alt="COED-19"
        className={styles.Coed19}
        src="/assets/coed19-min.jpg"
      />
      <ReactTwitchEmbedVideo
        layout={showChat ? "video-with-chat" : "video"}
        chat={window.innerWidth > 1025 ? "default" : "mobile"}
        theme="dark"
        width="100%"
        height={window.innerWidth > 1025 || showChat ? "900px" : "300px"}
        channel="dusk2dawnproductions"
      />
      <button
        className={styles.ChatButton}
        onClick={() => setShowChat(!showChat)}
      >
        {showChat ? "Hide" : "Show"} Chat
      </button>
    </div>
  );
};
