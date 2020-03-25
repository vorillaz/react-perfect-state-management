import React from "react";
import { useWithUsersTodos } from "../selectors/users";

export default ({ user }) => {
  const { id, name, avatar } = user;
  const count = useWithUsersTodos(id);
  return (
    <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
      <div className="flex items-center">
        <img
          alt={`user ${name}`}
          className="w-8 h-8 rounded-full mr-2"
          src={avatar}
        />
        <span className="text-sm">
          {name} {count}
        </span>
      </div>
    </div>
  );
};
