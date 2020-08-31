import React from 'react';
import './todo.css';

class TodoItems extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onClick(event.target.id);
  }

  render() {
    const todoList = this.props.todoList.map((todo) => {
      const classes = `todo ${todo.status}`;
      return (
        <div key={todo.id} className={classes}>
          <div></div>
          <span className='todoText' id={todo.id} onClick={this.handleClick}>
            {todo.text}
          </span>
        </div>
      );
    });
    return <div>{todoList}</div>;
  }
}

export default TodoItems;
