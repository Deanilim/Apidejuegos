const apiKey = '3481cda6aa1b4a4a89132da25c4b6e5d'; // Reemplaza con tu clave de API
const apiUrl = 'https://api.rawg.io/api/games';

const fetchGames = async (genre = '', search = '') => {
    try {
        const url = `${apiUrl}?key=${apiKey}&page_size=12${genre ? `&genres=${genre}` : ''}${search ? `&search=${search}` : ''}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching games:', error);
        return [];
    }
};

const displayGames = (games) => {
    const gamesContainer = document.getElementById('games');
    gamesContainer.innerHTML = '';
    if (games.length === 0) {
        gamesContainer.innerHTML = '<p>No se encontraron juegos</p>';
        return;
    }
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.background_image}" alt="${game.name}">
            <div>
                <h3>${game.name}</h3>
                <p>Fecha de lanzamiento: ${game.released}</p>
            </div>
        `;
        gamesContainer.appendChild(gameCard);
    });
};

document.addEventListener('DOMContentLoaded', async () => {
    const games = await fetchGames();
    displayGames(games);
});

document.getElementById('all').addEventListener('click', async () => {
    const games = await fetchGames();
    displayGames(games);
});

document.getElementById('action').addEventListener('click', async () => {
    const games = await fetchGames('action');
    displayGames(games);
});

document.getElementById('adventure').addEventListener('click', async () => {
    const games = await fetchGames('adventure');
    displayGames(games);
});

document.getElementById('strategy').addEventListener('click', async () => {
    const games = await fetchGames('strategy');
    displayGames(games);
});

document.getElementById('searchButton').addEventListener('click', async () => {
    const searchInput = document.getElementById('searchInput').value;
    const games = await fetchGames('', searchInput);
    displayGames(games);
});

document.getElementById('searchInput').addEventListener('keyup', async (e) => {
    if (e.key === 'Enter') {
        const searchInput = document.getElementById('searchInput').value;
        const games = await fetchGames('', searchInput);
        displayGames(games);
    }
});

