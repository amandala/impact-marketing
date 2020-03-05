import React from "react";

import { H1 } from "../../components/Typography";
import Section from "../../components/Section";
import PhotoDiv from "../../components/PhotoDiv";
import Ticket from "./Ticket";
import TicketLink from "../../components/TicketLink";
import PadFooterWrapper from "../../components/PadFooterWrapper";

import styles from "./index.module.scss";

export default () => {
  return (
    <div>
      <PadFooterWrapper>
        <PhotoDiv className={styles.MainStage}>
          <div className={styles.Wrapper}>
            <TicketLink />
            <div className={styles.BoxOffice}>
              <Section className={styles.Tickets}>
                <H1>Tickets</H1>
                <Ticket
                  name="General Admission"
                  tiers={[
                    { label: "Early Birds", price: 149 },
                    { label: "Tier 1", price: 199 },
                    { label: "Tier 2", price: 225 },
                    { label: "Tier 3", price: 249 }
                  ]}
                  details={[
                    "Limited number available",
                    "$50 charitable donation"
                  ]}
                />

                <Ticket
                  name="Very Important Philanthropist"
                  tiers={[{ label: "vip", price: 400 }]}
                  details={[
                    "Early entry included",
                    "$100 charitable donation",
                    "Free merchandise",
                    "Camp with your car",
                    "Exclusive campground",
                    "Social shout out"
                  ]}
                />
              </Section>
              <Section className={styles.Tickets}>
                <H1>Add-ons</H1>
                <Ticket
                  name="Early Entry"
                  tiers={[{ label: "", price: 50 }]}
                  details={[
                    "Thursday access",
                    "Beat the lineup & get the best camp"
                  ]}
                />
                <Ticket
                  name="Parking pass"
                  tiers={[{ label: "", price: 30 }]}
                  details={[
                    "Park in the general parking lot - no car camping",
                    "We encourage everyone to carpool!",
                    "Let's work together to lower our carbon footprint"
                  ]}
                />
              </Section>
            </div>
          </div>
        </PhotoDiv>
      </PadFooterWrapper>
    </div>
  );
};
