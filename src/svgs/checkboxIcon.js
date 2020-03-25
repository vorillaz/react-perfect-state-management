import React from "react";

export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="todo__icon"
    viewBox="0 0 200 25"
  >
    <use className="todo__line" xlinkHref="#todo__line" />
    <use className="todo__box" xlinkHref="#todo__box" />
    <use className="todo__check" xlinkHref="#todo__check" />
    <use className="todo__circle" xlinkHref="#todo__circle" />
  </svg>
);
