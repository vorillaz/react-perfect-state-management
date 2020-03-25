import React, { useState } from "react";
import getInitalState from "./initialState";
import UsersContext from "./context";

const StateProvider = ({ children }) => {
  const [state, updateState] = useState(getInitalState());
  return (
    <UsersContext.Provider value={[state, updateState]}>
      {children}
    </UsersContext.Provider>
  );
};
export default StateProvider;
