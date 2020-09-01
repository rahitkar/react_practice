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
    this.addTodo = this.addTodo.bind(this);
    this.updateTodoStatus = this.updateTodoStatus.bind(this);
    this.updateHeading = this.updateHeading.bind(this);
  }

  addTodo(todoText) {
    const todo = this.state.todo.slice();
    todo.push({ text: todoText, status: getDefault(), id: this.generateId() });
    this.setState({ todo });
  }

  updateTodoStatus(todoId) {
    const todoList = [...this.state.todo];
    todoList.forEach((todo) => {
      if (todo.id === +todoId) {
        todo.status = toggleStatus(todo.status);
      }
    });
    this.setState({ todo: todoList });
  }

  updateHeading(heading) {
    this.setState({ heading });
  }

  render() {
    return (
      <div className='todo-box'>
        <Heading
          heading={this.state.heading}
          updateHeading={this.updateHeading}
        />
        <TodoItems todoList={this.state.todo} onClick={this.updateTodoStatus} />
        <Input onKeyPress={this.addTodo} />
      </div>
    );
  }
}

export default Todo;
