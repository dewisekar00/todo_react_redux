import './App.css';
import { Header, InputTodo, ListTodo } from './components';

function App() {
  return (
    <div className="app ">
      <Header />
      <ListTodo />
      <InputTodo />
    </div>
  );
}

export default App;
