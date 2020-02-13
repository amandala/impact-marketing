import React from "react";
import Link from "../../components/Link";
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
          <li onClick={() => setNavOpen(false)}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setNavOpen(false)}>
            <Link href="/lineup">Lineup</Link>
          </li>
          <li onClick={() => setNavOpen(false)}>
            <Link href="/about">About</Link>
          </li>
          {/* <li onClick={() => setNavOpen(false)}>
            <Link href="/tickets">Tickets</Link>
          </li>
          <li onClick={() => setNavOpen(false)}>
            <Link href="/media">Media</Link>
          </li> */}
          <li onClick={() => setNavOpen(false)}>
            <Link href="/get-involved">Get Involved</Link>
          </li>
          {/* <li onClick={() => setNavOpen(false)}>
            <Link href="/contact">Contact Us</Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
};
