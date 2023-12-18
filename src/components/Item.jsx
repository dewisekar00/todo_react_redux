import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, toggleItem } from '../redux/actions/todo-action';

const Item = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(toggleItem(todo.id));
  };

  const handleButtondelete = () => {
    dispatch(deleteItem(todo.id));
  };

  return (
    <>
      <li className="items">
        <div className="items-1">
          <input type="checkbox" checked={todo.complete} onChange={handleCheckboxChange} />
          <span style={todo.complete ? { textDecoration: 'line-through', color: 'grey' } : {}}>{todo.valueInput}</span>
        </div>
        <div className="icon-wrapper">
          <span className="material-symbols-outlined">edit_note</span>
          <button onClick={handleButtondelete}>
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
