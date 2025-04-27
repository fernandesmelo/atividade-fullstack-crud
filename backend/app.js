const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const movieRoutes = require('./routes/movieRoutes');
const songRoutes = require('./routes/songRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parse de JSON
app.use(express.json());

app.use(cors());

// Conectando ao MongoDB
mongoose.connect('mongodb+srv://laerciofernandesmelonetoo:ELRgwG95H0brJXQK@moviemusicmanagerdb.tr6cfhb.mongodb.net/?retryWrites=true&w=majority&appName=moviemusicmanagerdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB!');
}).catch(err => {
    console.log('Erro ao conectar ao MongoDB:', err);
});

// Usando rotas
app.use('/api/movies', movieRoutes);
app.use('/api/songs', songRoutes);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});