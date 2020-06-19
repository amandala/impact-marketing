import React from "react";

import StreamPage from "../../components/StreamPage";

const FourOverFourMusic = () => {
  return (
    <StreamPage
      eventChannels={[
        "dusk2dawnproductions",
        "fouroverfourmusic",
        "socialsound",
        "truesoundevents",
      ]}
      channel="fouroverfourmusic"
      eventLogo="/assets/coed19/coed19-day1.jpg"
      eventName=""
    />
  );
};

export default FourOverFourMusic;
