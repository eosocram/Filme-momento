// src/components/MovieDetail.tsx
import React, { useEffect, useState } from 'react';
import axios from '../services/api';

interface Movie {
  id: number;
  title: string;
  description: string;
  rating: number;
}

const MoviesList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null); 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/movies');
        setMovies(response.data); 
        setLoading(false);
      } catch (err) {
        setError('Ocorreu um erro ao carregar os filmes.');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <p>Carregando filmes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Lista de Filmes</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>Nota: {movie.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
