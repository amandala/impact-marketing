import React from "react";
import { Link as ReactLink } from "react-router-dom";
import cx from "classnames";

import styles from "./index.module.scss";

type PropsType = {
  children: React.ReactNode | string;
  href: string;
  className?: string;
};

const Link = ({ className = "", children, href, ...rest }: PropsType) => (
  <ReactLink className={styles.Wrapper} to={href}>
    <span className={cx(styles.Link, className)} {...rest}>
      {children}
    </span>
  </ReactLink>
);

export default Link;

export const InlineLink = ({
  children,
  href
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <a className={styles.InlineLink} href={href}>
    {children}
  </a>
);
