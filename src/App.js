import logo from './logo.svg';
import './App.css';
import { SatisfiaComponent } from './SatisfiaComponent';

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
      <SatisfiaComponent />
    </div> 
  );
}

export default App;
