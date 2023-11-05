import Todo from "./Todo";
import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    console.log("props");
    console.log(props);
    super(props);
    // 构造函数是唯一可以给state设值的地方，state设值必须用setState
    this.state = { todos: props.todos };
    console.log("state: " + JSON.stringify(this.state));
  }

/*   addTodo(item) {
    const todoArray = this.state.todos.push({ item: item, id: item });
    this.setState(todoArray);
  } */

  render() {
    console.log("state:" + this.state);

    const list = this.state.todos.map((todo) => {
      return <Todo item={todo.item} id={todo.id} />;
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
