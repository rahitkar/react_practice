import React from 'react';
import Input from './Input';
import TodoItems from './TodoItems';
import incrementor from './incrementor';
import Heading from './Heading';
import { getDefault, toggleStatus } from './toggle';
import './todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.generateId = incrementor();
    this.state = { todo: [], heading: 'Todo' };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.replaceHeading = this.replaceHeading.bind(this);
  }

  handleKeyPress(todoText) {
    const todo = this.state.todo.slice();
    todo.push({ text: todoText, status: getDefault(), id: this.generateId() });
    this.setState({ todo });
  }

  handleClick(todoId) {
    const todoList = [...this.state.todo];
    todoList.forEach((todo) => {
      if (todo.id === +todoId) {
        todo.status = toggleStatus(todo.status);
      }
    });
    this.setState({ todo: todoList });
  }

  replaceHeading(heading) {
    this.setState({ heading });
  }

  render() {
    return (
      <div className='todo-box'>
        <Heading
          heading={this.state.heading}
          replaceHeading={this.replaceHeading}
        />
        <TodoItems todoList={this.state.todo} onClick={this.handleClick} />
        <Input onKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}

export default Todo;
