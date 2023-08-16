import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componentes/home/Home';
import Conocenos from './componentes/conocenos/Conocenos';
import Menu from './componentes/Menu/Menu';
import Reservas from './componentes/reservas/Reservas';
import Navegacion from './componentes/navegador/Navegacion';


function App() {

  return (
    <div className="App">
      <Navegacion />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/conocenos' element={<Conocenos />}></Route>
        <Route path='/Menu' element={<Menu />}></Route>
        <Route path='/Reservas' element={<Reservas />}></Route>
      </Routes>
    </div>
  );
}

export default App;
