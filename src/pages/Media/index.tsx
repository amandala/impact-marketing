import React from "react";
import YouTube from "react-youtube-embed";
import Section from "../../components/Section";
import Layout from "../../components/Layout";
import { ButtonLink } from "../../components/Button";
import { H1, P, H2 } from "../../components/Typography";
import styles from "./index.module.scss";

export default () => {
  return (
    <Layout black>
      {/* <Section>
        <H1 impact>Photo Galleries</H1>
        <ButtonLink className={styles.Link} to="/gallery/freedom-march">
          Freedom March
        </ButtonLink>
        <ButtonLink className={styles.Link} to="/gallery/best-of-2019">
          Best of 2019
        </ButtonLink> 
      </Section> */}
      <Section>
        <H1 impact>Digital impact Festival “The Pivot”</H1>
        <P>
          Meet Riley and James, the founders of Impact and PartyWell. In this
          mini-documentary they dive into the ups and downs of Impact's quick
          pivot to a digital festival and chat about our selected causes for
          Digital Impact July 16 - 19, 2020.
        </P>
      </Section>
      <Section>
        <YouTube id="wHPbJ1THe24&t=5s" />
        <P>
          From gearing up for another in-person charity festival to having to
          completely change our focus towards building a charity festival online
          unlike anything ever done in human history. We've gone through an
          insane amount of challenges. As they say, “pressure is what makes
          diamonds”, and through this immense pressure, something even more
          phenomenal was born - Digital Impact Festival: A Global Transformative
          Charity Event.
        </P>
        <P>
          This documentary will give you as Impactors the behind the scenes side
          of our pivotal moments, insight and information that has allowed us to
          expand our mission to unite the world to maximize our collective
          impact! We have been working hard every day to enable you to connect
          with one another & with, with renowned musicians & the causes you
          select.
        </P>
        <P>
          We have been working endlessly to build the platforms, find the
          artists, link multiple causes through what we came here to do. To make
          this is the ultimate online experience to help raise the vibrations
          and awareness to increase the Impact for all involved and those that
          need it the most. Bring in big causes to anchor our movement with
          those that are currently doing amazing and impactful things!
        </P>
        <P>♥︎ The Impact Fam</P>
      </Section>
    </Layout>
  );
};
