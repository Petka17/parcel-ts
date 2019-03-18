import React from "react";
import { Link } from "react-router-dom";
import history from "state/history";
import Cookies from "js-cookie";
import * as user from "state/user";

export default function Header(): React.ReactElement {
  const userContext = user.useContext();

  const signOut = (): void => {
    Cookies.remove("auth_token");
    userContext.clearState();
    history.push("/signin");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <button onClick={signOut}>Sign out</button>
    </nav>
  );
}
