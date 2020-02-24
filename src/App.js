import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "react-router-scroll-top";

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
              <Route path="/about" component={About} />
              <Route path="/apply" component={Apply} />
              <Route path="/experience" component={Experience} />
              <Route path="/get-involved" component={GetInvolved} />
              <Route path="/limitless" component={Limitless} />
              <Route path="/get-involved" component={GetInvolved} />
              <Route path="/lineup" component={Lineup} />
              <Route path="/media" component={Media} />
              <Route path="/oasis" component={Oasis} />
              <Route path="/odyssey" component={Odyssey} />
              <Route path="/stages" component={Stages} />
              <Route path="/tickets" component={Tickets} />
              <Route path="/" component={Landing} />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
