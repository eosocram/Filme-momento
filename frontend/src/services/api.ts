import axios from 'axios';
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/now_playing', 
  headers: {
      Authorization: `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTY3YTQ5ZTBlMjU5YzJhM2IxZmY1YTQ3YjNkNTAxMCIsIm5iZiI6MTcyNjE4MDE3My40NjcxODcsInN1YiI6IjY2ZGY1ODU0YjBiODQxNjcwMjNhZTNhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.axpKPiwNwza5TrTA6MoBu-zElAu76KnmxbMmOvdbueg` 
  }
});
export default api;

export const fetchMovieById = async (id: string) => {
  try {
    const response = await api.get(`/movie/${id}`); 
    return response.data; 
  } catch (error) {
    console.error('Erro ao buscar o filme:', error);
    throw error; 
  }
};