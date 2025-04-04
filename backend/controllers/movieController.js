const Movie = require('../models/movie');

// Criar novo filme
exports.createMovie = async (req, res) => {
    try {
        const { title, genre, director } = req.body;
        const movie = new Movie({ title, genre, director });
        await movie.save();
        res.status(201).json(movie);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Listar todos os filmes
exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Buscar um filme específico por ID
exports.getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Filme não encontrado' });
        }
        res.status(200).json(movie);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Atualizar filme
exports.updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, genre, director } = req.body;

        const updatedMovie = await Movie.findByIdAndUpdate(id, { title, genre, director }, { new: true });
        if (!updatedMovie) return res.status(404).json({ message: 'Filme não encontrado' });

        res.status(200).json(updatedMovie);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Excluir filme
exports.deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMovie = await Movie.findByIdAndDelete(id);
        if (!deletedMovie) return res.status(404).json({ message: 'Filme não encontrado' });

        res.status(200).json({ message: 'Filme excluído com sucesso' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};