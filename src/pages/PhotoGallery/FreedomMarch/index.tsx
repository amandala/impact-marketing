import React from "react";
import Layout from "../../../components/Layout";
import Section from "../../../components/Section";
import { H1, P } from "../../../components/Typography";
import pictures from "./freedom-march.json";

import styles from "./index.module.scss";

export default () => {
  return (
    <Layout className={styles.Gallery}>
      <Section>
        <H1>Freedom March</H1>
        <P>
          On Juneteenth, 2020, IMPACT teamed up with Black Freedom Society to
          host the Freedom from Hate March. This historic event was to stand up
          against oppression and police brutality.
        </P>
        <P>
          Many speakers took the stage to share their viewpoints and stories.
          The primary goal was education. Being able to give people a different
          perspective so that they can use it to make positive change in the
          world.
        </P>
      </Section>
      {pictures.map(
        (picture: { path: string; alt: string; photographer: string }) => {
          const path = `/assets/gallery/freedom-march/${picture.path}`;
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
