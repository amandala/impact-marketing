import React from "react";

import Section from "../../components/Section";
import { H1 } from "../../components/Typography";
import styles from "./index.module.scss";

const DigitalImpactBanner = ({
  before,
  after,
}: {
  before?: string;
  after?: string;
}) => {
  return (
    <div className={styles.Header}>
      {before ? <H1>{before}</H1> : null}
      <img
        className={styles.DigitalImpact}
        alt="Welcome to Digital Impact"
        src="/assets/primary/digital-impact.png"
      />
      {after ? <H1>{after}</H1> : null}
    </div>
  );
};

export default DigitalImpactBanner;
