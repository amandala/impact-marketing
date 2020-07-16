import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import { ButtonLinkExternal } from "../../components/Button";
import DonateButton from "../../components/DonateButton";
import Section from "../../components/Section";
import { H1, P, Tiny } from "../../components/Typography";
import styles from "./index.module.scss";

export const Stages = () => {
  return (
    <Section>
      <H1 className={styles.NavTitle}>Digital impact Stage Navigation</H1>
      <div className={styles.Stages}>
        <Link to="/dusk2dawn" className={cx(styles.Stage, styles.StageClosed)}>
          <img
            className={styles.Logo}
            src="/assets/streamChannelLogos/dusk2dawnproductions.png"
            alt="Dusk2Dawn Stage"
          />
          <Tiny className={cx(styles.Info, styles.InfoClosed)}>
            Featuring a locally curated Vancouver lineup
          </Tiny>
        </Link>
        <Link to="/odessy" className={cx(styles.Stage, styles.StageClosed)}>
          <img
            className={styles.Logo}
            src="/assets/stages/odyssey.png"
            alt="Odessy Stage"
          />
          <Tiny className={cx(styles.Info, styles.InfoClosed)}>
            Fully Digital 3D Stage ft. International Lineup
          </Tiny>
        </Link>
        <Link to="/oasis" className={cx(styles.Stage, styles.StageClosed)}>
          <img
            className={styles.Logo}
            src="/assets/stages/oasis.png"
            alt="Oasis Stage"
          />
          <Tiny className={cx(styles.Info, styles.InfoClosed)}>
            Wolf Pack Creative Graffiti Jam and Live art painting
          </Tiny>
        </Link>
        <Link to="/limitless" className={styles.Stage}>
          <img
            className={cx(styles.Logo, styles.Limitless)}
            src="/assets/stages/limitless-white.png"
            alt="Limitless Stage"
          />
          <Tiny className={styles.Info}>Attend Transformational Workshops</Tiny>
        </Link>
      </div>
    </Section>
  );
};

export const Extras = () => {
  return (
    <Section>
      <H1>Extras</H1>
      <div className={styles.Extras}>
        <ButtonLinkExternal
          to="https://impact-music-festival.myshopify.com/"
          className={styles.Stage}
        >
          <img
            className={styles.Logo}
            src="/assets/stages/market.png"
            alt="Impact Marketplace"
          />
          <Tiny className={styles.Info}>
            Browse a selection of art and goods for sale
          </Tiny>
        </ButtonLinkExternal>
        <ButtonLinkExternal
          to="https://paypal.me/makeimpact/25"
          className={styles.Stage}
        >
          <img
            className={styles.Logo}
            src="/assets/sponsors/sponsor-utherverse.png"
            alt="Utherverse"
          />
          <Tiny className={styles.Info}>
            Gain access to the Utherverse 3D Art Gallery
          </Tiny>
        </ButtonLinkExternal>
        <ButtonLinkExternal
          to="http://impact-partywell.mn.co/"
          className={styles.Stage}
        >
          <img
            className={styles.Logo}
            src="/assets/stages/community.png"
            alt="Impact Community"
          />
          <Tiny className={styles.Info}>
            Connect with your fam and join the impact Tribe
          </Tiny>
        </ButtonLinkExternal>
      </div>
    </Section>
  );
};

export const SpecialMentions = () => {
  return (
    <div>
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
              Check out where your donation goes
            </Tiny>
          </Link>
          <Link to="/sponsors" className={styles.Stage}>
            <img
              className={styles.Logo}
              src="/assets/stages/sponsors.png"
              alt="Sponsors"
            />
            <Tiny className={styles.Info}>
              Get to know our incredible sponsors and partners
            </Tiny>
          </Link>
        </div>
      </Section>
    </div>
  );
};
