import React from "react";

import StreamPage from "../../components/StreamPage";

const EmengyMusic = () => {
  return (
    <StreamPage
      eventChannels={[
        "dusk2dawnproductions",
        "emengymusic",
        "zillalivepresents",
        "truesoundevents",
      ]}
      channel="emengymusic"
      eventLogo="/assets/coed19/coed19-day2.jpg"
      eventName="COED-19"
    />
  );
};

export default EmengyMusic;
