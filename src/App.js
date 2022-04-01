import logo from './logo.svg';
import './App.css';
import Content from './content';
import Header from './header';
import Todolist from './todolist';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Todolist />
    </div>
  );
}

export default App;
