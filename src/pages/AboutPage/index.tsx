import React from "react";

import { H1, H2, P } from "../../components/Typography";
import Section from "../../components/Section";
import PhotoDiv from "../../components/PhotoDiv";

import styles from "./index.module.scss";

export default () => {
  return (
    <div>
      <PhotoDiv className={styles.MainStage}>
        <div className={styles.Wrapper}>
          <img
            className={styles.Wordmark}
            src="/wordmark.png"
            alt="Impact Wordmark Logo"
          />
          <Section>
            <div className={styles.SectionHeading}>
              <H1>Your favorite charity festival is back</H1>
              <H1>and better than ever!</H1>
            </div>
            <P>
              Imagine a festival that has all of your favorite bass bumpin
              tunes, interactive art, workshops, games and more. Now imagine
              that attending this festival meant you were changing the world! Is
              this too good to be true?
            </P>
            <P>
              Attend to IMPACT Festival 2020 - Have the time of your life while
              changing lives around the world.
            </P>
          </Section>
          <Section>
            <div className={styles.Links}>
              <span className={styles.CTA}>
                <a
                  className={styles.Link}
                  href="https://www.facebook.com/IMPACTFestivalBC/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit us on Facebook
                </a>
              </span>
              <span className={styles.CTA}>
                <a
                  className={styles.Link}
                  href="https://www.facebook.com/groups/850413665327638/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join the IMPACT Group
                </a>
              </span>
              <span className={styles.CTA}>
                <a
                  className={styles.Link}
                  href="https://www.instagram.com/IMPACTfestival_bc/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow us on Instagram
                </a>
              </span>
            </div>
          </Section>
          <Section>
            <div className={styles.SectionHeading}>
              <H1>Our Story</H1>
            </div>
            <P>
              IMPACT Festival was created by Dusk2Dawn Productions and Party
              Well in 2019. The goal was to create a unique festival experience
              that focused on giving back. By gathering like minded people to
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
            <div className={styles.LogosSection}>
              <div className={styles.Logos}>
                <a
                  href="https://partywell.org/"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
                  className={styles.LogoWrapper}
                >
                  <img
                    className={styles.Logo}
                    src="d2dLogo.png"
                    alt="Dusk2Dawn Logo"
                  />
                </a>
              </div>
            </div>
          </Section>
          <Section>
            <div className={styles.SectionHeading}>
              <H1>Charities</H1>
            </div>
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
                rel="noopener noreferrer"
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
                rel="noopener noreferrer"
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
              Head over to our Facebook page and look for our poll on which
              charities you would like to support.
            </P>
            <P>
              We will be supporting 4 different charities in 2020, donating to
              local, provincial, national, and international causes.
            </P>
            <H2>$50 from each ticket goes to one of our selected charities.</H2>
          </Section>
          <Section>
            <div className={styles.SectionHeading}>
              <H1>Make impact</H1>
            </div>
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
              IMPACT community.
            </P>
            <P>
              Come and join us as we continue to tell this story through music,
              art and various other means. Participate in our story with
              interactive quests and multimedia displays.
            </P>
            <P>We Are the IMPACT...</P>
          </Section>
        </div>
      </PhotoDiv>
    </div>
  );
};
