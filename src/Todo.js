import React from "react";
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { complete: this.props.complete };
  }

  click() {
    this.setState({ complete: !this.state.complete });
  }

  render() {
    return (
      <div>
        <li className="todo stack-small">
          <div className="c-cb">
            <input
              id={this.props.id}
              type="checkbox"
              checked={this.state.complete}
              onClick={this.click.bind(this)}
            />

            <label className="todo-label" htmlFor={this.props.id}>
              {this.props.item}
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">{this.props.item}</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
      </div>
    );
  }
}

export default Todo;
