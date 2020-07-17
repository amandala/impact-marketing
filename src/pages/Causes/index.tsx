import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { H1, H2, P, Tiny } from "../../components/Typography";
import DonateButton from "../../components/DonateButton";
import styles from "./index.module.scss";
import { ButtonLinkExternal } from "../../components/Button";
import { InlineLink } from "../../components/Link";

export default () => {
  return (
    <div>
      <img
        className={styles.CausesStill}
        src="/assets/causes/causes-still.png"
        alt="Causes Poster"
      />
      <Layout black>
        <Section className={styles.Donations}>
          <H1 impact className={styles.Impactor}>
            Select a tier below to become an impactor
          </H1>
          <H2>All donations matched by the ENUF Foundation up to $20,000</H2>
          <Tiny className={styles.AllPerks}>
            All perks are unlocked at higher amounts
          </Tiny>
          <ul className={styles.Tiers}>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.paypal.me/makeimpact/1"
                className={styles.Tier}
              >
                💰
                <span className={styles.Info}>
                  <span className={styles.Price}>$1</span>
                  <span className={styles.Title}>Donor List Shoutout</span>
                </span>
                <P className={styles.Description}>
                  Social Media Shoutout as an IMPACTOR
                </P>
              </a>
            </li>
            <li className={styles.Tier}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.paypal.me/makeimpact/25"
                className={styles.Tier}
              >
                💰💰
                <span className={styles.Info}>
                  <span className={styles.Price}>$25</span>
                  <span className={styles.Title}>3D World Access</span>
                </span>
                <P className={styles.Description}>
                  Join our 3D world, Vendor Village, and Art Gallery
                </P>
              </a>
            </li>
            <li className={styles.Tier}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.paypal.me/makeimpact/50"
                className={styles.Tier}
              >
                💰💰💰
                <span className={styles.Info}>
                  <span className={styles.Price}>$50</span>
                  <span className={styles.Title}>Free Bandana</span>
                </span>
                <P className={styles.Description}>
                  Get sent an exclusive IMPACT Bandana
                </P>
              </a>
            </li>
            <li className={styles.Tier}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.paypal.me/makeimpact/100"
                className={styles.Tier}
              >
                💰💰💰💰
                <span className={styles.Info}>
                  <span className={styles.Price}>$100</span>
                  <span className={styles.Title}>Mystery Merch</span>
                </span>
                <P className={styles.Description}>
                  Get sent a mystery merch prize from our vendor market
                </P>
              </a>
            </li>
            <li className={styles.Tier}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.paypal.me/makeimpact/200"
                className={styles.Tier}
              >
                🤩💰💰💰🤩
                <span className={styles.Info}>
                  <span className={styles.Price}>$200</span>
                  <span className={styles.Title}>
                    ViP (Very important Philanthropist)
                  </span>
                </span>
                <P className={styles.Description}>
                  Meet and Greet with a select artist/ workshop host
                </P>
              </a>
            </li>
            <li className={styles.Tier}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.paypal.me/makeimpact"
                className={styles.Tier}
              >
                💸💸💸
                <span className={styles.Info}>
                  <span className={styles.Price}>Select your amount</span>
                </span>
                <P className={styles.Description}>
                  You choose the amount and get all the perks plus more
                </P>
              </a>
            </li>
          </ul>
        </Section>
        <Section>
          <H1 impact className={styles.ImpactorBig}>
            We are on a mission to unite the world and maximize our collective
            impact!
          </H1>
          <Tiny className={styles.Impactor}>
            All donations are split evenly between our causes
          </Tiny>
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
            oppression and brutality and have paid the price. The legal system
            in the US is built to keep low income people stuck in a hole they
            can’t dig themselves out of. Let’s work together with our collective
            wealth to support those in need, and show the world that we support
            free speech.
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
            mental health problems and illnesses, support recovery and
            resilience, and enable all Canadians to flourish and thrive.
          </P>
          <P>
            Through the help of ENUF we will be matching donations up to $20,000
            for the CMHA. We chose this charity because we believe mental health
            is the key to an individual's success. If someone can shift their
            mental perspective into a healthier mindset, they will be able to
            achieve much more in their life. This will allow for a greater
            Impact both in that individual's life as well as all of the people
            they interact with.
          </P>
          <div className={styles.Links}>
            <ButtonLinkExternal className={styles.Link} to="https://cmha.ca/">
              RESOURCE: cmha.ca
            </ButtonLinkExternal>
          </div>
        </Section>
        <Section>
          <img
            className={styles.CauseLogo}
            src="/assets/causes/true-north-water/tnw-logo-white.png"
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
            <InlineLink href="https://waterfirst.ngo">Water First</InlineLink>{" "}
            to help bring safe drinking water to First Nations communities by
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
              to="https://waterfirst.ngo"
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
        <Section>
          <img
            className={styles.CauseLogo}
            src="/assets/causes/artist-fund-logo.png"
            alt="Impact Artist Fund Logo"
          />
          <H1 impact>impact Artist fund</H1>
          <P>
            Covid-19 has created a very difficult environment for artists. So we
            thought of some unique ways for artists to earn money.{" "}
          </P>
          <ul className={styles.List}>
            <li className={styles.ListItem}>
              A portion of donations will be going to the artists involved
            </li>
            <li className={styles.ListItem}>Direct Donations to artists</li>
            <li className={styles.ListItem}>
              Purchase artist merch in the market
            </li>
            <li className={styles.ListItem}>
              VIP meet and greets help directly support the artist
            </li>
          </ul>
          <div className={styles.Links}>
            <ButtonLinkExternal
              className={styles.Link}
              to="https://paypal.me/makeimpact"
            >
              DONATE: https://paypal.me/makeimpact
            </ButtonLinkExternal>
          </div>
        </Section>
        <Section>
          <img
            className={styles.ImpactLogo}
            src="/assets/primary/wordmark.png"
            alt="Impact"
          />
          <P>This event will help fund our non-profit society!</P>
          <P>
            With your support we can continue to grow and create bigger and
            better events and support even more causes.
          </P>
        </Section>
        <DonateButton href="https://paypal.me/makeimpact" />
      </Layout>
    </div>
  );
};
