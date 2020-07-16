import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "react-router-scroll-top";
import { withTracker } from "./withTracker";

import styles from "./App.module.scss";

import {
  Art,
  About,
  Apply,
  Causes,
  Experience,
  GetInvolved,
  Home,
  Landing,
  Limitless,
  Lineup,
  Media,
  MuralJam,
  Marketplace,
  Oasis,
  Odyssey,
  Stages,
  Sponsors,
  DigitalOasis,
  DigitalOdessy,
  DigitalLimitless,
  Dusk2Dawn,
} from "./pages";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <ScrollToTop>
          <Nav />
          <div className={styles.Main}>
            <Switch>
              <Route path="/home" component={withTracker(Home)} />
              <Route path="/about" component={withTracker(About)} />
              <Route path="/apply" component={withTracker(Apply)} />
              <Route path="/oasis" component={withTracker(DigitalOasis)} />
              <Route path="/odyssey" component={withTracker(DigitalOdessy)} />
              <Route
                path="/limitless"
                component={withTracker(DigitalLimitless)}
              />
              <Route path="/dusk2dawn" component={withTracker(Dusk2Dawn)} />
              <Route path="/art" component={withTracker(Art)} />
              <Route path="/causes" component={withTracker(Causes)} />
              <Route path="/experience" component={withTracker(Experience)} />
              <Route
                path="/get-involved"
                component={withTracker(GetInvolved)}
              />
              <Route path="/lineup" component={withTracker(Lineup)} />
              <Route path="/liveart" component={withTracker(MuralJam)} />
              <Route path="/marketplace" component={withTracker(Marketplace)} />
              <Route path="/media" component={withTracker(Media)} />
              <Route path="/sponsors" component={withTracker(Sponsors)} />
              <Route
                path="stages/limitless"
                component={withTracker(Limitless)}
              />
              <Route path="stages/oasis" component={withTracker(Oasis)} />
              <Route path="stages/odyssey" component={withTracker(Odyssey)} />
              <Route
                path="/meetandgreet"
                component={() => {
                  window.location.href =
                    "https://calendar.google.com/calendar/selfsched?sstoken=UUwtekRJM3JMTjFNfGRlZmF1bHR8YjliNGIzYWY2OTY3MGZlNDJjYzAzMTkzMGNjZjlkNGE";
                  return (
                    <div
                      style={{
                        minHeight: "100vh",
                      }}
                    />
                  );
                }}
              />
              <Route path="/" component={withTracker(Landing)} />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
