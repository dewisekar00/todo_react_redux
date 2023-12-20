import './index.css';
import { Header, InputTodo, ListTodo } from './components';

function App() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div>
        <Header />
      </div>
      <div>
        <InputTodo />
      </div>
      <div>
        <ListTodo />
      </div>
    </div>
  );
}

export default App;
