import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import { ButtonLink } from "../../components/Button";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import DigitalImpactBanner from "../../components/DigitalImpactBanner";
import { H1, P, Tiny } from "../../components/Typography";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <Layout black>
      <DigitalImpactBanner before={"Welcome to"} />
      <Section>
        <P>
          We've curated a ton of awesome digital experiences for you to explore.
          Click around the navigation links below to visit the different areas
          of our digital festival.
        </P>
      </Section>
      <Section className={styles.DonateWrapper}>
        <ButtonLink className={styles.Donate} to="/causes">
          Donate
        </ButtonLink>
      </Section>
      <Section>
        <H1>Stages</H1>
        <div className={styles.Stages}>
          <Link to="/digital-impact/dusk2dawn" className={styles.Stage}>
            <img
              className={styles.Logo}
              src="/assets/streamChannelLogos/dusk2dawnproductions.png"
              alt="Dusk2Dawn Stage"
            />
            <Tiny className={styles.Info}>
              Featuring a locally curated Vancouver lineup
            </Tiny>
          </Link>
          <Link to="/digital-impact/odessy" className={styles.Stage}>
            <img
              className={styles.Logo}
              src="/assets/stages/odyssey.png"
              alt="Odessy Stage"
            />
            <Tiny className={styles.Info}>
              A fully 3d digital stage flying high in outter space
            </Tiny>
          </Link>
          <Link to="/digital-impact/oasis" className={styles.Stage}>
            <img
              className={styles.Logo}
              src="/assets/stages/oasis.png"
              alt="Oasis Stage"
            />
            <Tiny className={styles.Info}>
              Wolf Pack Creative Graffiti Jam and Live art painting
            </Tiny>
          </Link>
          <Link to="/digital-impact/limitless" className={styles.Stage}>
            <img
              className={cx(styles.Logo, styles.Limitless)}
              src="/assets/stages/limitless-white.png"
              alt="Limitless Stage"
            />
            <Tiny className={styles.Info}>
              Packed with transformational workshops
            </Tiny>
          </Link>
        </div>
      </Section>
      <Section>
        <H1>Extras</H1>
        <div className={styles.Extras}>
          <Link to="/" className={styles.Stage}>
            <img
              className={styles.Logo}
              src="/assets/stages/market.png"
              alt="Impact Marketplace"
            />
            <Tiny className={styles.Info}>
              Browse a selection of art and goods for sale
            </Tiny>
          </Link>
          <Link to="/" className={styles.Stage}>
            <img
              className={styles.Logo}
              src="/assets/sponsors/sponsor-utherverse.png"
              alt="Utherverse"
            />
            <Tiny className={styles.Info}>
              Visit the Utherverse 3D Art Gallery
            </Tiny>
          </Link>
          <Link to="/" className={styles.Stage}>
            <img
              className={styles.Logo}
              src="/assets/stages/community.png"
              alt="Impact Community"
            />
            <Tiny className={styles.Info}>
              Connect with your fam and join the impact Tribe
            </Tiny>
          </Link>
        </div>
      </Section>
      <Section>
        <H1>Special Mentions</H1>
        <div className={styles.SpecialMentions}>
          <Link to="/causes" className={styles.Stage}>
            <img
              className={styles.Logo}
              src="/assets/stages/causes.png"
              alt="Causes"
            />
            <Tiny className={styles.Info}>
              Check out the organizations we are collecting money for
            </Tiny>
          </Link>
          <Link to="/sponsors" className={styles.Stage}>
            <img
              className={styles.Logo}
              src="/assets/stages/sponsors.png"
              alt="Sponsors"
            />
            <Tiny className={styles.Info}>
              See the list of our incredible sponsors and partners
            </Tiny>
          </Link>
        </div>
      </Section>
    </Layout>
  );
};

export default Home;
