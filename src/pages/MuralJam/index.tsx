import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { InlineLink } from "../../components/Link";
import { H1, H2, P } from "../../components/Typography";

import styles from "./index.module.scss";

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
          />

          <div>
            <H1 impact className={styles.Heading}>
              Calgary Mural Jam
            </H1>
            <H2>Hosted by Wolf Pack Creative</H2>
          </div>
        </Section>
      </a>
      <Section>
        <H1>intro to impact</H1>
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
          We had our trial run in April with four twitch stages embedded on our
          ImpactFestival.ca website. Throughout the course of the weekend we
          raised over $6000 for our selected charity recipients. We have
          partnered with the{" "}
          <InlineLink href="https://www.facebook.com/events/255274695739056/">
            Black Freedom Society
          </InlineLink>
          ,{" "}
          <InlineLink href="https://truenorthwater.org/?q=cache:4h6NYRbRO8UJ:https://truenorthwater.org/+&cd=1&hl=en&ct=clnk&gl=ca">
            True North Water
          </InlineLink>
          , and the{" "}
          <InlineLink href="https://cmha.ca/">
            Canadian Mental Health Association
          </InlineLink>{" "}
          as our charity recipients for our next event, Digital Impact, Jul 16 -
          19. This time we want to make even more of an impact!
        </P>
      </Section>
      <Section>
        <H1>Graffiti Jam July 18-19</H1>
        <P>
          Being that we are throwing a digital festival this time around, we are
          in a unique position to decentralize our creative productions. As
          such, there will be a 24 hour private graffiti jam hosted at an indoor
          location in NE Calgary. There is plenty of space available, so there
          is opportunity to collaborate on a large mural with a number of
          artists and/or do an individual piece.
        </P>
        <P>
          The jam in general, and the collab mural will be centered around the
          themes of unity, peace, love, and community. There will be an initial
          planning session for the collab mural held in Calgary on June 20, 2pm.
          If you are interested in participating in the group mural, we want you
          to be involved in the design! Details below.
        </P>
        <P>
          Our location is a not-for-profit sports complex that hosts a number of
          sports organizations with members of all ages, so there are just a few
          rules for the art in general. Keeping in mind the charitable
          recipients, the current state of the world, and the all-ages
          population of the venue,{" "}
          <strong>
            the art absolutely can not contain any gang affiliations, swears
            words, derogatory terms, or political sentiments
          </strong>
          . Phrases and images in support of the BLM movement, Indigenous
          Rights, and Mental Health are welcomed and encouraged.
        </P>
        <P>
          The jam is going to be a 24 hour event and you are welcome to begin
          painting at 8pm Saturday night and go straight through the night and
          until 8pm on Sunday the 19th. There will be a stage set up in the main
          room with live dj sets for the entirety of the event. There is space
          to set up a tent, should you need a power nap.
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
        <P>
          To save a spot in the mural jam, please fill apply as an Art
          Contributor through our{" "}
          <InlineLink href="/apply">application portal.</InlineLink>
        </P>
        <P>Initial planning session: June 20, 2PM</P>
        <P>Mural Jam July 18 8pm - July 19 8pm</P>
        <P>
          Contact{" "}
          <InlineLink href="mailto:amanda@partywell.org">
            amanda@partywell.org
          </InlineLink>{" "}
          for the address and with any questions.
        </P>
        <P>I’m super excited to see what we create together!</P>
      </Section>
    </Layout>
  );
};
