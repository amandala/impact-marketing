import React from "react";
import { ButtonLinkExternal } from "../Button";

import styles from "./index.module.scss";

const TicketLink = () => {
  return (
    <div className={styles.TicketLink}>
      <ButtonLinkExternal href="https://eventchain.io/event-details/8f4c27078ca411503165c7a9b960892c/IMPACT_Festival_2020">
        <span className={styles.Text}>Buy tickets</span>
        <img
          src="https://eventchain.io/images/logo/logo-white-svg.svg"
          alt="eventchain"
          className={styles.EventChain}
        />
      </ButtonLinkExternal>
    </div>
  );
};

export default TicketLink;
