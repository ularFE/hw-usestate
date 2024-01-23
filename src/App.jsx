import './App.css';
import Length from './components/length/Length';
import LocalStrg from './components/localstrg/LocalStrg';
import Render from './components/render/Render';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LocalStrg/>
        {/* <Length/> */}
        <Render/>
      </header>
    </div>
  );
}

export default App;
