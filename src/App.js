import Home from './components/Home';
import Dashboard from './components/Dashboard';
// import VideoStream from './components/VideoStream';
import { loadEssentialModels } from './utils/faceAPI';
// import logo from './logo.svg';
import './App.css';

loadEssentialModels();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home /> */}
        <Dashboard />
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        {/* <WebcamComponent /> */}
      </header>
    </div>
  );
}

export default App;
