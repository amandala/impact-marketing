import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { H1, P } from "../../components/Typography";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <Layout>
      <Section>
        <H1>Welcome to Digital impact</H1>
        <P>
          We've curated a tonS of awesome digital experiences for you to
          explore. Click around the navigation links below to visit the
          different areas of our digital festival.
        </P>
      </Section>
    </Layout>
  );
};

export default Home;
