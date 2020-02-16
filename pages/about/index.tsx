import React from "react";
import Head from "../../components/head";
import { H1, H2, P } from "../../components/Typography";
import Section from "../../components/Section";
import PhotoDiv from "../../components/PhotoDiv";

import styles from "./index.module.scss";

export default () => {
  return (
    <div>
      <Head title="About | Impact Music Festival" />
      <PhotoDiv className={styles.MainStage}>
        <div className={styles.Wrapper}>
          <Section>
            <H1>
              IMPACT Festival is a 3 day Transformational Arts & Music
              Experience
            </H1>
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
            <H1>Our Story</H1>
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
            <div className={styles.Logos}>
              <a
                href="https://partywell.org/"
                target="_blank"
                className={styles.LogoWrapper}
              >
                <img
                  className={styles.Logo}
                  src="pwLogo.png"
                  alt="PartyWell Logo"
                />
              </a>
              <a
                href="https://www.dusk2dawnproductions.com/"
                target="_blank"
                className={styles.LogoWrapper}
              >
                <img
                  className={styles.Logo}
                  src="d2dLogo.png"
                  alt="Dusk2Dawn Logo"
                />
              </a>
            </div>
          </Section>
          <Section>
            <H1>Make Impact</H1>
            <P>
              Out there somewhere in the deeps of space, on a world eerily
              similar to our own, an intelligent species of biped revelled in
              their prosperity, developing wonderous scientific advances and
              economic prosperity. But... with the spoils of technology, came a
              blissful ignorance towards the natural life and overall harmony on
              the planet.
            </P>
            <P>
              With the increase in toxic emissions slowly consuming the planet
              this world soon reached a crisis point, causing a dramatic shift
              in the climate and bringing about widespread devastation. Rising
              seas soon claimed cities, natural disasters claimed entire
              continents and their civilization fell apart. THE FEW WHO REMAINED
              NEARLY LOST ALL HOPE.
            </P>
            <P>
              The bipeds gathered their finest minds and launched a ship out
              into space with the mission of sharing the STORY of their failed
              world, preserving their culture and HOPING ANOTHER SPECIES WOULD
              PAY HEED TO THE LESSON. Their story is a sad one... but.... we
              have come to your planet because we have hope for ALL OF YOU, THE
              IMPACT COMMUNITY.
            </P>
            <P>
              Come and join us as we continue to tell this story through music,
              art and various other means. Participate in our story with
              ineractive quests and multimedia displays.
            </P>
            <P>We Are the IMPACT...</P>
          </Section>
          <Section>
            <H1>Charities</H1>
            <P>
              In 2019 we raised $40,000 with our sponsor ENUF to WE Water
              Charity and True North Aid
            </P>
          </Section>
          <Section>
            <div className={styles.Logos}>
              <a
                href="https://www.we.org/en-CA/"
                target="_blank"
                className={styles.LogoWrapper}
              >
                <img
                  className={styles.Logo}
                  src="welogo.png"
                  alt="WE Water Charity Logo"
                />
              </a>
              <a
                href="https://truenorthaid.ca/"
                target="_blank"
                className={styles.LogoWrapper}
              >
                <img
                  className={styles.Logo}
                  src="tnalogo.jpg"
                  alt="True North Aid Logo"
                />
              </a>
            </div>
          </Section>
          <Section>
            <H2>This year you decide!</H2>
            <P>
              Head over to our facebook page and look for our poll on which
              charities you would like to support.
            </P>
            <P>
              We will be supporting 4 different charities in 2020, donating to
              local, provincial, national, and international causes.
            </P>
            <H2>$50 from each ticket goes to one of our selected charities.</H2>
          </Section>
        </div>
      </PhotoDiv>
    </div>
  );
};
