import React from "react";
import Head from "../../components/head";
import { P } from "../../components/Typography";
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
            <P>
              With 3 Stages, Art Installations and A variaty of music, there is
              something for everyone
            </P>
            <P>
              In 2019, IMPACT raised $40,000 for WE Global Water Charities and
              True North Aid - First Nations Harm Reduction. With the assistance
              of everyone involved, we were able to achieve something incredible
              that will continue to make IMPACT for years to come.
            </P>
            <P>
              Become part of our IMPACT Tribe and help us create a better world
              for tomorrow!
            </P>
          </Section>
          <Section>
            <div className={styles.Links}>
              <span className={styles.CTA}>
                <a
                  className={styles.Link}
                  href="https://www.facebook.com/ImpactFestivalBC/"
                  target="_blank"
                >
                  Visit us on Facebook
                </a>
              </span>
              <span className={styles.CTA}>
                <a
                  className={styles.Link}
                  href="https://www.facebook.com/groups/850413665327638/"
                  target="_blank"
                >
                  Join the IMPACT Group
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
          <Section>
            <h1 className={styles.Impact}>Our Story</h1>
            <P>
              IMPACT Festival was created by Dusk2Dawn Productions and Party
              Well in 2019. The goal was to create a unique festival expirience
              that focused on giving back. By gathering likeminded people to
              celebrate the gift of life. IMPACT was able to spark some amazing
              creativity and imagination.
            </P>
            <P>
              IMPACT is more than just a festival, it’s a lifestyle. By
              attending this event, you will aid in making the world a better
              place for everyone, including yourself. Connect with others like
              nowhere before. Create a new reality with the new connections you
              have made and work together to change the world!
            </P>
          </Section>
          <Section>
            <h1 className={styles.Impact}>Make Impact</h1>
          </Section>
        </div>
      </div>
    </div>
  );
};
