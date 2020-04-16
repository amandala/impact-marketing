import React from "react";
import { H1, H2, P } from "../../components/Typography";
import Section from "../../components/Section";
import PhotoDiv from "../../components/PhotoDiv";

import styles from "./index.module.scss";

export default () => {
  return (
    <div>
      <PhotoDiv className={styles.Above}>
        <Section className={styles.Section}>
          <H1 impact>BC's First Transformational Charity Festival is back</H1>
          <H1>with a whole new twist!</H1>
          <div className={styles.SocialLinks}>
            <a
              className={styles.Link}
              href="https://www.facebook.com/IMPACTFestivalBC/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.SocialIcon}
                src="/assets/fb.png"
                alt="Facebook"
              />
            </a>

            <a
              className={styles.Link}
              href="https://www.facebook.com/groups/850413665327638/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.SocialIcon}
                src="/assets/imp.png"
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
                src="/assets/insta.png"
                alt="Instagram"
              />
            </a>
          </div>
          {/*<Section >
            <P className={styles.Covid}>
              Imagine a festival that has all of your favorite bass bumpin'
              tunes, interactive art, workshops, games and more. Now imagine
              that attending this festival meant you were changing the world! Is
              this too good to be true?
            </P>
          </Section> */}
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.Story}>
        <Section className={styles.Section}>
          <H1 impact>We started with a purpose</H1>
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
                  src="/assets/pwLogo.png"
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
                  src="/assets/d2dLogo.png"
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
          <H1 impact>Last year we made a huge impact!</H1>
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
                  src="/assets/welogo.png"
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
                  src="/assets/tnalogo.jpg"
                  alt="True North Aid Logo"
                />
              </a>
            </div>
          </div>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.Social}>
        <Section className={styles.Section}>
          <H1 impact>
            This year... we had an unexpected global catastrophe :(
          </H1>
          <P>
            It is with a heavy heart that we have decided to postpone IMPACT
            2020 to 2021. Due to the unstable event bans and the financial
            environment, it is no longer possible for us to host the event as we
            had originally planned this year. Instead, Impact 2020 is evolving
            into something else that you’re absolutely going to love!
          </P>
          <P>
            We put together a revolutionary online festival concept that we are
            piloting April 16 & 17! Through this event and many more to come in
            2020, we will be able to raise money for charity and connect with
            one another through our shared love of music and transformation.
          </P>
          <H2>
            As these are uncertain times, we ask that you hold true to the
            IMPACT core 4 values
          </H2>
          <P>Positive Impact</P>
          <P>Transformational Growth</P>
          <P>Connected Community</P>
          <P>Radical Responsibility</P>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.MakeImpact}>
        <Section className={styles.Section}>
          {/* <H1>Make impact</H1>
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
          <H2>We Are the IMPACT...</H2> */}
        </Section>
        <Section className={styles.Section}>
          <H1>Core values</H1>
          <div className={styles.ValuesImages}>
            <img
              className={styles.Value}
              src="/assets/connected-community.png"
              alt="Connected community"
            />
            <img
              className={styles.Value}
              src="/assets/transformational-growth.png"
              alt="Transformational Growth"
            />
            <img
              className={styles.Value}
              src="/assets/positive-impact.png"
              alt="Positive Impact"
            />
            <img
              className={styles.Value}
              src="/assets/radical-responsibility.png"
              alt="Radical Responsibility"
            />
          </div>
        </Section>
        <Section className={styles.Section}>
          <H2>Connected Community</H2>
          <P className={styles.Covid}>
            Reach out to friends and family and offer support where you can
          </P>
          <P className={styles.Covid}>
            Become active in social media groups and spread joy and love rather
            than fear and worry.
          </P>
        </Section>
        <Section className={styles.Section}>
          <H2>Transformational Growth</H2>
          <P className={styles.Covid}>
            Take this opportunity to learn a new skill: Udemy or any other
            online learning platform
          </P>
          <P className={styles.Covid}>
            Spend time exercising, eating healthy and developing new habits that
            will make you a stronger, happier, healthier person
          </P>
          <P className={styles.Covid}>
            Take some time to reflect on your life and plan out a map for where
            you want to be in the future.
          </P>
        </Section>
        <Section className={styles.Section}>
          <H2>Positive Impact:</H2>
          <P className={styles.Covid}>
            Take time every day to think of one way you can bring love to the
            world. Even as easy as an inspiring post or picture.
          </P>
          <P className={styles.Covid}>
            Find ways to give to others that are less fortunate, or that may be
            impacted by this worse than others.
          </P>
        </Section>

        <Section className={styles.Section}>
          <H2>Radical Responsibility</H2>
          <P className={styles.Covid}>
            Take responsibility for your safety and the safety of others.
          </P>
          <P className={styles.Covid}>
            Follow the guidelines set in place. Practice social distancing and
            be mindful of others.
          </P>
          <P className={styles.Covid}>
            Be responsible towards yourself during these times. Take some time
            to reflect on events in your life and take accountability towards a
            brighter future for yourself.
          </P>
        </Section>
        <Section className={styles.Section}>
          <P className={styles.Covid}>
            We know that many of you may be disappointed with the events that
            are transpiring, but this can become a great opportunity for change
            in our world. Let's work on having a strong collective positive
            mindset and look out for one another. We can all come out of this
            stronger, happier and more grateful than ever before.
          </P>
          <H2>Love - The IMPACT Fam 💙</H2>
        </Section>
      </PhotoDiv>
    </div>
  );
};
