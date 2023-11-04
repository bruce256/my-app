import Todo from "./Todo";
import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    // 构造函数是唯一可以给state设值的地方，state设值必须用setState
    this.setState({ todos: props.todos });
  }

  render() {
    const list = this.state.todos.map((todo) => {
      return <Todo item="eat" id="todo-0" />;
    });
    return (
      <ul
        id="todoList"
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {list}
      </ul>
    );
  }
}

export default TodoList;
