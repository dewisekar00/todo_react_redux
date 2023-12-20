import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTodo } from '../redux/actions/todo-action';


const Button = ({ title, handleClick }) => {
  const dispatch = useDispatch();

  const handleClickButton = () => {
    dispatch(filterTodo(title)); 
    handleClick();// Sesuaikan dengan parameter yang dibutuhkan oleh fungsi filterTodo
  };

  return (
    <div>
      <button onClick={handleClickButton}>{title}</button>
    </div>
  );
};

export default Button;
