import React from "react";

import StreamPage from "../../components/StreamPage";

const Dusk2DawnProductions = () => {
  return (
    <StreamPage
      eventChannels={[
        "dusk2dawnproductions",
        "emengymusic",
        "zillalivepresents",
        "truesoundevents",
      ]}
      channel="dusk2dawnproductions"
      eventLogo="/assets/coed19/coed19-day2.jpg"
      eventName="COED-19"
    />
  );
};

export default Dusk2DawnProductions;
