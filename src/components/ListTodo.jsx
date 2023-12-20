import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item';
import EditForm from './EditForm';
import { editAdd, editTodo, filterTodo } from '../redux/actions/todo-action';
import Button from './Button';

const ListTodo = () => {
  const todos = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.todos.FilterTodo);

  const dispatch = useDispatch();

  const handleEditTodo = (todoId) => {
    dispatch(editTodo(todoId));
  };

  const handleAdd = (todo) => {
    dispatch(editAdd(todo.valueInput, todo.id));
  };

  const handleFilter = (filterValue) => {
    dispatch(filterTodo(filterValue));
  };

  const filteredTodos = todos.filter((item) => {
    if (filter === 'ACTIVE') {
      return !item.complete;
    } else if (filter === 'COMPLETE') {
      return item.complete;
    } else {
      return true;
    }
  });

  return (
    <div className="todo-list-wrapper">
      {/* Tombol untuk memfilter */}
      {/* <button onClick={() => handleFilter('ALL')}>All</button>
      <button onClick={() => handleFilter('ACTIVE')}>Active</button>
      <button onClick={() => handleFilter('COMPLETE')}>Complete</button> */}
<div className='nav-container'>
  <Button title="All" handleClick={() => handleFilter('ALL')} />
  <Button title="Active" handleClick={() => handleFilter('ACTIVE')} />
  <Button title="Complete" handleClick={() => handleFilter('COMPLETE')} />
</div>

      {/* Daftar todos yang sudah difilter */}
      <ul className="list-item">{filteredTodos.map((item) => (item.isEditing ? <EditForm key={item.id} editAdd={handleAdd} todo={item} /> : <Item key={item.id} todo={item} onEdit={() => handleEditTodo(item.id)} />))}</ul>
    </div>
  );
};

export default ListTodo;

// permasalahan
// data yang ditulis di EditForm itu akan memperbarui value Input lalu tersimpan
