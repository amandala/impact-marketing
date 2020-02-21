import React from "react";
import cx from "classnames";
import CoreSvg from "./CoreSvg";
import BridgeSvg from "./BridgeSvg";
import GalleySvg from "./GalleySvg";
import Link from "../../components/Link";

import styles from "./index.module.scss";

const Home = () => {
  const [hover, setHover] = React.useState<
    undefined | "core" | "bridge" | "galley"
  >(undefined);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Layout}>
        <img alt="Intersect Logo" className={styles.Mark} src="mark.png" />
        <img
          alt="Intersect Wordmark"
          className={styles.WordMark}
          src="type.png"
        />
        <div className={styles.DetailsWrapper}>
          <h3 className={styles.Subheading}>Art and Music Festival</h3>
          <h2 className={styles.Details}>August 21 - 23, 2020</h2>
          <h2 className={styles.Details}>High Prairie, Alberta</h2>
        </div>
        <div className={styles.About}>
          <p>
            Welcome to Northern Alberta’s new, premier art and music festival
            hosted by Dropaganda Productions. Brought together by industry
            professionals from all over Western Canada, Inter.Sect seeks to
            create a canvas for music festival lovers of all demographics to
            paint an experience that represents them. Bringing together local
            favorites as well as internationally- acclaimed Canadian Folk,
            Bluegrass and a broad spectrum of Electronic music, Inter.Sect
            promises a little something for everyone.
          </p>
          <p>
            Our family friendly event will be host to Workshops, an Art Gallery,
            Live Art Installments, Kids Areas, Artisan Vendors, and a locally
            curated Farmers Market where attendees will be able to support local
            Alberta farmers while enjoying fresh products on site!
          </p>
          <p>
            Family camping, full service RV camping, and day passes will be
            available for the event.
          </p>
          {/* <div className={styles.ButtonWrapper}>
          <a
            className={styles.Button}
            target="_blank"
            href="https://dropaganda.tickit.ca/"
          >
            Buy your tickets
          </a>
        </div> */}
        </div>
        <h3 className={cx(styles.SubheadingCentered, styles.StayTuned)}>
          Stay Tuned!
        </h3>
        <h3 className={styles.SubheadingCentered}>
          Lineup releases coming soon
        </h3>
        <div className={styles.Stages}>
          <div
            onMouseEnter={() => setHover("core")}
            onMouseLeave={() => setHover(undefined)}
          >
            <div
              className={cx(styles.Stage, {
                [styles.StageGlow]: hover === "core",
                [styles.StageFade]: hover === "galley" || hover === "bridge"
              })}
            >
              <CoreSvg glow={hover} />
              <p className={styles.Text}>
                {hover === "core"
                  ? "Lineups released soon!"
                  : "Heavy Electronic"}
              </p>
              <p>
                Come and power up at The Core with Modern Electronic and Bass
                Music - Dubstep, House, Drum’n’Bass, Electro, Psytrance and
                anything powerful enough to shock your system into full dance
                mode!
              </p>
            </div>
          </div>
          <div
            onMouseEnter={() => setHover("bridge")}
            onMouseLeave={() => setHover(undefined)}
          >
            <div
              className={cx(styles.Stage, {
                [styles.StageGlow]: hover === "bridge",
                [styles.StageFade]: hover === "core" || hover === "galley"
              })}
            >
              <BridgeSvg glow={hover} />
              <p className={styles.Text}>
                {hover === "bridge" ? "Lineups released soon!" : "Genre Fusion"}
              </p>

              <p>
                This stage is all about musical fusion and “bridging the gap”
                between genres. Expect to see DJ equipment and live instruments
                playing together in perfect harmony. This is also where those
                magical sunrise sets take place.
              </p>
            </div>
          </div>
          <div
            onMouseEnter={() => setHover("galley")}
            onMouseLeave={() => setHover(undefined)}
          >
            <div
              className={cx(styles.Stage, {
                [styles.StageGlow]: hover === "galley",
                [styles.StageFade]: hover === "core" || hover === "bridge"
              })}
            >
              <GalleySvg glow={hover} />
              <p className={styles.Text}>
                {hover === "galley"
                  ? "Lineups released soon!"
                  : "Folk & Country Bands"}
              </p>
              <p>
                Located near the Market and Food Vendors, The Galley stage is a
                great place to set up your chair and enjoy all the Folk,
                Country, Funk, Bluegrass, Blues and Rock acts that Inter.Sect
                has to offer.{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className={cx(styles.SubheadingCentered, styles.GetInvolved)}>
            Would YOU like to get involved? We are looking for Volunteers/Crew
            members, Artists and Vendors.
          </h3>
          <div className={styles.HelpUs}>
            <Link href="mailto:info@intersectamf.com">
              Send us an email at{" "}
              <span className={styles.SmallBreak}>info@intersectamf.com</span>
            </Link>
          </div>
        </div>
      </div>
      <img
        className={styles.Earth}
        src="./planet.png"
        alt="Picture of an earth with a spaceship trail"
      />
    </div>
  );
};

export default Home;
