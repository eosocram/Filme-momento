"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;
dotenv_1.default.config();
app.get('/movies', async (req, res) => {
    try {
        console.log("Buscando filmes");
        const response = await axios_1.default.get('https://api.themoviedb.org/3/movie/now_playing', {
            params: {
                api_key: apiKey,
                language: 'pt-BR',
                page: 1
            }
        });
        res.json(response.data);
    }
    catch (error) {
        console.error("Erro ao buscar filmes...", error);
        res.status(500).json({ error: 'Erro ao buscar os filmes' });
    }
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map