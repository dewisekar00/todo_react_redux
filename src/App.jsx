import './app.css';
import { Header, InputTodo, ListTodo } from './components';
import EditForm from './components/EditForm';

function App() {
  return (
    <div className="app">
      <Header />
      <ListTodo />
      <InputTodo />
  
    </div>
  );
}

export default App;
