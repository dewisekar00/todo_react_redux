import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editAdd } from '../redux/actions/todo-action';

const EditForm = ({ todo }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(todo.valueInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    if( value.trim() === ''){
      return false
     } else{
    dispatch(editAdd(value, todo.id));
    setValue('');
  }};

  return (
    <form onSubmit={handleSubmit} className="flex justify-between items-center border-2 my-4 rounded-lg">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Update task" className="h-10  px-2 borde  rounded-md focus:outline-none focus:ring-2 focus:ring-transparent placeholder-gray-400" />
      <button type="submit" className="bg-customPink hover:bg-slate-400 text-white font-bold py-2 px-4 rounded">
        Done
      </button>
    </form>
  );
};

export default EditForm;
