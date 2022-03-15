import Home from './components/Home';
import { loadEssentialModels } from './utils/faceAPI';
import './App.css';

loadEssentialModels();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
