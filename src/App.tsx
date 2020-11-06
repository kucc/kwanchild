import React, { lazy, Suspense } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import Main from "./view/main";
import Problem1 from "./view/problem1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/problem1" exact component={Problem1} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
