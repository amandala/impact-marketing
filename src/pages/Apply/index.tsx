import React from "react";

import { ReactTypeformEmbed } from "react-typeform-embed";
import Layout from "../../components/Layout";

import styles from "./index.module.scss";

export default () => {
  return (
    <Layout>
      <div className={styles.Wrapper}>
        <ReactTypeformEmbed
          style={{
            "max-width": "900px",
            "margin-left": "auto",
            "margin-right": "auto",
            left: 0,
            right: 0
          }}
          url="https://dasrecord.typeform.com/to/elGZqC"
        />
      </div>
    </Layout>
  );
};
