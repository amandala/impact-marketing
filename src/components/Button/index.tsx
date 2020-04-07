import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

export const Button = ({
  children,
  className,
  onClick,
  ...rest
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={cx(styles.Button, className)}
      {...rest}
    >
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
  to,
  className,
  ...rest
}: {
  children: React.ReactNode;
  to: string;
  className?: string;
}) => {
  return (
    <a
      className={cx(styles.Link, styles.Button, className)}
      href={to}
      {...rest}
    >
      {children}
    </a>
  );
};
