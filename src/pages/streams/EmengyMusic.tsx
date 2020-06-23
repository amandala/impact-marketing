import React from "react";
import ReactGA from "react-ga";
import { ButtonLinkExternal } from "../../components/Button";
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
      eventLogo="/assets/events/coed19/coed19-day2.jpg"
      eventName=""
    >
      <ButtonLinkExternal
        to="https://paypal.me/makeimpact"
        onClick={() => {
          ReactGA.event({
            category: "stream",
            action: "donate button click",
            label: "Emengy Music stream",
          });
        }}
      >
        Donate @ paypal.me/makeimpact
      </ButtonLinkExternal>
    </StreamPage>
  );
};

export default EmengyMusic;
