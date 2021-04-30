import './assets/css/App.css';

import Addition from './components/Addition.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img className = "bg-image simbol" src="https://i.ibb.co/QjCpfhs/kisspng-computer-icons-calculator-symbol-calculation-clip-calculator-5ab71dff5b6404-0658717515219502.png" alt="kisspng-computer-icons-calculator-symbol-calculation-clip-calculator-5ab71dff5b6404-0658717515219502" border="0"/>
          <section className="components">
            <Addition />
          </section>
      </header>
      <div className="footer">
          CALCULIN - Online Math - 2021
      </div>
    </div>
  );
}

export default App;