import { Routes, Route } from 'react-router-dom';
import Comienzo from '../src/principal.jsx';
import Dashboard from '../src/dashboard.jsx';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Comienzo />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRouter;