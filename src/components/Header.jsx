import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery('');
    }
  };

  return (
    <header className="header">
      <h1 className="logo" onClick={() => navigate('/')}>MiNetflix</h1>
      
      <nav className="nav-links">
        <button onClick={() => navigate('/')}>Inicio</button>
        <button onClick={() => navigate('/search')}>Buscar</button>
        {/* Agrega más botones si querés */}
      </nav>

      <form onSubmit={handleSubmit} className="search-form">
        <input 
          type="text" 
          placeholder="Buscar películas..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
        />
        <button type="submit">Buscar</button>
      </form>
    </header>
  );
}

