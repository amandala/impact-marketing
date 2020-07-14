import React from "react";
import WidgetBot from "@widgetbot/react-embed";

import { ButtonLinkExternal } from "../Button";
import { H1 } from "../Typography";
import styles from "./index.module.scss";

const DiscordChat = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>
      <div>
        <H1 impact>Connect with the impact Tribe on Discord</H1>
        {children}
        <div className={styles.JoinDiscord}>
          <ButtonLinkExternal to="https://discord.gg/ACPxzJA">
            Join the impact Discord server
          </ButtonLinkExternal>
        </div>
      </div>
      <WidgetBot className={styles.Discord} server="713214250079748096" />
    </div>
  );
};

export default DiscordChat;
