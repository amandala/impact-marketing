import React from "react";
import Link from "../Link";
import cx from "classnames";

import styles from "./index.module.scss";

export default () => {
  const [navOpen, setNavOpen] = React.useState(false);

  const setNavOpenState = open => {
    //TODO: figure out why this isn't working
    setNavOpen(open);
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <>
      <button className={styles.Bun} onClick={() => setNavOpenState(!navOpen)}>
        <div className={cx(styles.Burger, { [styles.BurgerAnimate]: navOpen })}>
          <b>|</b>
          <b>|</b>
          <b>|</b>
        </div>
      </button>
      <nav className={cx(styles.Nav, { [styles.NavFadeIn]: navOpen })}>
        <div className={styles.Content}>
          <ul className={styles.Links}>
            <li onClick={() => setNavOpenState(false)}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <Link href="/tickets">Tickets</Link>
            </li>
            <li onClick={() => setNavOpenState(false)}>
              <Link href="/lineup">Lineup</Link>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <Link href="/stages">Stages</Link>
            </li>
            <li onClick={() => setNavOpenState(false)}>
              <Link href="/about">About</Link>
            </li>
            <li onClick={() => setNavOpenState(false)}>
              <Link href="/experience">Experience</Link>
            </li>

            <li onClick={() => setNavOpenState(false)}>
              <Link href="/get-involved">Get Involved</Link>
            </li>
          </ul>
          <img
            className={styles.Mountains}
            src="/mountains.png"
            alt="moutains"
          />
        </div>
      </nav>
    </>
  );
};
