import React from "react";

import { DeepReadOnly } from "state/common";

/**
 * State
 */
type State = DeepReadOnly<{
  externalId?: string;
  companyName?: string;
  companyId?: number;
  companyRole?: string;
  employerId?: number;
}>;

/**
 * Context for React Component
 */

interface Context {
  externalId?: string;
  companyName?: string;
  companyId?: number;
  companyRole?: string;
  employerId?: number;
  updateState: (state: State) => void;
  clearState: () => void;
}

const ContextFactory = React.createContext<Context>({
  updateState: () => {},
  clearState: () => {}
});

/**
 * Provider
 */
export function Provider({
  children
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [state, setState] = React.useState<State>({});

  const updateState = (newState: State): void => {
    setState({
      ...state,
      ...newState
    });
  };

  const clearState = (): void => {
    setState({});
  };

  const context: Context = {
    ...state,
    updateState,
    clearState
  };

  return (
    <ContextFactory.Provider value={context}>
      {children}
    </ContextFactory.Provider>
  );
}

export const useContext = (): Context => React.useContext(ContextFactory);
