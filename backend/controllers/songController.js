const Song = require('../models/song');

// Criar nova música
exports.createSong = async (req, res) => {
    try {
        const { title, artist, album } = req.body;
        const song = new Song({ title, artist, album });
        await song.save();
        res.status(201).json(song);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Listar todas as músicas
exports.getSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).json(songs);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Buscar uma música específica por ID
exports.getSongById = async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        if (!song) {
            return res.status(404).json({ message: 'Música não encontrada' });
        }
        res.status(200).json(song);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Atualizar música
exports.updateSong = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, artist, album } = req.body;

        const updatedSong = await Song.findByIdAndUpdate(id, { title, artist, album }, { new: true });
        if (!updatedSong) return res.status(404).json({ message: 'Música não encontrada' });

        res.status(200).json(updatedSong);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Excluir música
exports.deleteSong = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSong = await Song.findByIdAndDelete(id);
        if (!deletedSong) return res.status(404).json({ message: 'Música não encontrada' });

        res.status(200).json({ message: 'Música excluída com sucesso' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};