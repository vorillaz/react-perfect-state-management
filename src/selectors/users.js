import { useCallback } from "react";
import {
  composeSelectors,
  getState,
  getUserAndTodos,
  getActiveTodos
} from "./shared";
import useContextSelector, {
  useMultipleCtxSelector
} from "./useContextSelector";
import ContextTodos from "../providers/todos/context";
import ContextUsers from "../providers/users/context";

export const useWithUsers = (Ctx = ContextUsers) => {
  const selector = useCallback(composeSelectors(getState), []);
  return useContextSelector(Ctx, selector);
};

const getTodosCountByUsersId = id => todos =>
  todos.reduce((prev, curr) => {
    if (curr.userId === id) return prev + 1;
    return prev;
  }, 0);

const getUserById = userId => users => users.find(({ id }) => id === userId);

export const useWithUsersTodos = (id, CtxTodos = ContextTodos) => {
  const selector = useCallback(
    composeSelectors(getState, getActiveTodos, getTodosCountByUsersId(id)),
    [id]
  );
  return useContextSelector(CtxTodos, selector);
};

export const useWithUsersGetById = (userId, CtxUsers = ContextUsers) => {
  const selector = useCallback(
    composeSelectors(getState, getUserById(userId)),
    [userId]
  );
  return useContextSelector(CtxUsers, selector);
};

// Example composition of two provides with a sigle selector;
export const useCompined = (
  CtxUsers = ContextUsers,
  CtxTodos = ContextTodos
) => {
  const selector = useCallback(composeSelectors(getUserAndTodos), []);
  return useMultipleCtxSelector([CtxUsers, CtxTodos], selector);
};
