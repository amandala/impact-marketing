import React from "react";
import StreamPage from "../../components/StreamPage";

const ZillalivePresents = () => {
  return (
    <StreamPage
      eventChannels={[
        "dusk2dawnproductions",
        "emengymusic",
        "zillalivepresents",
        "truesoundevents",
      ]}
      channel="zillalivepresents"
      eventLogo="/assets/coed19/coed19-day2.jpg"
      eventName=""
    />
  );
};

export default ZillalivePresents;
