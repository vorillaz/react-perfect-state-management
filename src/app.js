import React from "react";
import "./styles.css";

import Bg from "./svgs/bg";
import Todos from "./todos";
import Users from "./users";
import TodosProvider from "./providers/todos";
import UsersProvider from "./providers/users";

export default function App() {
  return (
    <UsersProvider>
      <TodosProvider>
        <Bg />
        <Users />
        <Todos />
      </TodosProvider>
    </UsersProvider>
  );
}
