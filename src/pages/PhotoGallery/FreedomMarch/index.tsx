import React from "react";
import Layout from "../../../components/Layout";
import Section from "../../../components/Section";
import { H1, P } from "../../../components/Typography";
import pictures from "./freedom-march.json";

import styles from "./index.module.scss";

export default () => {
  return (
    <Layout>
      <Section>
        <H1>Freedom March</H1>
      </Section>
      {pictures.map((picture: { path: string; alt: string }) => {
        const path = `/assets/gallery/freedom-march/${picture.path}`;
        return (
          <Section>
            <img className={styles.Photo} src={path} alt={picture.alt} />
          </Section>
        );
      })}
    </Layout>
  );
};
