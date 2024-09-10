import axios from 'axios';


const api = axios.create({
    baseURL: 'https://super-train-7qxv9p6qqrvhw6p5-3000.app.github.dev'
});

export default api; 
export const fetchMovieById = async (id: string) => { 
    try {
        const response = await fetch(`${'https://super-train-7qxv9p6qqrvhw6p5-3000.app.github.dev'}/${id}`); 
        if (!response.ok) {
          throw new Error(`Erro ao buscar o filme com ID: ${id}`);
        }
        const movieData = await response.json(); // Convertendo a resposta para JSON
        return movieData;
      } catch (error) {
        console.error('Erro ao buscar o filme:', error);
        throw error; // Propagando o erro para ser tratado no componente
      }
};