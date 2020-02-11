import React from "react";
import Link from "../../components/Link";
import Head from "../../components/head";
import { H1, H2, H3, P } from "../../components/Typography";

import styles from "./index.module.scss";

export default () => {
  return (
    <>
      <Head title="Impact Music Festival" />
      <div>
        <div className={styles.AboveTheFold}>
          <div className={styles.Details}>
            <img className={styles.Wordmark} src="/wordmark.png" alt="impact" />
            <H1 className={styles.FestivalDescription}>
              Transformational Charity Music Festival
            </H1>
            <H2>Pritchard, BC</H2>
            <H3>July 3rd & 4th</H3>
          </div>
          <div className={styles.TicketsLink}>
            <Link href="/tickets">
              <a className={styles.Link}>Get Tickets</a>
            </Link>
          </div>
        </div>
        <div className={styles.Section}>
          <H1 className={styles.SectionHeading}>Our Core Values</H1>
          <div className={styles.ValuesList}>
            <div className={styles.Value}>
              <span className={styles.Placeholder}>value placeholder</span>
            </div>
            <div className={styles.Value}>
              <span className={styles.Placeholder}>value placeholder</span>
            </div>
            <div className={styles.Value}>
              <span className={styles.Placeholder}>value placeholder</span>
            </div>
            <div className={styles.Value}>
              <span className={styles.Placeholder}>value placeholder</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Section}>
        <H1 className={styles.SectionHeading}>Stay up to date</H1>
        <div className={styles.SignUpForm}>
          <div className={styles.CTA}>
            <P>
              Sign up for our newsletter to stay in the loop about contests,
              updates, exclusive offers, and more!
            </P>
          </div>
          <label className={styles.SignUp}>
            <input className={styles.Input} />
            <button className={styles.SignUpButton}>I'm in!</button>
          </label>
        </div>
      </div>
    </>
  );
};
