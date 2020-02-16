import React from "react";
import cx from "classnames";

import styles from "./index.module.scss";

export default ({ children, className = "" }) => {
  return <div className={cx(styles.PhotoDiv, className)}>{children}</div>;
};
