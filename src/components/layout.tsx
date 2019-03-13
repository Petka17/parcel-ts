import React from "react";
import * as auth from "state/auth";

function layout(
  Component: typeof React.Component | React.FC
): () => React.ReactElement {
  const Layout = (): React.ReactElement => (
    <auth.Provider>
      <Component />
    </auth.Provider>
  );

  return Layout;
}

export default layout;
