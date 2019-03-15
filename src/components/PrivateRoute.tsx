import React from "react";

import history from "state/history";
import * as auth from "state/auth";

import { getUserForToken } from "api/auth";

function AuthChecker({
  children
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const { phone } = auth.useContext();
  const [isLoading, setIsLoading] = React.useState(phone === "");
  const [externalId, setExternalId] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (phone === "") return;

    getUserForToken()
      .then((externalId: string) => {
        setIsLoading(false);
        setExternalId(externalId);
      })
      .catch(() => {
        setIsLoading(false);
        history.push("/signin");
      });
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : externalId === null ? (
    <div>Redirecting to signin...</div>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
}

const PrivateRoute = ({ children }): React.ReactElement => (
  <auth.Provider>
    <AuthChecker>{children}</AuthChecker>
  </auth.Provider>
);

export default PrivateRoute;
