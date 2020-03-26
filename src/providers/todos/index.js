import React, {useState, useCallback} from 'react';
import getInitalState from './initialState';
import TodosContext from './context';

const StateProvider = ({children}) => {
  const [state, updateState] = useState(getInitalState());
  const update = useCallback(updateState, []);
  return (
    <TodosContext.Provider value={[state, update]}>
      {children}
    </TodosContext.Provider>
  );
};
export default StateProvider;
