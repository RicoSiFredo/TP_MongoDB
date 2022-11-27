import logo from './logo.svg';
import './App.css';
import { SatisfiaComponent } from './SatisfiaComponent';
import { TestComponent } from './TestComponent';
import { TimeComponent } from './RowComponent';
import {FiliereCompononent} from './FiliereComponent';

function App() {
  return (
    <div
      style={{
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <h1>TP MONGO DB</h1>
      <p>Balzeau Théo && Barnier--Cinel Eric</p>

      <TestComponent />
      <SatisfiaComponent />
      <TimeComponent />
      <FiliereCompononent />

    <div>
      <p>Le degrés d'importance que l'on peut accorder à ce jeu de donnée est relativement faible.
Il y a deux raisons principales à cela, d'abord les étudiants n'ont pas répondu forcément de façon sincère.
Egalement, le nombre de personnes sollicités par ce sondage est vraiment trop faible pour en tirer des conclusions statistiques.</p>
    </div>
    </div> 
  );
}

export default App;
