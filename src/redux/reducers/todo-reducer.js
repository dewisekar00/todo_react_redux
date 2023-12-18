import { ADD_TODO, DELETE_ITEM, TOOGLE_ITEM } from '../actions/todo-action';

const initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TOOGLE_ITEM:
      return {
        ...state,
        todos: state.todos.map((item) => (item.id === action.payload ? { ...item, complete: !item.complete } : item)),
      };

    case DELETE_ITEM:
    default:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
  }
}

export default todoReducer;

/*
NOTE:
alurnya itu ada hasil value dari inputTodo lalu dikirim ke action dengan payload lalu aksi yang berisi tipe dan payload itu dikirim ke reducer untuk disimpan ke dalam todos 
*/
