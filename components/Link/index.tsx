import React from "react";
import Link from "next/link";

import styles from "./index.module.scss";

const MyLink = ({ className = "", children, href, ...rest }) => (
  <span className={styles.Wrapper}>
    <Link href={href}>
      <a className={styles.Link} {...rest}>
        {children}
      </a>
    </Link>
  </span>
);

export default MyLink;
