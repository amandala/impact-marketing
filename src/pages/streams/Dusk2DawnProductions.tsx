import React from "react";
import ReactGA from "react-ga";
import { ButtonLinkExternal } from "../../components/Button";
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
      eventLogo="/assets/events/digital-impact/difbanner-min.jpg"
      eventName="Digital Impact Festival"
    >
      <ButtonLinkExternal
        to="https://paypal.me/makeimpact"
        onClick={() => {
          ReactGA.event({
            category: "stream",
            action: "donate button click",
            label: "Dusk2Dawn stream",
          });
        }}
      >
        Donate @ paypal.me/makeimpact
      </ButtonLinkExternal>
    </StreamPage>
  );
};

export default Dusk2DawnProductions;
