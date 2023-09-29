import { NavBarComp } from './deportes/NavBar.jsx';
import {Futbolsala} from './deportes/Futbol.jsx';
import {Baloncesto}  from './deportes/Baloncesto.jsx';
import {Golf} from './deportes/Golf.jsx';
import {Natacion} from './deportes/Natacion.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
                      <Routes>
                                <Route path='/' element={ <NavBarComp />} >
                                
                                  <Route path='/futbol' element={ <Futbolsala />} />  
                                  <Route path='/baloncesto' element={ <Baloncesto />} /> 
                                  <Route path='/Golf' element={ <Golf />} /> 
                                  <Route path='/natacion' element={ <Natacion />} />                 
                                </Route>

                      </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
