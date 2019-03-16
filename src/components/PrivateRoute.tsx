import React from "react";

import history from "state/history";

import { getUserForToken } from "api/auth";

export default function PrivateRoute({
  children
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [isLoading, setIsLoading] = React.useState(true);
  const [employerId, setExternalId] = React.useState<number | null>(null);

  React.useEffect(() => {
    getUserForToken()
      .then(({ employerId }) => {
        setIsLoading(false);
        setExternalId(employerId);
      })
      .catch(() => {
        setIsLoading(false);
        history.push("/signin");
      });
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : employerId === null ? (
    <div>Redirecting to signin...</div>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
}
