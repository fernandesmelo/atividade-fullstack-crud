const express = require('express');
const router = express.Router();
const { createSong, getSongs, getSongById, updateSong, deleteSong } = require('../controllers/songController');

// Rotas de músicas
router.post('/', createSong);
router.get('/', getSongs);
router.get('/:id', getSongById);
router.put('/:id', updateSong);
router.delete('/:id', deleteSong);

module.exports = router;