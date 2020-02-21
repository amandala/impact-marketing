import React from "react";
import { H3, H4, H5 } from "../../../components/Typography";

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
      <H3 className={styles.Name}>{name}</H3>
      <H5>${price}</H5>
    </span>
    <ul className={styles.Details}>
      {details &&
        details.map((detail: string) => (
          <li key={detail}>
            <H4>{detail}</H4>
          </li>
        ))}
    </ul>
  </div>
);