import React from "react";
import Head from "../../components/head";
import { ReactTypeformEmbed } from "react-typeform-embed";
import Layout from "../../components/Layout";

import styles from "./index.module.scss";

export default () => {
  return (
    <Layout>
      <Head title="Get Involved | Impact Music Festival" />
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
