import React, { useState } from "react";
import getInitalState from "./initialState";
import TodosContext from "./context";

const StateProvider = ({ children }) => {
  const [state, updateState] = useState(getInitalState());
  return (
    <TodosContext.Provider value={[state, updateState]}>
      {children}
    </TodosContext.Provider>
  );
};
export default StateProvider;
