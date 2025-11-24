import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App';
import './index.css';
import Login from './pages/Login';
import Register from './pages/Register';

const routes = {
  index: {
    path: '/',
    element: <App />,
  },
  login: {
    path: '/login',
    element: <Login />,
  },
  register: {
    path: '/register',
    element: <Register />,
  },
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={routes.index.path} element={routes.index.element} />
        <Route path={routes.login.path} element={routes.login.element} />
        <Route path={routes.register.path} element={routes.register.element} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
