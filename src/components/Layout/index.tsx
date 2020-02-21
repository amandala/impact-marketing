import React from "react";

import styles from "./index.module.scss";

type PropsType = {
  children: React.ReactNode;
};

export default ({ children }: PropsType) => (
  <div className={styles.Content}>
    <main className={styles.Layout}>{children}</main>
  </div>
);
