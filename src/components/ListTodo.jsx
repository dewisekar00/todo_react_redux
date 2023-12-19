import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item';
import EditForm from './EditForm';
import { editAdd, editTodo } from '../redux/actions/todo-action';

const ListTodo = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleEditTodo = (todoId) => {
    dispatch(editTodo(todoId));
  };

  const handleAdd = (todo) => {
    dispatch(editAdd(todo.valueInput, todo.id));
  };

  return (
    <div className="todo-list-wrapper">
      <ul className="list-item">
        {todos.map((item) =>
          item.isEditing ? (
            <EditForm key={item.id} editAdd={handleAdd} todo={item} />
          ) : (
            <Item key={item.id} todo={item} onEdit={() => handleEditTodo(item.id)} />
          )
        )}
      </ul>
    </div>
  );
};

export default ListTodo;


// permasalahan
// data yang ditulis di EditForm itu akan memperbarui value Input lalu tersimpan