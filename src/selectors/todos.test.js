import React, {useState, useCallback} from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {createContext} from 'use-context-selector';
import {useWithTodos, useWithAddTodos, useWithSetCompleteTodo} from './todos';

const initialstate = [
  {
    title: 'Check the plants',
    completed: true,
    userId: 2
  },
  {
    title: 'Go to the mall',
    completed: false,
    userId: 4
  },
  {
    title: 'Write a song',
    completed: false,
    userId: 1
  }
];

it('useWithTodos renders', () => {
  const Ctx = createContext([initialstate]);
  const {result} = renderHook(() => useWithTodos(Ctx));
  expect(result.current).toMatchSnapshot();
});

it('useWithAddTodos renders', () => {
  const update = jest.fn();
  const Ctx = createContext([initialstate, update]);
  renderHook(() => {
    const u = useWithAddTodos(Ctx);
    u('new todo');
  });
  expect(update).toHaveBeenCalled();
});

it('useWithSetCompleteTodo renders', () => {
  const update = jest.fn();
  const Ctx = createContext([initialstate, update]);
  renderHook(() => {
    const u = useWithSetCompleteTodo(Ctx);
    u('new todo');
  });
  expect(update).toHaveBeenCalled();
});
