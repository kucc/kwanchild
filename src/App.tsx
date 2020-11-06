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

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/problem1" exact component={Problem1} />
        <Route path="/problem2" exact component={Problem2} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
