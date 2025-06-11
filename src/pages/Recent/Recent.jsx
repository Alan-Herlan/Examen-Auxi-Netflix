import React from 'react';
import { useNavigate } from 'react-router-dom';  
import movies from '../../data/movies';
import './Recent.css';

export default function Recent() {
  const navigate = useNavigate();  

  const sortedMovies = [...movies].sort((a, b) => b.year - a.year);

  return (
    <div className="recent-container">
      <h2>Películas Más Recientes</h2>
      <div className="movie-grid">
        {sortedMovies.map(movie => (
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

