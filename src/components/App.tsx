import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "state/history";

import Signin from "./Signin";
import PrivateApp from "./PrivateApp";

const App = (): React.ReactElement => (
  <Router history={history}>
    <Switch>
      <Route path="/signin" exact component={Signin} />
      <Route path="/" component={PrivateApp} />
    </Switch>
  </Router>
);

export default App;
