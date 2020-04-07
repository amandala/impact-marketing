import React from "react";

import styles from "./index.module.scss";

const PadFooterWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.Page}>{children}</div>;
};

export default PadFooterWrapper;
