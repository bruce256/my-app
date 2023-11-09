import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
import TodoList from "./TodoList";
import React from "react";

class App extends React.Component {
  /*   const todos = [
    { id: "todo-0", item: "eat" },
    { id: "todo-1", item: "sleep" },
    { id: "todo-2", item: "run" }
  ]; */

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: "todo-0", item: "eat", complete: false },
        { id: "todo-1", item: "sleep", complete: true },
        { id: "todo-2", item: "run", complete: false },
      ],
    };
  }

  addTodo() {
    const item = document.getElementById("new-todo-input").value;
    const todoArray = [...this.state.todos, { item: item, id: item }];
    this.setState({ todos: todoArray });
  }

  render() {
    console.log(JSON.stringify(this.state.todos));

    return (
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        {/* <form> */}
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button
          type="submit"
          className="btn btn__primary btn__lg"
          onClick={this.addTodo.bind(this)}
        >
          Add
        </button>
        {/* </form> */}
        <div className="filters btn-group stack-exception">
          <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span>all</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Active</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Completed</span>
            <span className="visually-hidden"> tasks</span>
          </button>
        </div>
        <h2 id="list-heading">3 tasks remaining</h2>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
export default App;
