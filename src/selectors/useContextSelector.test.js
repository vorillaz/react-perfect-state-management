import React, {useState, memo} from 'react';
import {render, fireEvent} from '@testing-library/react';
import useContextSelector from './useContextSelector';
import {
  useContextSelector as useContextSelectorExternal,
  createContext
} from 'use-context-selector';

const Context = createContext();

const Component = memo(({setState, onRender, useSelector}) => {
  const state = useSelector(Context, ({title}) => ({title}));
  onRender();
  return (
    <button
      data-testid="toggle"
      onClick={() => setState(s => ({...s, counter: s.counter + 1}))}>
      {state.title}
    </button>
  );
});

const Provider = ({onRender, useSelector}) => {
  const [state, setState] = useState({title: 'myTitle', counter: 0});
  return (
    <Context.Provider value={state}>
      <Component
        setState={setState}
        onRender={onRender}
        useSelector={useSelector}
      />
    </Context.Provider>
  );
};

it('rerenders upon change', () => {
  const onRender = jest.fn();
  const {getByTestId} = render(
    <Provider onRender={onRender} useSelector={useContextSelectorExternal} />
  );
  expect(onRender).toBeCalledTimes(1);
  fireEvent.click(getByTestId('toggle'));
  expect(onRender).toBeCalledTimes(2);
  fireEvent.click(getByTestId('toggle'));
  expect(onRender).toBeCalledTimes(3);
});

it("doesn't rerender upon change", async () => {
  const onRender = jest.fn();
  const {getByTestId} = await render(
    <Provider onRender={onRender} useSelector={useContextSelector} />
  );
  expect(onRender).toBeCalledTimes(1);
  fireEvent.click(getByTestId('toggle'));
  expect(onRender).toBeCalledTimes(1);
  fireEvent.click(getByTestId('toggle'));
  expect(onRender).toBeCalledTimes(1);
});
