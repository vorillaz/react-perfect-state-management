const noop = (...args) => args;

export const composeSelectors = (...fns) => (state = {}) =>
  fns.reduce((prev, curr = noop) => {
    return curr(prev);
  }, state);

export const getState = ([state]) => state;
export const getUpdate = ([state, update]) => update;

export const getActiveTodos = todos =>
  todos.filter(({ completed }) => !completed);

export const getUserAndTodos = ([usersState, todosState]) => [
  getState(usersState),
  getState(todosState)
];
