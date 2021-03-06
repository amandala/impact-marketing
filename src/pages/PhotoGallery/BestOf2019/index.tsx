import React from "react";
import Layout from "../../../components/Layout";
import Section from "../../../components/Section";
import { H1 } from "../../../components/Typography";
import pictures from "./gallery.json";

import styles from "./index.module.scss";

export default () => {
  return (
    <Layout className={styles.Gallery}>
      <Section>
        <H1>Best of 2019</H1>
      </Section>
      {pictures.map(
        (picture: { path: string; alt: string; photographer: string }) => {
          const path = `/assets/gallery/best-of-2019/${picture.path}`;
          return (
            <Section className={styles.PhotoWrapper}>
              <a className={styles.Photographer} href={picture.photographer}>
                <img className={styles.Photo} src={path} alt={picture.alt} />
              </a>
            </Section>
          );
        }
      )}
    </Layout>
  );
};
