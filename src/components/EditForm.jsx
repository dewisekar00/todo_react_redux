import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editAdd } from '../redux/actions/todo-action';

const EditForm = ({ todo }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(todo.valueInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editAdd(value, todo.id));
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-edit">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Update task" />
      <button type="submit" className="btn-edit-add">
        Done
      </button>
    </form>
  );
};

export default EditForm;
