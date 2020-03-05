import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

export const Button = ({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button className={cx(styles.Button, className)} {...rest}>
      {children}
    </button>
  );
};

export const ButtonLink = ({
  children,
  to,
  className,
  ...rest
}: {
  children: React.ReactNode;
  to: string;
  className?: string;
}) => {
  return (
    <Link
      className={cx(styles.Link, styles.Button, className)}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  );
};

export const ButtonLinkExternal = ({
  children,
  href,
  className,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      className={cx(styles.Link, styles.Button, className)}
      href={href}
      {...rest}
    >
      {children}
    </a>
  );
};
