import { useRef, useCallback } from "react";
import identity from "lodash/identity";
import isEqual from "lodash/isEqual";
import { createContext } from "use-context-selector";
import { useContextSelector as UseCtxSelector } from "use-context-selector";

const useParse = (Context, select = identity) => {
  /** eslint-ignore */
  const prevRef = useRef();
  return UseCtxSelector(Context, state => {
    const selected = select(state);
    if (!isEqual(prevRef.current, selected)) prevRef.current = selected;
    return prevRef.current;
  });
};

export const useMultipleCtxSelector = ([...Contexts], selector) => {
  const parseCtxs = useCallback(
    // eslint-disable-next-line
    () => Contexts.reduce((prev, curr) => [...prev, useParse(curr)], []),
    [Contexts]
  );
  return useParse(createContext(parseCtxs()), selector);
};

export default (Context, select = identity) => {
  return UseCtxSelector(Context, select);
};
