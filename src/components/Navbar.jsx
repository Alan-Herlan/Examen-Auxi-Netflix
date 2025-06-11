import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 onClick={() => navigate('/')}>MiNetflix</h1>
        <button onClick={() => navigate('/recent')}>Más Reciente</button>
        <button onClick={() => navigate('/collections')}>Colecciones</button>
      </div>

      <div className="navbar-right">
        {user ? (
          <>
            <span>Hola bienvenido usuario, {user.name}</span>
            <button onClick={logout}>Cerrar sesión</button>
          </>
        ) : (
          <button onClick={() => navigate('/login')}>Iniciar sesión</button>
        )}
      </div>
    </nav>
  );
}


















