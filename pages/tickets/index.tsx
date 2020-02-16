import React from "react";
import Head from "../../components/head";
import { H1, H2, P } from "../../components/Typography";
import Section from "../../components/Section";
import PhotoDiv from "../../components/PhotoDiv";
import Ticket from "./Ticket";

import styles from "./index.module.scss";

export default () => {
  return (
    <div>
      <Head title="Tickets | Impact Music Festival" />
      <PhotoDiv className={styles.MainStage}>
        <div className={styles.Wrapper}>
          <Section className={styles.Tickets}>
            <div className={styles.TicketSection}>
              <H1>Tickets</H1>
              <Ticket
                name="General Admission Early Bird"
                price={150}
                details={[
                  "Limited number available",
                  "$50 charitable donation"
                ]}
              />
              <Ticket
                name="General Admission"
                price={200}
                details={[
                  "Friday & Saturday access",
                  "$50 charitable donation"
                ]}
              />
              <Ticket
                name="VIP - Very Important Philanthropist"
                price={400}
                details={[
                  "Early entry included",
                  "$100 charitable donation",
                  "Free merchandise",
                  "Camp with your car",
                  "Exclusive campground",
                  "Social shout out"
                ]}
              />
            </div>
            <div className={styles.TicketSection}>
              <H1>Add-ons</H1>
              <Ticket
                name="Early Entry"
                price={50}
                details={[
                  "Thursday access",
                  "Beat the lineup & get the best camp"
                ]}
              />
              <Ticket
                name="Parking pass"
                price={25}
                details={[
                  "We encourage everyone to carpool!",
                  "Let's work together to lower our carbon footprint"
                ]}
              />
            </div>
          </Section>
        </div>
      </PhotoDiv>
    </div>
  );
};
