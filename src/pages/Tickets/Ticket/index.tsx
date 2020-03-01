import React from "react";
import { H2, P, H3 } from "../../../components/Typography";

import styles from "./index.module.scss";

export default ({
  details,
  name,
  tiers
}: {
  details?: string[];
  name: string;
  tiers: Array<{ price: number; label: string }>;
}) => (
  <div className={styles.Ticket}>
    <H2 className={styles.Name}>{name}</H2>
    <div className={styles.Details}>
      <ul className={styles.List}>
        {details &&
          details.map((detail: string) => (
            <li key={detail}>
              <P small className={styles.Detail}>
                {detail}
              </P>
            </li>
          ))}
      </ul>
    </div>
    <div className={styles.Tiers}>
      {tiers.map(tier => (
        <H3 className={styles.Price}>
          {tier.label} ${tier.price}
        </H3>
      ))}
    </div>
  </div>
);
