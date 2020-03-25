import React from "react";
import User from "./user";
import { useWithUsers } from "../selectors/users";

export default () => {
  const users = useWithUsers();
  return (
    <div className="p-2 mt-0 w-full z-10 top-0 bg-white fixed">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex w-full pt-2 content-center justify-between md:justify-end">
          <div className="flex items-center">
            <div className="px-6 py-4">
              {users.map((u, index) => (
                <User user={u} key={`user-${u.id}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
