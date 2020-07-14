import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import { ButtonLink, ButtonLinkExternal } from "../../components/Button";
import Layout from "../../components/Layout";
import DonateButton from "../../components/DonateButton";
import Section from "../../components/Section";
import DigitalImpactBanner from "../../components/DigitalImpactBanner";
import { H1, P, Tiny } from "../../components/Typography";
import FestivalNav from "../../components/FestivalNav";
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
      <FestivalNav />
      <Section>
        <img
          src="/assets/events/digital-impact/lineup.jpg"
          alt="Lineup Poster"
          className={styles.Poster}
        />
      </Section>
    </Layout>
  );
};

export default Home;
