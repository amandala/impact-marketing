import React from "react";
import Head from "../../components/head";
import Link from "../../components/Link";
import { H1, H3, H4, H5, P } from "../../components/Typography";

const positions = require("./data.json");

import styles from "./index.module.scss";

export default () => {
  return (
    <div>
      <Head title="Get Involved | Impact Music Festival" />
      <div className={styles.PhotoDiv}>
        <div className={styles.Wrapper}>
          <div className={styles.Details}>
            <div className={styles.MakeImpact}>
              <div className={styles.LogoWrapper}>
                <img
                  className={styles.Logo}
                  src="/impactlogo.svg"
                  alt="Impact Logo"
                />
              </div>
              <div>
                <H1 impact>Make Impact</H1>
                <P className={styles.P}>
                  Do you want your IMPACT to go even further than our regular
                  attendees?
                </P>
                <P className={styles.P}>
                  Are you longing for a sense of purpose and want to make the
                  world a better place?
                </P>
                <P className={styles.P}>
                  Sign up to volunteer at IMPACT and help us build something
                  amazing.
                </P>
                <Link href="/apply">Join our team! </Link>
              </div>
            </div>
          </div>
          <div className={styles.Content}>
            <div className={styles.Positions}>
              <H1>Positions</H1>
              <div className={styles.PositionList}>
                {positions.map(position => {
                  console.log(position);
                  return (
                    <div className={styles.Position}>
                      <div className={styles.PositionContent}>
                        <span className={styles.PositionHeading}>
                          <H3 className={styles.PositionTitle}>
                            {position.title}
                          </H3>
                          <H5>{position.availability}</H5>
                        </span>
                        <H4 className={styles.PositionDescription}>
                          {position.description}
                        </H4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.Deposit}>
              <H1>Deposits</H1>
              <P>
                In order to add to the overall volunteer experience, we will be
                implementing a tiered volunteer payment system. This will allow
                for you to be fed for each shift as well as an exclusive
                volunteer merch pack! This will also include your donation to
                the charity causes.
              </P>
              <H3>Volunteer Deposit $200</H3>
              <H4>Depending on your shifts we will refund X amount.</H4>
              <H5>
                2x 6hr Shifts = $100 return ($50 to charity - $50 to Merch
                Pack/Food)
              </H5>
              <H5>
                4x 6hr Shifts = $125 return ($50 to charity - $25 to Merch
                Pack/Food)
              </H5>
              <H5>
                6x 6hr Shifts = $150 return ($50 to Charity - Free Merch
                pack/Food)
              </H5>
              <H3 className={styles.FoodHeading}>Food Pack $100</H3>
              <H4>
                Purchase a food pack for $100 to be fed 3 meals a day for the
                whole event! (Showtime Only) - Vendor charity rates apply.
              </H4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
