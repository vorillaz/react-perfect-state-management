import { useCallback } from "react";
import { composeSelectors, getState, getUpdate } from "./shared";
import useContextSelector from "./useContextSelector";
import ContextTodos from "../providers/todos/context";

const getTodos = (todos = []) => todos;

export const useWithTodos = (Ctx = ContextTodos) => {
  const selector = useCallback(composeSelectors(getState, getTodos), []);
  return useContextSelector(Ctx, selector);
};

export const useWithAddTodos = (Ctx = ContextTodos) => {
  const selector = useCallback(composeSelectors(getUpdate), []);
  const update = useContextSelector(Ctx, selector);
  return todo => update(todos => [...todos, todo]);
};

export const useWithSetCompleteTodo = (Ctx = ContextTodos) => {
  const selector = useCallback(composeSelectors(getUpdate), []);
  const update = useContextSelector(Ctx, selector);
  return (indexToUpdate, completed) =>
    update(todos => {
      return [
        ...todos.slice(0, indexToUpdate),
        {
          ...todos[indexToUpdate],
          completed
        },
        ...todos.slice(indexToUpdate + 1)
      ];
    });
};
