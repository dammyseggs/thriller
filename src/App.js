import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App flex flex-row">
      <Navbar className="basis-1/4" />
      <Main className="basis-1/2"/>
    </div>
  );
}

export default App;
