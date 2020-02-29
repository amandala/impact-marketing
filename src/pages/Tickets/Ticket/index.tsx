import React from "react";
import { H2, P, H3 } from "../../../components/Typography";

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
    <H2 className={styles.Name}>{name}</H2>
    <H3 className={styles.Price}>${price}</H3>
    <ul className={styles.Details}>
      {details &&
        details.map((detail: string) => (
          <li key={detail}>
            <P tiny className={styles.Detail}>
              {detail}
            </P>
          </li>
        ))}
    </ul>
  </div>
);
