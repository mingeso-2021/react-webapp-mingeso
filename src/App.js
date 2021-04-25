import logo from './assets/images/logo.svg';
import './assets/ccs/App.css';

import Addition from './components/Addition.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <section className="components">
            <Addition />
          </section>
      </header>
    </div>
  );
}

export default App;
