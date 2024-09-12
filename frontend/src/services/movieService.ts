import api from './api';

export const fetchMovies = async () => {
    try {
        const response = await api.get('/movies');
        return response.data;
    }catch (error) {
        console.error('Error fetching movies', error);
        throw error;
    }
};

export const fetchMovieById = async (id:string) => {
    try{
        const response = await api.get(`/movies/${id}`); 
        return response.data; 
    }catch (error){
        console.error(`Error fetching movie with id ${id}`, error);
        throw error;
    }
};