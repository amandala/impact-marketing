import React from "react";
import StreamPage from "../../components/StreamPage";

const TrueSoundEvents = () => {
  return (
    <StreamPage
      eventChannels={[
        "dusk2dawnproductions",
        "emengymusic",
        "zillalivepresents",
        "truesoundevents",
      ]}
      channel="truesoundevents"
      eventLogo="/assets/events/coed19/coed19-day2.jpg"
      eventName=""
    />
  );
};

export default TrueSoundEvents;
