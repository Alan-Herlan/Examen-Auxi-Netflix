import React from 'react';
import { useNavigate } from 'react-router-dom';
import movies from '../../data/movies';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="heading">Películas Destacadas</h2>
      <div className="movie-grid">
        {movies.map(movie => (
          <div 
            key={movie.id}
            className="movie-card"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title} <span>({movie.year})</span></h3>            
          </div>
        ))}
      </div>
    </div>
  );
}




