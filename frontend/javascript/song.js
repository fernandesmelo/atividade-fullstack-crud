document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:3000/api'; // Atualize para sua API
    const songModal = document.getElementById('songModal');
    const songForm = document.getElementById('songForm');
    const addSongBtn = document.getElementById('addSongBtn');
    const modalTitleSong = document.getElementById('modalTitleSong');
    let editSongId = null;

    // Função para carregar músicas
    const loadSongs = async () => {
        const response = await fetch(`${apiUrl}/songs`);
        const songs = await response.json();
        const tableBody = document.querySelector('#songsTable tbody');
        tableBody.innerHTML = '';

        songs.forEach(song => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${song.title}</td>
                <td>${song.artist}</td>
                <td>${song.album}</td>
                <td>
                    <button class="editSongBtn" data-id="${song._id}">Editar</button>
                    <button class="deleteSongBtn" data-id="${song._id}">Deletar</button>
                </td>
            `;
            tableBody.appendChild(row);
        });

        // Adicionar eventos de edição e deleção
        document.querySelectorAll('.editSongBtn').forEach(button => {
            button.addEventListener('click', (e) => openEditSongModal(e.target.dataset.id));
        });

        document.querySelectorAll('.deleteSongBtn').forEach(button => {
            button.addEventListener('click', (e) => deleteSong(e.target.dataset.id));
        });
    };

    // Função para adicionar música
    const addSong = async (song) => {
        await fetch(`${apiUrl}/songs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(song)
        });
        loadSongs();
    };

    // Função para atualizar música
    const updateSong = async (id, song) => {
        await fetch(`${apiUrl}/songs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(song)
        });
        loadSongs();
    };

    // Função para deletar música
    const deleteSong = async (id) => {
        await fetch(`${apiUrl}/songs/${id}`, {
            method: 'DELETE'
        });
        loadSongs();
    };

    // Abrir modal para editar música
    const openEditSongModal = async (id) => {
        editSongId = id;
        modalTitleSong.innerText = 'Editar Música';

        // Buscar os dados da música para preencher o modal
        const response = await fetch(`${apiUrl}/songs/${id}`);
        const song = await response.json();

        document.getElementById('titleSong').value = song.title;
        document.getElementById('artist').value = song.artist;
        document.getElementById('album').value = song.album;

        songModal.style.display = 'block';
    };

    // Abrir modal para adicionar nova música
    const openAddSongModal = () => {
        editSongId = null;
        modalTitleSong.innerText = 'Adicionar Música';
        songForm.reset();
        songModal.style.display = 'block';
    };

    // Fechar modal ao clicar no "x"
    document.querySelector('.close').addEventListener('click', () => {
        songModal.style.display = 'none';
    });

    // Fechar modal ao clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target === songModal) {
            songModal.style.display = 'none';
        }
    });

    // Submissão do formulário
    songForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const songData = {
            title: document.getElementById('titleSong').value,
            artist: document.getElementById('artist').value,
            album: document.getElementById('album').value
        };

        if (editSongId) {
            await updateSong(editSongId, songData);
        } else {
            await addSong(songData);
        }

        songModal.style.display = 'none';
        loadSongs();
    });

    // Inicializando o carregamento de músicas e eventos
    addSongBtn.addEventListener('click', openAddSongModal);
    loadSongs();
});