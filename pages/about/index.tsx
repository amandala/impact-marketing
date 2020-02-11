import React from "react";
import Head from "../../components/head";
import { H2 } from "../../components/Typography";
import Section from "../../components/Section";

import styles from "./index.module.scss";

export default () => {
  return (
    <div>
      <Head title="About | Impact Music Festival" />
      <div className={styles.PhotoDiv}>
        <div className={styles.Wrapper}>
          <Section>
            <h1 className={styles.Impact}>
              IMPACT Festival is a 2 day Transformational Arts & Music
              Experience
            </h1>
          </Section>
          <Section>
            <H2>
              With 3 Stages, Art Installations and A variaty of music, there is
              something for everyone
            </H2>
          </Section>
          <Section>
            <H2>
              In 2019, IMPACT raised $40,000 for WE Global Water Charities and
              True North Aid - First Nations Harm Reduction. With the assistance
              of everyone involved, we were able to achieve something incredible
              that will continue to make IMPACT for years to come.
            </H2>
          </Section>
          <Section>
            <H2>
              Become part of our IMPACT Tribe and help us create a better world
              for tomorrow!
            </H2>
          </Section>
          <Section>
            <div className={styles.Links}>
              <span className={styles.CTA}>
                <a
                  className={styles.Link}
                  href="https://www.facebook.com/ImpactFestivalBC/"
                  target="_blank"
                >
                  Visit our Facebook page
                </a>
              </span>
              <span className={styles.CTA}>
                <a
                  className={styles.Link}
                  href="https://www.facebook.com/groups/850413665327638/"
                  target="_blank"
                >
                  Join our private IMPACT Group
                </a>
              </span>
              <span className={styles.CTA}>
                <a
                  className={styles.Link}
                  href="https://www.instagram.com/impactfestival_bc/?hl=en"
                  target="_blank"
                >
                  Follow us on Instagram
                </a>
              </span>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};
