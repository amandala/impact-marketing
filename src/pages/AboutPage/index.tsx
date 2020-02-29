import React from "react";
import cx from "classnames";

import { H1, H2, P } from "../../components/Typography";
import Section from "../../components/Section";
import PhotoDiv from "../../components/PhotoDiv";

import styles from "./index.module.scss";

export default () => {
  return (
    <div>
      <PhotoDiv className={styles.Above}>
        <Section className={styles.Section}>
          {/* <img
            className={styles.Wordmark}
            src="/wordmark.png"
            alt="Impact Wordmark Logo"
          /> */}
          <H1 impact>Your favorite charity festival is back</H1>
          <H1>and better than ever!</H1>
          <Section>
            <P>
              Imagine a festival that has all of your favorite bass bumpin'
              tunes, interactive art, workshops, games and more. Now imagine
              that attending this festival meant you were changing the world! Is
              this too good to be true?
            </P>
          </Section>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.Story}>
        <Section className={styles.Section}>
          <H1 impact>Our Story</H1>
          <P>
            IMPACT Festival was created by Dusk2Dawn Productions and Party Well
            in 2019 with the goal to create a unique festival experience focused
            on giving back.
          </P>
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
          <P>
            IMPACT is more than just a festival, it’s a lifestyle. Our mission
            is to empower you to maximize your positive IMPACT. Our
            Transformational Music Festival will have you changing the world one
            beat at a time.
          </P>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.AttendCTA}>
        <Section className={styles.Section}>
          <H1 impact>$50 from each ticket goes to charity</H1>
          <P>
            In 2019 we raised $40,000 for WE Charity’s clean water wells in
            Kenya and True North Aid’s harm reduction & youth empowerment
            programs for First Nations communities in collaboration with the
            ENUF Foundation.
          </P>
          <div className={styles.LogosSection}>
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
          </div>
          <P>
            Attend IMPACT Festival 2020 and have the time of your life while
            changing lives around the world.
          </P>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.Social}>
        <Section className={styles.Section}>
          <H1 impact>This year you decide!</H1>
          <P>
            Head over to our Facebook page and look for our poll on which
            charities you would like to support.
          </P>
          <P>
            We will be supporting 4 different charities in 2020, donating to
            local, provincial, national, and international causes.
          </P>
          <div className={styles.SocialLinks}>
            <a
              className={styles.Link}
              href="https://www.facebook.com/IMPACTFestivalBC/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.SocialIcon} src="/fb.png" alt="Facebook" />
            </a>

            <a
              className={styles.Link}
              href="https://www.facebook.com/groups/850413665327638/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.SocialIcon}
                src="/imp.png"
                alt="Impact Group"
              />
            </a>

            <a
              className={styles.Link}
              href="https://www.instagram.com/IMPACTfestival_bc/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.SocialIcon}
                src="/insta.png"
                alt="Instagram"
              />
            </a>
          </div>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.MakeImpact}>
        <Section className={styles.Section}>
          <H1>Make impact</H1>
          <P>
            Out there somewhere in the deeps of space, on a world eerily similar
            to our own, an intelligent species of biped revelled in their
            prosperity, developing wonderous scientific advances and economic
            prosperity. However, with the spoils of technology came a blissful
            ignorance towards the natural life and overall harmony on the
            planet.
          </P>
          <P>
            With the increase in toxic emissions slowly consuming the planet
            this world soon reached a crisis point, causing a dramatic shift in
            the climate and bringing about widespread devastation. Rising seas
            soon claimed cities, natural disasters claimed entire continents and
            their civilization fell apart. THE FEW WHO REMAINED NEARLY LOST ALL
            HOPE.
          </P>
          <P>
            The bipeds gathered their finest minds and launched a ship out into
            space with the mission of sharing the STORY of their failed world,
            preserving their culture and HOPING ANOTHER SPECIES WOULD PAY HEED
            TO THE LESSON. Their story is a sad one, but, we have come to your
            planet because we have hope for ALL OF YOU, THE IMPACT community.
          </P>
          <P>
            Come and join us as we continue to tell this story through music,
            art and various other means. Participate in our story with
            interactive quests and multimedia displays.
          </P>
          <H2>We Are the IMPACT...</H2>
        </Section>
        <Section className={styles.Section}>
          <H1>Core values</H1>
          <div className={styles.ValuesImages}>
            <img
              className={styles.Value}
              src="/connected-community.png"
              alt="Connected community"
            />
            <img
              className={styles.Value}
              src="/transformational-growth.png"
              alt="Transformational Growth"
            />
            <img
              className={styles.Value}
              src="/positive-impact.png"
              alt="Positive Impact"
            />
            <img
              className={styles.Value}
              src="/radical-responsibility.png"
              alt="Radical Responsibility"
            />
          </div>
        </Section>
      </PhotoDiv>
      {window.screen.width > 1024 && (
        <div className="VideoWrapper">
          <video style={{ maxWidth: "100%" }} autoPlay loop muted>
            <source src="/promo.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};
