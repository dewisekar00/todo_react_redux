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
    <>
      <div className="flex justify-center items-center  mt-4 gap-4">
        <Button title="All" handleClick={() => handleFilter('ALL')} />
        <Button title="Active" handleClick={() => handleFilter('ACTIVE')} />
        <Button title="Complete" handleClick={() => handleFilter('COMPLETE')} />
      </div>

      <div className="mt-10 w-auto h-auto ">
        {filteredTodos.length === 0 ? (
          <div className="text-center mt-40 font-bold text-slate-400">
            <p>Todo is empty,add some todos!</p>
          </div>
        ) : (
          <ul>{filteredTodos.map((item) => (item.isEditing ? <EditForm key={item.id} editAdd={handleAdd} todo={item} /> : <Item key={item.id} todo={item} onEdit={() => handleEditTodo(item.id)} />))}</ul>
        )}
      </div>
    </>
  );
};

export default ListTodo;

// permasalahan
// data yang ditulis di EditForm itu akan memperbarui value Input lalu tersimpan
