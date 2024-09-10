// src/components/MovieDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/api';

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovie = async () => {
      if (id) { // Verificação para garantir que o id não seja undefined
        try {
          const movieData = await fetchMovieById(id);
          setMovie(movieData);
        } catch (error) {
          console.error('Error loading movie:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false); // Se o ID for undefined, interrompa o carregamento
      }
    };

    loadMovie();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <p>Year: {movie.year}</p>
          <p>Director: {movie.director}</p>
        </div>
      ) : (
        <p>Movie not found.</p>
      )}
    </div>
  );
};



export default MovieDetail;
