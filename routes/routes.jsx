import { Routes, Route } from 'react-router-dom';
import Comienzo from '../src/principal.jsx';

import DashboardPrincipal from '../src/dashboardPrincipal.jsx';
import DashboardUsuarios from '../src/dashboardUsuarios.jsx';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Comienzo />} />
      <Route path='/dashboardPrincipal' element={<DashboardPrincipal/>}></Route>
      <Route path='/dashboardUsuarios' element={<DashboardUsuarios/>}></Route>
      

    </Routes>
  );
}

export default AppRouter;