import React from "react";
import Link from "next/link";
import cx from "classnames";

import styles from "./index.module.scss";

const MyLink = ({ className = "", children, href, ...rest }) => (
  <Link href={href}>
    <a className={cx(styles.Link, className)} {...rest}>
      {children}
    </a>
  </Link>
);

export default MyLink;
