import React from "react";
import cx from "classnames";

import styles from "./index.module.scss";

export default ({ children, className = "" }) => (
  <div className={cx(styles.Section, className)}>{children}</div>
);
