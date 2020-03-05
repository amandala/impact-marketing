import React from "react";
import Form from "./Form";

import { H3, Tiny, H5 } from "../Typography";
import { InlineLink } from "../Link";
import styles from "./index.module.scss";

const Footer = () => (
  <footer className={styles.Footer}>
    <div className={styles.FormContent}>
      <div className={styles.InTouch}>
        <H3>Stay in touch</H3>
        <H5 className={styles.SignUp}>
          Sign up for our newsletter to stay in the loop on contests, updates,
          exclusive offers, and more!
        </H5>
        <H5>
          Or send us an email at{" "}
          <InlineLink href="mailto:impactfestivalbc@gmail.com">
            impactfestivalbc@gmail.com
          </InlineLink>
        </H5>
      </div>
      <Form />
    </div>
    <div className={styles.WithLove}>
      <Tiny className={styles.WithLove}>
        Site made with ♡ by{" "}
        <a
          className={styles.Link}
          href="http://www.portad.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          Port:AD
        </a>
      </Tiny>
    </div>
  </footer>
);

export default Footer;
