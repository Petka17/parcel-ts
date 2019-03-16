import React from "react";

import history from "state/history";

import * as user from "state/user";

import { getUserForToken } from "api/auth";

export default function PrivateRoute({
  children
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [isLoading, setIsLoading] = React.useState(true);
  const userContext = user.useContext();

  React.useEffect(() => {
    getUserForToken()
      .then(({ companyId, companyName, companyRole, employerId }) => {
        userContext.updateState({
          companyId,
          companyName,
          companyRole,
          employerId
        });
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        history.push("/signin");
      });
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : userContext.employerId ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <div>Redirecting to signin...</div>
  );
}
