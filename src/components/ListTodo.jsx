import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const ListTodo = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="todo-list-wrapper">
      <ul className="list-item">
        {todos.map((todo) => (
          <Item todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default ListTodo;
