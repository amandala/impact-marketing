import React from "react";
import { AnchorLink } from "../../components/Link";

import styles from "./index.module.scss";

const TicketLink = () => {
  return (
    <div className={styles.TicketLink}>
      <AnchorLink href="https://eventchain.io/event-details/8f4c27078ca411503165c7a9b960892c/IMPACT_Festival_2020">
        Buy tickets on EventChain{" "}
        <img
          src="https://eventchain.io/images/logo/logo-white-svg.svg"
          alt="eventchain"
          className={styles.EventChain}
        />
      </AnchorLink>
    </div>
  );
};

export default TicketLink;
