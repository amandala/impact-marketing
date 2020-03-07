import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "react-router-scroll-top";
import { withTracker } from "./withTracker";

import styles from "./App.module.scss";

import {
  About,
  Apply,
  Experience,
  GetInvolved,
  Landing,
  Limitless,
  Lineup,
  Media,
  Oasis,
  Odyssey,
  Stages,
  Tickets
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
              <Route path="/about" component={withTracker(About)} />
              <Route path="/apply" component={withTracker(Apply)} />
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
              <Route path="/media" component={withTracker(Media)} />
              <Route path="/oasis" component={withTracker(Oasis)} />
              <Route path="/odyssey" component={withTracker(Odyssey)} />
              <Route path="/stages" component={withTracker(Stages)} />
              <Route path="/tickets" component={withTracker(Tickets)} />
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
