import axios from '../services/api';
import React, { useEffect, useState } from 'react';

interface Movie {
  id: number;
  title: string;
  description: string;
  rating: number;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get<Movie[]>('/movies'); 
        setMovies(response.data);
        setLoading(false); 
      } catch (err: any) {
        setError(err.message || 'Erro ao carregar filmes'); 
        setLoading(false); 
        console.error('Error loading movies', err);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Carregando filmes...</p>; 
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Lista de Filmes</h1>
      <div className="row">
        {movies.map(movie => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">Nota: {movie.rating}</p>
                <p className="card-text">{movie.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
