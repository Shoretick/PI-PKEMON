import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import PokemonCreate from './components/PokemonCreate2';
import Details from './components/Details';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}></Route>
        <Route  path='/detail/:id' component={Details}></Route>
        <Route  path='/pokemons/create'component={PokemonCreate} ></Route>
        <Route  path='/pokemons' component={Home}></Route>
        
        

      </Switch>
    </div>
    </BrowserRouter>
  );
}                                                                                                                                                                                                                                                                                                                                                                                          

export default App;
