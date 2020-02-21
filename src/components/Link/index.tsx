import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import styles from "./index.module.scss";

type PropsType = {
  children: React.ReactNode | string;
  href: string;
  className?: string;
};

const MyLink = ({ className = "", children, href, ...rest }: PropsType) => (
  <Link to={href}>
    <a className={cx(styles.Link, className)} {...rest}>
      {children}
    </a>
  </Link>
);

export default MyLink;
