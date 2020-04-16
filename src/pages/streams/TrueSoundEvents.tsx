import React from "react";

import StreamPage from "../../components/StreamPage";

const TrueSoundEvents = () => {
  return (
    <StreamPage
      eventChannels={[
        "dusk2dawnproductions",
        "fouroverfourmusic",
        "socialsound",
        "truesoundevents",
      ]}
      channel="truesoundevents"
      eventLogo="/assets/coed19/coed19-day1.jpg"
      eventName="COED-19"
    />
  );
};

export default TrueSoundEvents;
