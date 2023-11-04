import Todo from "./Todo";
import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <ul
        id="todoList"
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <Todo item="eat" id="todo-0" />
        <Todo item="sleep" id="todo-1" />
        <Todo item="run" id="todo-2" />
        <Todo item="study" id="todo-3" />
      </ul>
    );
  }
}

export default TodoList;
