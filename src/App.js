import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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


      <footer>
        <p>Le degrés d'importance que l'on peut accorder à ce jeu de donnée est relativement faible.
Il y a deux raisons principales à cela, d'abord les étudiants n'ont pas répondu forcément de façon sincère.
Egalement, le nombre de personnes sollicités par ce sondage est vraiment trop faible pour en tirer des conclusions statistiques.</p>
      </footer>

    </div>
  );
}

export default App;
