import React, {useState, useCallback} from 'react';
import getInitalState from './initialState';
import UsersContext from './context';

const StateProvider = ({children}) => {
  const [state, updateState] = useState(getInitalState());
  const update = useCallback(updateState, []);
  return (
    <UsersContext.Provider value={[state, update]}>
      {children}
    </UsersContext.Provider>
  );
};
export default StateProvider;
