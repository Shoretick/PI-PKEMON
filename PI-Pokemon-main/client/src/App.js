import './App.css';
import {BrowserRouter,route,Switch} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <h1>Front-end Pokemon</h1>
      <div className="text">
  <p>Ash, Dawn y Brock continúan sus viajes por la región 
      de Sinnoh, enfrentando nuevos desafíos y conociendo a más Pokémon.</p>
</div>
    </div>
    </BrowserRouter>
  );
}

export default App;
