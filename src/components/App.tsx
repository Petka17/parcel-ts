import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Signin from "./Signin";
import About from "./About";
import Users from "./Users";
import Home from "./Home";

class App extends React.Component {
  public render(): React.ReactElement {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
            <Route path="/signin/" component={Signin} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
