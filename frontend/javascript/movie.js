document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:3000/api'; // Atualize para sua API
    const movieModal = document.getElementById('movieModal');
    const movieForm = document.getElementById('movieForm');
    const addMovieBtn = document.getElementById('addMovieBtn');
    const modalTitle = document.getElementById('modalTitle');
    let editMovieId = null;

    // Função para carregar filmes
    const loadMovies = async () => {
        const response = await fetch(`${apiUrl}/movies`);
        const movies = await response.json();
        const tableBody = document.querySelector('#moviesTable tbody');
        tableBody.innerHTML = '';

        movies.forEach(movie => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${movie.title}</td>
                <td>${movie.genre}</td>
                <td>${movie.director}</td>
                <td>
                    <button class="editMovieBtn" data-id="${movie._id}">Editar</button>
                    <button class="deleteMovieBtn" data-id="${movie._id}">Deletar</button>
                </td>
            `;
            tableBody.appendChild(row);
        });

        // Adicionar eventos de edição e deleção
        document.querySelectorAll('.editMovieBtn').forEach(button => {
            button.addEventListener('click', (e) => openEditMovieModal(e.target.dataset.id));
        });

        document.querySelectorAll('.deleteMovieBtn').forEach(button => {
            button.addEventListener('click', (e) => deleteMovie(e.target.dataset.id));
        });
    };

    // Função para adicionar filme
    const addMovie = async (movie) => {
        await fetch(`${apiUrl}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        });
        loadMovies();
    };

    // Função para atualizar filme
    const updateMovie = async (id, movie) => {
        await fetch(`${apiUrl}/movies/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        });
        loadMovies();
    };

    // Função para deletar filme
    const deleteMovie = async (id) => {
        await fetch(`${apiUrl}/movies/${id}`, {
            method: 'DELETE'
        });
        loadMovies();
    };

    // Abrir modal para editar filme
    const openEditMovieModal = async (id) => {
        editMovieId = id;
        modalTitle.innerText = 'Editar Filme';

        // Buscar os dados do filme para preencher o modal
        const response = await fetch(`${apiUrl}/movies/${id}`);
        const movie = await response.json();

        document.getElementById('title').value = movie.title;
        document.getElementById('genre').value = movie.genre;
        document.getElementById('director').value = movie.director;

        movieModal.style.display = 'block';
    };

    // Abrir modal para adicionar novo filme
    const openAddMovieModal = () => {
        editMovieId = null;
        modalTitle.innerText = 'Adicionar Filme';
        movieForm.reset();
        movieModal.style.display = 'block';
    };

    // Fechar modal ao clicar no "x"
    document.querySelector('.close').addEventListener('click', () => {
        movieModal.style.display = 'none';
    });

    // Fechar modal ao clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target === movieModal) {
            movieModal.style.display = 'none';
        }
    });

    // Submissão do formulário
    movieForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const movieData = {
            title: document.getElementById('title').value,
            genre: document.getElementById('genre').value,
            director: document.getElementById('director').value
        };

        if (editMovieId) {
            await updateMovie(editMovieId, movieData);
        } else {
            await addMovie(movieData);
        }

        movieModal.style.display = 'none';
        loadMovies();
    });

    // Inicializando o carregamento de filmes e eventos
    addMovieBtn.addEventListener('click', openAddMovieModal);
    loadMovies();
});