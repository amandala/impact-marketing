import React from "react";
import { H2, P, H5 } from "../../../components/Typography";

import styles from "./index.module.scss";

export default ({
  details,
  name,
  price
}: {
  details: string[];
  name: string;
  price: number;
}) => (
  <div className={styles.Ticket}>
    <span className={styles.TicketHeading}>
      <H2 className={styles.Name}>{name}</H2>
      <H5>${price}</H5>
    </span>
    <ul className={styles.Details}>
      {details &&
        details.map((detail: string) => (
          <li key={detail}>
            <P>{detail}</P>
          </li>
        ))}
    </ul>
  </div>
);
