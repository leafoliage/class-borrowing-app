import logo from './logo.svg';
import { Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Route path="/app" exact component={app} />
      </div>
    </div>
  );
}

const app = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
  </a>
    </header>
  )
}

export default App;
