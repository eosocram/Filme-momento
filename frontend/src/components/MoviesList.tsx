import React, {useEffect, useState} from 'react';
import { fetchMovies } from '../services/movieService';

const MovieList:React.FC = () => {
    const [movies, setMovies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const movieData = await fetchMovies();
                setMovies(movieData);
            }catch (error) {
                console.error('Error loading movies', error);
            }finally {
                setLoading(false);
            }
        };

        loadMovies();
    }, []);

    if(loading) return <div>Loading...</div>;
    return (
        <div>
            <h1>Movies</h1>
            <ul>
            {movies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
            ))}    
            </ul>
        </div>
    );
};

export default MovieList;