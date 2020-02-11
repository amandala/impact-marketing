import React from "react";
import Link from "next/link";

import styles from "./index.module.scss";

const MyLink = ({ children, href }) => (
  <Link href={href}>
    <a className={styles.Link}>{children}</a>
  </Link>
);

export default MyLink;
