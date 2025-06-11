import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movies from '../data/movies';
import './MovieDetails.css';

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log('ID recibido:', id);  // <-- Aquí ves el id que llega de la URL

  const movie = movies.find(m => m.id === Number(id));
  
  console.log('Película encontrada:', movie);  // <-- Aquí ves qué película encontró

  if (!movie) {
    return <div>Pelicula no encontrada</div>;
  }

  return (
    <div className="movie-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Volver</button>
      <h2>{movie.title} ({movie.year})</h2>
      <img src={movie.poster} alt={movie.title} className="movie-poster"/>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Actores:</strong> {movie.actors}</p>
      <p><strong>Duración:</strong> {movie.duration}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p><strong>Descripción:</strong> {movie.description}</p>
    </div>
  );
}





