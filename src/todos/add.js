import React, { useCallback, useState } from "react";
import { useWithAddTodos } from "../selectors/todos";
import { useWithUsers } from "../selectors/users";

export default () => {
  const [newItem, onNewItemUpdate] = useState("");
  const [userId, onSelectUserId] = useState(-1);
  const add = useWithAddTodos();
  const users = useWithUsers();

  const update = useCallback(e => {
    onNewItemUpdate(e.target.value);
  }, []);

  const onAdd = useCallback(
    e => {
      e.preventDefault();
      add({ title: newItem, userId, completed: false });
      onNewItemUpdate("");
      onSelectUserId(-1);
    },
    [add, newItem, userId]
  );
  const onUserPick = useCallback(e => {
    e.preventDefault();
    onSelectUserId(Number(e.target.value));
  }, []);

  return (
    <form className="w-full max-w-lg my-4" onSubmit={onAdd}>
      <div className="bg-white shadow-md rounded p-4 flex flex-wrap">
        <div className="w-full md:w mb-3 ">
          <input
            placeholder="✍ Add new todo "
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={newItem}
            onChange={update}
          />
        </div>
        <div className="w-full md:w-3/4 p-1 pl-0 pb-0 md:w">
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={userId}
              onChange={onUserPick}
            >
              <option value="-1">Pick a user</option>
              {users.map(u => (
                <option key={`option-${u.id}`} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-1 pb-0 md:w pr-0">
          <button
            className="w-full bg-green-500 hover:bg-green-900 text-white py-3 px-4 rounded  leading-tight"
            type="submit"
            disabled={newItem.trim() === ""}
          >
            Add new
          </button>
        </div>
      </div>
    </form>
  );
};
