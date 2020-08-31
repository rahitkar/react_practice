import React from 'react';
import Input from './Input';
import TodoItems from './TodoItems';
import incrementor from './incrementor'
import './todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.generateId = incrementor();
    this.state = { todo: [], lastId: 0 };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleKeyPress(todoText) {
    const todo = this.state.todo.slice();
    const undone = 0;
    todo.push({ text: todoText, status: undone, id: this.generateId() });
    this.setState({ todo });
  }

  handleClick(todoId) {
    const todoList = this.state.todo.slice();
    todoList.forEach((todo) => {
      if (todo.id === +todoId) {
        todo.status = (todo.status + 1) % 3;
      }
    });
    this.setState({ todo: todoList });
  }

  render() {
    return (
      <div className='todo-box'>
        <h2>TODO</h2>
        <TodoItems todoList={this.state.todo} onClick={this.handleClick} />
        <Input value={this.state.input} onKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}

export default Todo;
