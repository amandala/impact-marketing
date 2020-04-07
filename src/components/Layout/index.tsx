import React from "react";
import cx from "classnames";
import styles from "./index.module.scss";
type PropsType = {
  children: React.ReactNode;
  className?: string;
};

export default ({ children, className }: PropsType) => (
  <div className={cx(styles.Content, className)}>
    <main className={styles.Layout}>{children}</main>
  </div>
);
