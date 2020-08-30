import React from 'react';
import Input from './Input';
import TodoItems from './TodoItems';
import './todo.css';

const incrementor = () => {
  let count = 0;
  return () => count++;
};

const generateId = incrementor();

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(input) {
    this.setState({ input });
  }

  handleKeyPress(todoText) {
    const todo = this.state.todo.slice();
    const undone = 0;
    todo.push({ text: todoText, status: undone, id: generateId() });
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
        <Input
          value={this.state.input}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default Todo;
