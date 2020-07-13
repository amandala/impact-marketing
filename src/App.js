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
  //BestOf2019,
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
  Stream,
  GraffitiInfo,
  FreedomMarch,
  Sponsors,
} from "./pages";

import { Dusk2DawnProductions } from "./pages/streams";

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
              <Route path="/apply" component={withTracker(Apply)} />
              <Route path="/art" component={withTracker(Art)} />
              {/* <Route
                path="/gallery/best-of-2019"
                component={withTracker(BestOf2019)}
              /> */}
              <Route path="/causes" component={withTracker(Causes)} />
              <Route path="/experience" component={withTracker(Experience)} />
              <Route
                path="/get-involved"
                component={withTracker(GetInvolved)}
              />
              <Route path="/limitless" component={withTracker(Limitless)} />
              <Route
                path="/get-involved"
                component={withTracker(GetInvolved)}
              />
              <Route path="/lineup" component={withTracker(Lineup)} />
              {/* <Route
                path="/gallery/freedom-march"
                component={withTracker(FreedomMarch)}
              /> */}
              <Route path="/sponsors" component={withTracker(Sponsors)} />
              <Route path="/graff-info" component={withTracker(GraffitiInfo)} />
              <Route path="/marketplace" component={withTracker(Marketplace)} />
              <Route path="/media" component={withTracker(Media)} />
              <Route path="/liveart" component={withTracker(MuralJam)} />
              <Route path="/oasis" component={withTracker(Oasis)} />
              <Route path="/odyssey" component={withTracker(Odyssey)} />
              <Route path="/stages" component={withTracker(Stages)} />
              <Route path="/stream" component={withTracker(Stream)} />
              <Route path="/about" component={withTracker(About)} />
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
