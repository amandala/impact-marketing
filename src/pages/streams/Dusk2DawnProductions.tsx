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
      eventLogo="/assets/difbanner-min.jpg"
      eventName="Digital Impact Festival"
    />
  );
};

export default Dusk2DawnProductions;
