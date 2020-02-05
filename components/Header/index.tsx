import React from "react";
import Link from "next/link";
import cx from "classnames";

import styles from "./index.module.scss";

export default () => {
  const [navOpen, setNavOpen] = React.useState(false);

  return (
    <>
      <button className={styles.Bun} onClick={() => setNavOpen(!navOpen)}>
        <div className={cx(styles.Burger, { [styles.BurgerAnimate]: navOpen })}>
          <b>|</b>
          <b>|</b>
          <b>|</b>
        </div>
      </button>
      <nav className={cx(styles.Nav, { [styles.NavFadeIn]: navOpen })}>
        <ul className={styles.Links}>
          <li>
            <Link href="/">
              <a onClick={() => setNavOpen(false)} className={styles.Link}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/lineup">
              <a onClick={() => setNavOpen(false)} className={styles.Link}>
                Lineup
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a onClick={() => setNavOpen(false)} className={styles.Link}>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/tickets">
              <a onClick={() => setNavOpen(false)} className={styles.Link}>
                Tickets
              </a>
            </Link>
          </li>
          <li>
            <Link href="/media">
              <a onClick={() => setNavOpen(false)} className={styles.Link}>
                Media
              </a>
            </Link>
          </li>
          <li>
            <Link href="/getinvolved">
              <a onClick={() => setNavOpen(false)} className={styles.Link}>
                Get Involved
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a onClick={() => setNavOpen(false)} className={styles.Link}>
                Contact Us
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
