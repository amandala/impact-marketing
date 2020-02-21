import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import styles from "./App.module.scss";

import {
  About,
  Apply,
  Experience,
  GetInvolved,
  Home,
  Limitless,
  Lineup,
  Media,
  Oasis,
  Odessey,
  Stages,
  Tickets
} from "./pages";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <div className={styles.Main}>
          <Nav />
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
            <Route path="/odessy" component={Odessey} />
            <Route path="/stages" component={Stages} />
            <Route path="/tickets" component={Tickets} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
