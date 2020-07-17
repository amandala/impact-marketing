import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { InlineLink } from "../../components/Link";
import { H1, H2, H3, P } from "../../components/Typography";

import styles from "./index.module.scss";
import { ButtonLink } from "../../components/Button";

export default () => {
  return (
    <Layout className={styles.Black}>
      <a
        href="https://www.instagram.com/lone.wolf.bench/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Section className={styles.HeadingWrapper}>
          <img
            className={styles.Logo}
            src="/assets/streamChannelLogos/wolfpackcreative.png"
            alt="Wolf Pack Creative Logo"
          />

          <div>
            <H1 impact className={styles.Heading}>
              Calgary Mural Jam
            </H1>
            <H2>Hosted by Wolf Pack Creative</H2>
            <H1>Live on the Oasis Stage</H1>
          </div>
        </Section>
      </a>
      <Section>
        <H1 impact>Timeline</H1>
        <H2>July 18</H2>
        <H3>12:00pm - Jam starts.</H3>
        <P>You are welcome to start painting at noon on Saturday.</P>
        <H3>8:00pm - Livestream Party</H3>
        <P>
          Musubi Rising is working hard to curate a lineup of awesome DJs,
          bands, and MCs to keep us entertained for the night and straight
          through Sunday.
        </P>
        <P>
          <InlineLink href="https://www.nowayjoseproductions.com/">
            No Way Jose Productions
          </InlineLink>{" "}
          has partnered up to bring professional video production so your art
          can shine on our Twitch spotlight stage.
        </P>
        <H2>July 19</H2>
        <H3>8pm - Jam ends.</H3>
        <P>
          In order to be mindful of the sporting organizations that have events
          in the space the following week, we need to wrap up our creation no
          later than 8pm on Sunday.There's going to be a lot of clean-up to do!
        </P>
        <P>
          If you are able to stick around and help out with tear down that would
          be greatly appreciated. We will provide pizza and beer to the diehard
          cleanup crew.
        </P>
      </Section>
      <Section>
        <H1>Location</H1>
        <P>
          We are only permitted to access the space through the back doors of
          the building directly opposite of 33rd St. There is a colorful camper
          parked near our entrance.
        </P>
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1877.3658508050437!2d-113.98996042320262!3d51.05507494696671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717b2a20c2df9f%3A0x9013fa5e79ed8f!2sThe%20Calgary%20Central%20Sportsplex!5e0!3m2!1sen!2sca!4v1594967843408!5m2!1sen!2sca"
          width="600"
          height="450"
          aria-hidden="false"
        ></iframe>
      </Section>
      <Section>
        <H1 impact>Things to Note</H1>
        <P>
          <strong>IMPORTANT</strong>: Due to Covid 19 restrictions we are on a
          strict guest list and outside spectators are unfotunately not allowed.
          The Phase 2 restrictons, we are limited to a 50 person cohort
          interacting in the space over the course of the weekend. With artists,
          musicians, and crew, we are already slightly over our limit, so we
          need to be very cautious to practice proper social distancing and wear
          masks when possible.
        </P>
        <P>
          The jam in general, and the collab mural will be centered around the
          themes of unity, peace, love, and community. Our location is a
          not-for-profit sports complex that hosts a number of sports
          organizations with members of all ages, so there are just a few rules
          for the art in general. Keeping in mind the charitable recipients, the
          current state of the world, and the all-ages population of the venue,{" "}
          <strong>
            the art absolutely can not contain any gang affiliations, swears
            words, derogatory terms, or political sentiments
          </strong>
          . Phrases and images in support of the BLM movement, Indigenous
          Rights, and Mental Health are welcomed and encouraged.
        </P>
        <P>
          We will be livestreaming the event via Twitch embedded on our website,
          so{" "}
          <strong>
            any considerations you might need to take to protect your identity
            are your responsibility
          </strong>
          .
        </P>
      </Section>
      <Section>
        <H1 impact>intro to impact</H1>
        <P>
          Impact Festival Society is a not-for-profit event production company
          based in Vancouver. The endeavour is a collaboration between{" "}
          <InlineLink href="https://www.dusk2dawnproductions.com/">
            Dusk2Dawn Productions
          </InlineLink>{" "}
          and{" "}
          <InlineLink href="https://partywell.org">Partywell.org</InlineLink>{" "}
          with the intention of throwing killer events while making a massive
          positive societal impact. We threw our first iteration of Impact
          Festival last September in BC and it was a huge success. Due to
          current world events and the inability to have large public events, we
          decided to pivot to a digital festival and weather out the storm.
        </P>
        <P>
          Check out our <InlineLink href="/causes">causes page</InlineLink> to
          learn more about our selected causes for Digital Impact.
        </P>
      </Section>
    </Layout>
  );
};
