import React from "react";
import Form from "./Form";

import { H3, Tiny, H5 } from "../Typography";

import styles from "./index.module.scss";

const Footer = () => (
  <footer className={styles.Footer}>
    <div className={styles.FormContent}>
      <div className={styles.InTouch}>
        <H3>Stay in touch</H3>
        <H5>
          Sign up for our newsletter to stay in the loop on contests, updates,
          exclusive offers, and more!
        </H5>
      </div>
      <Form />
    </div>
    <div className={styles.WithLove}>
      <Tiny>
        Site made with ♡ by{" "}
        <a className={styles.Link} href="http://www.portad.ca" target="_blank">
          Amanda Haynes
        </a>
      </Tiny>
    </div>
  </footer>
);

export default Footer;
