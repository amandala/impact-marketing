import React from "react";

import { P } from "../Typography";

import styles from "./index.module.scss";

const Footer = () => (
  <footer className={styles.Footer}>
    <div className={styles.Content}>
      <div className={styles.WithLove}>
        <P tiny>
          Site made with ♡ by{" "}
          <a
            className={styles.Link}
            href="http://www.portad.ca"
            target="_blank"
          >
            Amanda Haynes
          </a>
        </P>
      </div>
      <div className={styles.SignUpForm}>
        {/* <label className={styles.SignUp}>
          <input type="email" className={styles.Input} />
          <button className={styles.SignUpButton}>I'm in!</button>
        </label>
        <div className={styles.CTA}>
          <P tiny>
            Sign up for our newsletter to stay in the loop about contests,
            updates, exclusive offers, and more!
          </P>
        </div> */}
      </div>
    </div>
  </footer>
);

export default Footer;
