import Todo from "./Todo";
import React from "react";

class TodoList extends React.Component {

  // 仅在组件初次加载的时候调用，后续渲染的时候不会调用
  constructor(props) {
    super(props);
    // 构造函数是唯一可以给state设值的地方，state设值必须用setState
    // this.state = { todos: props.todos };
  }

/*   addTodo(item) {
    const todoArray = this.state.todos.push({ item: item, id: item });
    this.setState(todoArray);
  } */

  render() {
    const list = this.props.todos.map((todo) => {
      return <Todo item={todo.item} id={todo.id} complete={todo.complete}/>;
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
