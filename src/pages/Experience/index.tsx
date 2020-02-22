import React from "react";

import { H1, P } from "../../components/Typography";

import styles from "./index.module.scss";

export default () => {
  return (
    <div>
      <div className={styles.Experience1}>
        <div className={styles.PhotoContent}>
          <H1 impact>impact festival is full of surprises</H1>
          <P>
            Participate in games, challenges, and quests for various rewards.
          </P>
        </div>
      </div>
      <div className={styles.Experience2}>
        <div className={styles.PhotoContent}>
          <H1 impact>Express yourself</H1>
          <P>
            We encourage everyone to bring their complete authentic self. Don't
            hold back!
          </P>
        </div>
      </div>
      <div className={styles.Experience3}>
        <div className={styles.PhotoContent}>
          <H1 impact>Make new connections</H1>
          <P>
            "Here's to the nights that turned into mornings, and the friends who
            turned into family"
          </P>
        </div>
      </div>
      <div className={styles.Experience4}>
        <div className={styles.PhotoContent}>
          <H1 impact>Grow together</H1>
          <P>
            This year will be jam packed with awesome workshops. Be sure to get
            your early entry pass!
          </P>
        </div>
      </div>
    </div>
  );
};
