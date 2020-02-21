import React from "react";

import { H1, H2 } from "../../components/Typography";

import styles from "./index.module.scss";

export default () => {
  return (
    <div>
      <div className={styles.Experience1}>
        <div className={styles.PhotoContent}>
          <H1 impact>IMPACT festival is full of surprises</H1>
          <H2>
            Participate in games, challenges, and quests for various rewards.
          </H2>
        </div>
      </div>
      <div className={styles.Experience2}>
        <div className={styles.PhotoContent}>
          <H1 impact>Express yourself</H1>
          <H2>
            We encourage everyone to bring their complete authentic self. Don't
            hold back ;)
          </H2>
        </div>
      </div>
      <div className={styles.Experience3}>
        <div className={styles.PhotoContent}>
          <H1 impact>Make new connections</H1>
          <H2>
            "Here's to the nights that turned into mornings, and the friends who
            turned into family"
          </H2>
        </div>
      </div>
      <div className={styles.Experience4}>
        <div className={styles.PhotoContent}>
          <H1 impact>Grow together</H1>
          <H2>
            This year will be jam packed with awesome workshops. Be sure to get
            your early entry pass!
          </H2>
        </div>
      </div>
    </div>
  );
};
