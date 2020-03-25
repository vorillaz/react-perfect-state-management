import React from "react";
import { useWithTodos } from "../selectors/todos";
import Item from "./item";
import AddNew from "./add";

export default () => {
  const todos = useWithTodos();
  return (
    <div className="flex items-center justify-center h-screen mt-10">
      <div className="">
        <div className="w-full max-w-lg rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            {todos.map((todo, index) => (
              <Item todo={todo} index={index} key={`todo-${index}`} />
            ))}
          </div>
        </div>
        <AddNew />
      </div>
    </div>
  );
};
