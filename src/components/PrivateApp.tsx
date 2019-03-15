import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Header from "./Header";
import About from "./About";
import Users from "./Users";
import Home from "./Home";

const PrivateApp = (): React.ReactElement => (
  <PrivateRoute>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </Switch>
  </PrivateRoute>
);

export default PrivateApp;
