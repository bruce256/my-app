import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
import TodoList from "./TodoList";

function App(props) {
  const todos = [
    { id: "todo-0", item: "eat" },
    { id: "todo-1", item: "sleep" },
    { id: "todo-2", item: "run" }
  ];

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
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
          onClick={addTodo}
        >
          Add
        </button>
      </form>
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
      <TodoList todos={todos}/>
    </div>
  );
}

function addTodo() {
  alert("add todo");
  var todo = new Todo();
  document.getElementById("todoList").appendChild(todo);
}

export default App;
