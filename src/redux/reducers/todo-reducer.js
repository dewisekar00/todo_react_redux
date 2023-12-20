import { ADD_TODO, DELETE_ITEM, EDIT_ADD, EDIT_TODO, FILTER_TODO, TOGGLE_ITEM } from '../actions/todo-action';

const initialState = {
  todos: [],
  FilterTodo:[]
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        todos: state.todos.map((item) => (item.id === action.payload ? { ...item, complete: !item.complete } : item)),
      };
    case DELETE_ITEM:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => (item.id === action.payload ? { ...item, isEditing: !item.isEditing } : item)),
      };
    case EDIT_ADD:
      const { todo, itemId } = action.payload;
      const newTodos = state.todos.map((item) => (item.id === itemId ? { ...item, valueInput: todo, isEditing: !item.isEditing } : item));
      return {
        ...state,
        todos: newTodos,
      };
case FILTER_TODO:
  return{
    ...state,
    FilterTodo: action.payload
  }
    default:
      return state;
  }
}

export default todoReducer;
