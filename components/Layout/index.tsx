import React from "react";

import styles from "./index.module.scss";

export default ({ children }) => (
  <main className={styles.Layout}>{children}</main>
);
