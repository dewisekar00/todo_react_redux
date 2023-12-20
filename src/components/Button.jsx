import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTodo } from '../redux/actions/todo-action';


const Button = ({ title, handleClick }) => {
  const dispatch = useDispatch();

  const handleClickButton = () => {
    dispatch(filterTodo(title)); 
    handleClick();
  };

  return (
    <div className=' border-black border-2 mt-4  hover:bg-customPink  focus:shadow-outline focus:outline-none text-black  py-1 px-6 font-serif rounded-2xl'>
    <button onClick={handleClickButton} >
{title}
</button>
    </div>
  );
};

export default Button;


