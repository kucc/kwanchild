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
import Problem4 from "./view/problem4";
import Rank from "./view/rank";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/problem1" exact component={Problem1} />
        <Route path="/problem2" exact component={Problem2} />
        <Route path="/problem3" exact component={Problem3} />
        <Route path="/problem4" exact component={Problem4} />
        <Route path="/rank" exact component={Rank} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
