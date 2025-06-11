import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import movies from '../data/movies';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const queryFromURL = searchParams.get('q') || '';
  const [query, setQuery] = useState(queryFromURL);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Actualiza resultados cuando cambia el query en el URL o en el input
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  // Actualiza query y URL al escribir
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      setSearchParams({ q: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Buscar Películas</h2>
      <input
        type="text"
        placeholder="Escribe para buscar..."
        value={query}
        onChange={handleInputChange}
        style={{ padding: '0.5rem', width: '100%', maxWidth: '400px', marginBottom: '1rem' }}
      />

      {results.length > 0 ? (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {results.map(movie => (
            <div
              key={movie.id}
              onClick={() => navigate(`/movie/${movie.id}`)}
              style={{
                cursor: 'pointer',
                width: '150px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '0.5rem'
              }}
            >
              <img
                src={movie.poster}
                alt={movie.title}
                style={{ width: '100%', borderRadius: '4px' }}
              />
              <h3 style={{ fontSize: '1rem', marginTop: '0.5rem' }}>{movie.title}</h3>
              <p style={{ fontSize: '0.8rem', color: '#555' }}>{movie.year}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron películas.</p>
      )}
    </div>
  );
}




