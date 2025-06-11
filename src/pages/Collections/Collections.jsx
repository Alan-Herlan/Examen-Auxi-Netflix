import React from 'react';
import { useNavigate } from 'react-router-dom';
import movies from '../../data/movies';
import './Collections.css';

export default function Collections() {
  const navigate = useNavigate();

  // Por ejemplo, aquí puedes filtrar o agrupar películas para mostrar "colecciones"
  // Ahora solo muestro todas, pero podrías personalizarlo
  const collectionsMovies = movies; 

  return (
    <div className="collections-container">
      <h2>Colecciones</h2>
      <div className="movie-grid">
        {collectionsMovies.map(movie => (
          <div 
            key={movie.id} 
            className="movie-card"
            onClick={() => navigate(`/movie/${movie.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title} ({movie.year})</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

