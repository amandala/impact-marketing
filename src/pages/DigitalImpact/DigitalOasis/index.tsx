import React from "react";
import Section from "../../../components/Section";
import Layout from "../../../components/Layout";
import { H1, P } from "../../../components/Typography";
import StreamPage from "../../../components/StreamPage";
import styles from "./index.module.scss";

const Sponsor = ({
  logo,
  alt,
  title,
  children,
}: {
  logo: string;
  alt: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.Sponsor}>
      <img className={styles.SponsorLogo} src={logo} alt={alt} />
      <div className={styles.SponsorInfo}>
        <H1>{title}</H1>
        {children}
      </div>
    </div>
  );
};

const DigitalOasis = () => {
  return (
    <StreamPage
      eventName="Digital Impact"
      eventLogo="/assets/primary/digital-impact.png"
      channel="navkhiljie"
      channelLogo="/assets/stages/oasis.png"
    >
      <Layout black>
        <Section>
          <img
            className={styles.Poster}
            src="/assets/events/digital-impact/OasisStageSpotlight-min.png"
            alt="Oasis Stage Lineup"
          />
        </Section>
        <Section>
          <H1 impact className={styles.Title}>
            Special Thanks to our Oasis Stage Sponsors and Partners
          </H1>
          <Sponsor
            logo="/assets/sponsors/sponsor-wolfpackcreative.png"
            alt="Wolf Pack Creative Logo"
            title="Wolf Pack Creative"
          >
            <P>
              Wolf Pack Creative is a collective of artists, designers,
              developers, makers, and musicians utilizing their collective
              talents to create unforgettable experiences ♡
            </P>
          </Sponsor>
          <Sponsor
            logo="/assets/sponsors/sponsor-nowayjose.png"
            alt="No Way Jose Logo"
            title="No Way Jose Productions"
          >
            <P>
              No way Jose Productions is a film production company that
              specializes in providing media for luxury lifestyle brands. They
              have generously donated their video production efforts to bring
              the Wolf Pack Creative Live Art Spotlight Stage to your screens.
            </P>
          </Sponsor>
          <Sponsor
            logo="/assets/sponsors/sponsor-realtalkswithnav.png"
            alt="Real talks with Nav Logo"
            title="Real Talks with Nav"
          >
            <P>
              Real Talks with Nav is inspired by the stories of everyday people,
              the unsung heroes of our world. Conceived during a tumultuous time
              globally Real Talks with Nav hopes to instill a ray of light and
              hope in the lives of its audience.
            </P>
          </Sponsor>
          <Sponsor
            logo="/assets/sponsors/sponsor-calgarycentralsportsplex.png"
            alt="Calgary Central Sportsplex Logo"
            title="Calgary Central Sportsplex"
          >
            <P>
              The first major project for the CanSO Foundation, the CCS is home
              to the most convenient and accessible sports facility in Calgary's
              NE. With indoor soccer, basketball, baseball, MMA, floor hockey,
              Parkour, and much more, it's a great place for your league, team,
              or group to call home.
            </P>
            <P>
              The CSS has generously donated a 20,000 sqft building for artistic
              expression at the Calgary Impact Graffiti Jam Saturday July 18 &
              19.
            </P>
          </Sponsor>
          <Sponsor
            logo="/assets/sponsors/sponsor-canso.png"
            alt="The Canadian Sports Opportunities Foundation Logo"
            title="The Canadian Sports Opportunities Foundation"
          >
            <P>
              The CanSO Foundation exists to provide access to sports
              opportunities for people of all ages, income levels, and
              abilities. They believe in creating healthy opportunities for
              everyone in our communities. Whether it means helping members of a
              low income family register to take part in the sport of their
              choice, working with seniors organizations to limit social
              isolation by providing healthy activities, or helping a promising
              athlete reach their full potential, we know that strong
              communities start with healthy, active members.
            </P>
          </Sponsor>
        </Section>
      </Layout>
    </StreamPage>
  );
};

export default DigitalOasis;
