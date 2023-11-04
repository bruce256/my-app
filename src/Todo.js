function Todo(props) {
  return (
    <div>
      <li className="todo stack-small">
        <div className="c-cb">
          <input id={props.id} type="checkbox" />
          <label className="todo-label" htmlFor={props.id}>
            {props.item}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">{props.item}</span>
          </button>
          <button type="button" className="btn btn__danger">
            Delete <span className="visually-hidden">Sleep</span>
          </button>
        </div>
      </li>
    </div>
  );
}

export default Todo;
