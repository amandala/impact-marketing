import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { H1, P } from "../../components/Typography";

import styles from "./index.module.scss";
import { ButtonLink } from "../../components/Button";

export default () => {
  return (
    <Layout className={styles.Black}>
      <Section className={styles.HeadingWrapper}>
        <img className={styles.Logo} src="/assets/impactlogo.png" />
        <div>
          <H1 impact className={styles.Heading}>
            Art Contribution information Hub
          </H1>
        </div>
      </Section>
      <Section>
        <H1>
          impact wants to help share your creative talents with the world!{" "}
        </H1>
        <P>
          We've got three different ways for you to contribute art to Digital
          Impact.{" "}
          <ol>
            <li>A Virtual Art gallery hosted in the Utherverse</li>
            <li>
              A Shopify powered marketplace where we manage the sales and send
              you the money.
            </li>
            <li>
              A 24 hour indoor Graffiti Jam in Calgary to be livestreamed as a
              Spotlight Stage on Saturday night.
            </li>
          </ol>
        </P>
      </Section>
      <Section>
        <ButtonLink to="/apply">Apply as a Creative</ButtonLink>
      </Section>
      <Section>
        <H1>Virtual Art Gallery</H1>
        <P>
          We have partnered with Utherverse to bring a virtual art gallery to
          our digital festival goers, and we want to showcase your art.
        </P>
        <ButtonLink to="/gallery">Virtual Gallery Details</ButtonLink>
      </Section>
      <Section>
        <H1>impact Marketplace</H1>
        <P>
          Open to more than just art, we want to provide a platform for you to
          easily sell your goods to our digital festival attendees.
        </P>
        <P>
          We want to support you while making impact, so 85% of all sales goes
          directly to the artist and the remaining 15% goes into our charity
          pool.
        </P>
        <P>
          Sell art you've already created, or offer commission pieces by
          size/medium/etc.
        </P>
        <ButtonLink to="/marketplace">Marketplace Details</ButtonLink>
      </Section>
      <Section>
        <H1>Calgary Graffiti Jam July 18-19</H1>
        <P>
          Indoor 24 hour Graffiti Jam produced by Wolf Pack Creative to be live
          streamed as a Showcase Stage on Saturday night.{" "}
        </P>
        <ButtonLink to="/liveart">Graffiti Jam Details</ButtonLink>
      </Section>
    </Layout>
  );
};
