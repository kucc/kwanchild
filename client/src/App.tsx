import React, { lazy, Suspense } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import Main from "./view/main";
import Problem1 from "./view/problem1";
import Problem2 from "./view/problem2";
import Problem3 from "./view/problem3";
import Problem5 from "./view/problem5";
import Rank from "./view/rank";
import PAGE_URL from "./page-config";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path={PAGE_URL.prob1} exact component={Problem1} />
        <Route path={PAGE_URL.prob2} exact component={Problem2} />
        <Route path={PAGE_URL.prob3} exact component={Problem3} />
        <Route path={PAGE_URL.prob5} exact component={Problem5} />
        <Route path="/rank" exact component={Rank} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
