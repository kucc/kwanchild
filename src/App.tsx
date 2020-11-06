import React, { lazy, Suspense } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

const Main = lazy(() => import("./view/main"));

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
