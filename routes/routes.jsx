import { Routes, Route } from 'react-router-dom';
import Comienzo from '../src/principal.jsx';
import Dashboard from '../src/dashboard.jsx';
import Agregar from '../src/agregar.jsx';
import Editar from '../src/editar.jsx';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Comienzo />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/agregar' element={<Agregar/>} ></Route>
      <Route path='/editar/:usuario_red' element={<Editar/>} ></Route>

    </Routes>
  );
}

export default AppRouter;