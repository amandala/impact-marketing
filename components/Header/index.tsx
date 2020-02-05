import React from "react";

import styles from "./index.module.scss";

export default () => {
  return (
    <nav className={styles.Nav}>
      <ul>
        <li>Home</li>
        <li>Lineup</li>
        <li>About</li>
        <li>Tickets</li>
        <li>Media</li>
        <li>Get Involved</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};
