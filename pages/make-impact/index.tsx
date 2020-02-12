import React from "react";
import Head from "../../components/head";
import cx from "classnames";
import { ReactTypeformEmbed } from "react-typeform-embed";

import styles from "./index.module.scss";

export default () => {
  return (
    <div>
      <Head title="Get Involved | Impact Music Festival" />
      <ReactTypeformEmbed url="https://dasrecord.typeform.com/to/elGZqC" />
    </div>
  );
};
