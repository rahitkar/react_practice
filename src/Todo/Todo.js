import React, { useState } from 'react';
import Input from './Input';
import TodoItems from './TodoItems';
import Heading from './Heading';
import { getDefault, toggleStatus } from './toggle';
import './todo.css';

const Todo = () => {
  const [todo, updateTodo] = useState([]);
  const [heading, changeHeading] = useState('Todo');
  const [lastId, updateLastId] = useState(0);

  const addTodo = (todoText) => {
    updateTodo([
      ...todo,
      {
        text: todoText,
        status: getDefault(),
        id: lastId,
      },
    ]);
    updateLastId((lastId) => lastId + 1);
  };

  const updateTodoStatus = (todoId) => {
    const todoList = [...todo];
    todoList.forEach((todo) => {
      if (todo.id === +todoId) {
        todo.status = toggleStatus(todo.status);
      }
    });
    updateTodo(todoList);
  };

  const updateHeading = (heading) => {
    changeHeading(heading);
  };

  const deleteItem = (todoId) => {
    const todoList = todo.filter((todo) => todo.id !== +todoId);
    updateTodo(todoList);
  };

  const deleteTodo = () => {
    updateTodo([]);
    updateHeading('Todo');
  };

  return (
    <div className='todo-box'>
      <Heading
        heading={heading}
        deleteTodo={deleteTodo}
        updateHeading={updateHeading}
      />
      <TodoItems
        todoList={todo}
        onClick={updateTodoStatus}
        deleteItem={deleteItem}
      />
      <Input onKeyPress={addTodo} />
    </div>
  );
};

export default Todo;
