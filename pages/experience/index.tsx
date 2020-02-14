import React from "react";
import Head from "../../components/head";
import { H1, H2 } from "../../components/Typography";

import styles from "./index.module.scss";

export default () => {
  return (
    <div>
      <Head title="Experience | Impact Music Festival" />
      <div className={styles.PageWrapper}>
        <H1 className={styles.ExperienceHeading}>Experience</H1>
        <div className={styles.Experience1}>
          <div className={styles.PhotoContent}>
            <H2>
              IMPACT festival is full of surprises. Complete games, challenges
              and quests for various rewards
            </H2>
          </div>
        </div>
      </div>
    </div>
  );
};
