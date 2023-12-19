import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, editTodo, toggleItem } from '../redux/actions/todo-action';

const Item = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(toggleItem(todo.id));
  };

  const handleButtonDelete = () => {
    dispatch(deleteItem(todo.id));
  };

  const handleButtonEdit = () => {
    dispatch(editTodo(todo.id));
  };

  return (
    <>
      <li className="items">
        <div className="items-1">
          <input type="checkbox" checked={todo.complete} onChange={handleCheckboxChange} />
          <span style={todo.complete ? { textDecoration: 'line-through', color: 'grey' } : {}}>
            {todo.valueInput}
          </span>
        </div>
        <div className="icon-wrapper">
          <button onClick={handleButtonEdit}>
            <span className="material-symbols-outlined">edit_note</span>
          </button>
          <button onClick={handleButtonDelete}>
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </li>
    </>
  );
};

export default Item;
