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
      <li className="flex justify-between items-center hover:  py-2 border-b border-gray-300 bg-customPink w-80 h-14 rounded-lg px-4 font-semibold my-4 hover:scale-125 transition duration-1000">
        <div className="flex items-center">
          <input type="checkbox" checked={todo.complete} onChange={handleCheckboxChange} className="mr-2 " />
          <span className={todo.complete ? 'line-through text-white' : ''}>{todo.valueInput}</span>
        </div>
        <div>
          <button onClick={handleButtonEdit} className="mr-2">
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

/*
NOTE:
line through checkbox
1.buat action yang memiliki payload id, karena kita akan mnenggunakan id untuk memilih item mana yang sudah complete
2.buat reducernya yang mana mapping todos dan membuat state baru, lalu kondisi dimana item.id === id, lalu buat perkondisian on off / true false untuk input checkbox complete atau tidak
3.baru ke component yang dimaksud 
-pake useDispatch
-buat sebuah fungsi handle yang berisi action
-ke tag yang dimaksud(input)
*/
