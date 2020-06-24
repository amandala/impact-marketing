import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { H1, P } from "../../components/Typography";

import styles from "./index.module.scss";
import { ButtonLinkExternal } from "../../components/Button";
import { InlineLink } from "../../components/Link";

export default () => {
  return (
    <Layout className={styles.Black}>
      <Section>
        <H1 impact>
          We are on a mission to unite the world and maximize our collective
          impact!
        </H1>
        <P>
          Check out the great causes we are supporting with donations raised at
          our Digital Impact event July 16 - 19.
        </P>
      </Section>
      <Section>
        <img
          className={styles.CauseLogo}
          src="/assets/causes/black-lives-matter/BLM-logo.png"
          alt="Black Lives Matter Association Logo"
        />
        <H1>Black Lives Matter</H1>
        <P>
          We here at IMPACT believe that no one should be arrested for free
          speech. We want to support those who have been speaking out about
          oppression and brutality and have paid the price. The legal system in
          the US is built to keep low income people stuck in a hole they can’t
          dig themselves out of. Let’s work together with our collective wealth
          to support those in need, and show the world that we support free
          speech.
        </P>
        <P>
          Split a donation to 70+ bail funds, mutual aid funds, and activists.
          Or allocate specific amounts to individual groups.
        </P>
        <div className={styles.Links}>
          <ButtonLinkExternal
            className={styles.Link}
            to="https://secure.actblue.com/donate/bail_funds_george_floyd"
          >
            DONATE: Bail Funds
          </ButtonLinkExternal>
          <ButtonLinkExternal
            className={styles.Link}
            to="https://blacklivesmatters.carrd.co/"
          >
            RESOURCE: blacklivesmatter.carrd.co
          </ButtonLinkExternal>
          <ButtonLinkExternal
            className={styles.Link}
            to="https://blacklivesmatter.com/"
          >
            RESOURCE: blacklivesmatter.com
          </ButtonLinkExternal>
        </div>
      </Section>
      <Section>
        <img
          className={styles.CauseLogo}
          src="/assets/causes/cmha/cmha-logo.png"
          alt="Canadian Mental Health Association Logo"
        />
        <H1>Canadian Mental Health Association</H1>
        <P>
          CMHA provides advocacy, programs and resources that help to prevent
          mental health problems and illnesses, support recovery and resilience,
          and enable all Canadians to flourish and thrive.
        </P>
        <P>
          Through the help of ENUF we will be matching donations up to $20,000
          for the CMHA. We chose this charity because we believe mental health
          is the key to an individual's success. If someone can shift their
          mental perspective into a healthier mindset, they will be able to
          achieve much more in their life. This will allow for a greater Impact
          both in that individual's life as well as all of the people they
          interact with.
        </P>
        <div className={styles.Links}>
          <ButtonLinkExternal className={styles.Link} to="https://cmha.ca/">
            RESOURCE: cmha.ca/
          </ButtonLinkExternal>
        </div>
      </Section>
      <Section>
        <img
          className={styles.CauseLogo}
          src="/assets/causes/true-north-water/tnw-logo.jpg"
          alt="True North Water Logo"
        />
        <H1>True North Water</H1>
        <P>
          True North Water is a registered Public Foundation based in Calgary
          Alberta on a mission to bring clean drinking water to those most in
          need. They cover the overhead cost of their initiatives, so 100% of
          public donations go towards funding global clean water projects.
        </P>
        <P>
          They've partnered with{" "}
          <InlineLink href="https://waterfirst.ngo/">Water First</InlineLink> to
          help bring safe drinking water to First Nations communities by
          providing clean water infrastructure and training within the
          community.
        </P>
        <P>
          They also want you to have fun while you make a difference, so they
          created BigBash. A mini-game style mobile app where just playing
          accumulates donations on your behalf completely free of cost to you.
        </P>
        <div className={styles.Links}>
          <ButtonLinkExternal
            className={styles.Link}
            to="https://truenorthwater.org/#donate"
          >
            DONATE: True North Water
          </ButtonLinkExternal>
          <ButtonLinkExternal
            className={styles.Link}
            to="https://waterfirst.ngo/"
          >
            RESOURCE: Water First
          </ButtonLinkExternal>
          <ButtonLinkExternal
            className={styles.Link}
            to="https://truenorthwater.org/thirst"
          >
            RESOURCE: Thirst Initiative
          </ButtonLinkExternal>
          <ButtonLinkExternal
            className={styles.Link}
            to="https://play.google.com/store/apps/details?id=com.bigbash.bigbash&hl=en_CA"
          >
            DOWNLOAD: BigBash on Google Play
          </ButtonLinkExternal>
          <ButtonLinkExternal
            className={styles.Link}
            to="https://apps.apple.com/ca/app/big-bash/id1460366819"
          >
            DOWNLOAD: BigBash on Apple App Store
          </ButtonLinkExternal>
        </div>
      </Section>
    </Layout>
  );
};
