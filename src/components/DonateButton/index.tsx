import React from "react";
import Section from "../../components/Section";
import { ButtonLinkExternal, ButtonLink } from "../../components/Button";

import styles from "./index.module.scss";

const DonateButton = ({ href }: { href: string }) => {
  return (
    <Section className={styles.DonateWrapper}>
      {href === "/causes" ? (
        <ButtonLink className={styles.Donate} to={href}>
          Donate
        </ButtonLink>
      ) : (
        <ButtonLinkExternal className={styles.Donate} to={href}>
          Donate
        </ButtonLinkExternal>
      )}
    </Section>
  );
};

export default DonateButton;
