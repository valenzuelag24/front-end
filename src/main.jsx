import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import AppRouter from '../routes/routes.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);