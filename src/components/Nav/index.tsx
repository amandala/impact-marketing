import React from "react";
import Link from "../Link";
import cx from "classnames";

import styles from "./index.module.scss";

export default () => {
  const [navOpen, setNavOpen] = React.useState<boolean>(false);

  const setNavOpenState = (open: boolean) => {
    setNavOpen(!!open);
    if (!!open) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }
  };

  return (
    <div className={cx(styles.Wrapper, { [styles.WrapperFixed]: navOpen })}>
      <div>
        <button
          className={styles.Bun}
          onClick={() => setNavOpenState(!navOpen)}
        >
          <div
            className={cx(styles.Burger, { [styles.BurgerAnimate]: navOpen })}
          >
            <b>|</b>
            <b>|</b>
            <b>|</b>
          </div>
        </button>
        <nav
          className={cx(styles.Nav, {
            [styles.NavFadeIn]: !!navOpen,
          })}
        >
          <div className={styles.Content}>
            <ul className={styles.Links}>
              <li onClick={() => setNavOpenState(false)}>
                <Link href="/about">Home</Link>
              </li>
              <li onClick={() => setNavOpenState(false)}>
                <Link href="/causes">Causes</Link>
              </li>
              <li onClick={() => setNavOpenState(false)}>
                <Link href="/stream">Live Stream</Link>
              </li>
              <li onClick={() => setNavOpenState(false)}>
                <Link href="/lineup">Lineup</Link>
              </li>
              <li onClick={() => setNavOpenState(false)}>
                <Link href="/art">Art Hub</Link>
              </li>
              <li onClick={() => setNavOpenState(false)}>
                <Link href="/apply">Apply</Link>
              </li>
              <div className={styles.SocialLinks}>
                <li onClick={() => setNavOpenState(false)}>
                  <a
                    className={styles.Link}
                    href="https://www.facebook.com/IMPACTFestivalBC/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={styles.SocialIcon}
                      src="/assets/primary/fb.png"
                      alt="Facebook"
                    />
                  </a>
                </li>
                <li onClick={() => setNavOpenState(false)}>
                  <a
                    className={styles.Link}
                    href="https://www.facebook.com/groups/850413665327638/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={styles.SocialIcon}
                      src="/assets/primary/imp.png"
                      alt="Impact Group"
                    />
                  </a>
                </li>
                <li onClick={() => setNavOpenState(false)}>
                  <a
                    className={styles.Link}
                    href="https://www.instagram.com/IMPACTfestival_bc/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={styles.SocialIcon}
                      src="/assets/primary/insta.png"
                      alt="Instagram"
                    />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
