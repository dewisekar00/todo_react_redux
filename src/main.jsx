import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './redux/reducers/todo-reducer';

import App from './App';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
