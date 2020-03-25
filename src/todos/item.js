import React, { useCallback } from "react";
import CheckboxIcon from "../svgs/checkboxIcon";
import { useWithSetCompleteTodo } from "../selectors/todos";
import { useWithUsersGetById } from "../selectors/users";

export default ({ todo, index }) => {
  const { title, completed, userId } = todo;
  const updateCompleted = useWithSetCompleteTodo();
  const user = useWithUsersGetById(userId);
  const onChangeUpdate = e => {
    updateCompleted(index, e.target.checked);
  };
  const onChange = useCallback(onChangeUpdate);
  return (
    <label className="todo">
      <input
        className="todo__state"
        checked={completed}
        onChange={onChange}
        type="checkbox"
      />
      <CheckboxIcon />
      <div className="todo__text text-xl font-medium flex items-center">
        {title}
        {user && (
          <span className="inline-block bg-gray-200 rounded-full ml-3 px-4 py-1 text-sm font-normal text-gray-700 mr-2">
            {user.name}
          </span>
        )}
      </div>
    </label>
  );
};
