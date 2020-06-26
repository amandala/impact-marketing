import React from "react";
import cx from "classnames";

import styles from "./index.module.scss";
type PropsType = {
  children: React.ReactNode;
  className?: string;
  black?: boolean;
};

export default ({ children, className, black }: PropsType) => (
  <div className={cx(styles.Content, className, { [styles.Black]: black })}>
    <main className={styles.Layout}>{children}</main>
  </div>
);
