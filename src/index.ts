import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';



dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.MOVIEDB_API_KEY;


app.get('/movies', async (req, res) => {
    try {
        console.log("Buscando filmes");
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing', { 
            params: {
                api_key: apiKey,
                language: 'pt-BR',
                page: 1
            } 
        });
        res.json(response.data);
    } catch (error) {
        console.error("Erro ao buscar filmes...", error);
        res.status(500).json({ error: 'Erro ao buscar os filmes' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
