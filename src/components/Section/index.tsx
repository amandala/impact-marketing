import React from "react";
import cx from "classnames";

import styles from "./index.module.scss";

type PropsType = {
  children: React.ReactNode;
  maxWidth?: boolean;
  className?: string;
};

export default ({ children, className = "", maxWidth }: PropsType) => (
  <div
    className={cx(styles.Section, className, {
      [styles.MaxWidthSection]: maxWidth,
    })}
  >
    {children}
  </div>
);
