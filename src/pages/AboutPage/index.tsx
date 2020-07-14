import React from "react";
import { H1, Tiny, P } from "../../components/Typography";
import { ButtonLink } from "../../components/Button";
import Section from "../../components/Section";
import PhotoDiv from "../../components/PhotoDiv";

import styles from "./index.module.scss";

export default () => {
  return (
    <div className={styles.About}>
      {window.screen.width > 1024 && (
        <div className={styles.VideoWrapper}>
          <video className={styles.Video} muted autoPlay>
            <source src="/videos/finalcut.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      <PhotoDiv className={styles.Home1}>
        <Section className={styles.Section}>
          <H1 impact>
            Digital IMPACT Festival will feature fully immersive Virtual Stages
          </H1>
          <Section>
            <P>150+ amazing artists</P>
            <P>Virtual dance floors</P>
            <P>Multiple record label showcases</P>
            <P>Live visuals</P>
            <P>Easy stage navigation</P>
          </Section>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.Home2}>
        <Section className={styles.Section}>
          <H1 impact>Join our Workshop Stage and get inspired!</H1>
          <P>Yoga, Dance, Flow</P>
          <P>Music production</P>
          <P>Inspirational talks</P>
          <P>Learn new skills</P>
          <ButtonLink className={styles.Apply} to="/apply">
            Host a workshop
          </ButtonLink>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.Home3}>
        <Section className={styles.Section}>
          <H1 impact>Check out the Virtual Marketplace</H1>
          <P>Artist Merchandise</P>
          <P>Local Merchants</P>
          <P>Support small businesses</P>
          <ButtonLink className={styles.Apply} to="/marketplace">
            Sell in our Marketplace
          </ButtonLink>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.Home4}>
        <Section className={styles.Section}>
          <H1 impact>vip - Very important Philanthropist</H1>
          <P>Zoom meet-n-greets with select artists</P>
          <P>Exclusive virtual reality experience access</P>
          <P>Exclusive merchandise</P>
          <Tiny>VIP requires $200 donation</Tiny>
          <Tiny>Headset not required for VR Experience</Tiny>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.Home5}>
        <Section className={styles.Section}>
          <H1 impact>Virtual art gallery</H1>
          <P>
            Watch live art unfold before your eyes on the graffiti mural jam
            stream
          </P>
          <P>
            Sell your artwork and photography in our Shopify Marketplace and
            donate a portion of the sale to our charities.
          </P>
          <P>
            Purchase artwork and photography in the Impact Marketplace to
            support the artist.
          </P>
          <P>
            Visit the Utherverse virtual art gallery and browse art for sale.
          </P>
          <ButtonLink className={styles.Apply} to="/art">
            Apply as a creative
          </ButtonLink>
        </Section>
      </PhotoDiv>
      <PhotoDiv className={styles.MakeImpact}>
        <Section className={styles.Section}>
          <div className={styles.ValuesImages}>
            <img
              className={styles.Value}
              src="/assets/primary/connected-community.png"
              alt="Connected community"
            />
            <img
              className={styles.Value}
              src="/assets/primary/transformational-growth.png"
              alt="Transformational Growth"
            />
            <img
              className={styles.Value}
              src="/assets/primary/positive-impact.png"
              alt="Positive Impact"
            />
            <img
              className={styles.Value}
              src="/assets/primary/radical-responsibility.png"
              alt="Radical Responsibility"
            />
          </div>
          <div className={styles.CoreValue}>
            <H1>Connected Community</H1>
            <P>
              Reach out to friends and family and offer support where you can
            </P>
            <P>
              Become active in social media groups and spread joy and love
              rather than fear and worry.
            </P>
          </div>
          <div className={styles.CoreValue}>
            <H1>Transformational Growth</H1>
            <P>
              Take this opportunity to learn a new skill: Udemy or any other
              online learning platform
            </P>
            <P>
              Spend time exercising, eating healthy and developing new habits
              that will make you a stronger, happier, healthier person
            </P>
            <P>
              Take some time to reflect on your life and plan out a map for
              where you want to be in the future.
            </P>
          </div>
          <div className={styles.CoreValue}>
            <H1>Positive impact</H1>I
            <P>
              Take time every day to think of one way you can bring love to the
              world. Even as easy as an inspiring post or picture.
            </P>
            <P>
              Find ways to give to others that are less fortunate, or that may
              be impacted by this worse than others.
            </P>
          </div>
          <div className={styles.CoreValue}>
            <H1>Radical Responsibility</H1>
            <P>Take responsibility for your safety and the safety of others.</P>
            <P>
              Follow the guidelines set in place. Practice social distancing and
              be mindful of others.
            </P>
            <P>
              Be responsible towards yourself during these times. Take some time
              to reflect on events in your life and take accountability towards
              a brighter future for yourself.
            </P>
          </div>
          <P>
            We know that many of you may be disappointed with the events that
            are transpiring, but this can become a great opportunity for change
            in our world. Let's work on having a strong collective positive
            mindset and look out for one another. We can all come out of this
            stronger, happier and more grateful than ever before.
          </P>
          <H1>Love - The IMPACT Fam 💙</H1>
          <img
            className={styles.Mosaic}
            src="/assets/primary/impact-mosaic.jpg"
            alt="Mosaic"
          />
        </Section>
      </PhotoDiv>
    </div>
  );
};
