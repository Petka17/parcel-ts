import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "state/history";

import * as user from "state/user";

import Signin from "./Signin";
import PrivateApp from "./PrivateApp";

const App = (): React.ReactElement => (
  <user.Provider>
    <TestComp />
    <Router history={history}>
      <Switch>
        <Route path="/signin" exact component={Signin} />
        <Route path="/" component={PrivateApp} />
      </Switch>
    </Router>
  </user.Provider>
);

const TestComp = (): React.ReactElement => {
  const userContext = user.useContext();

  return <div>{JSON.stringify(userContext, null, 2)}</div>;
};

export default App;
