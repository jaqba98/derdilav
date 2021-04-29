// const games = [
//   { class: 'flex100', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
//   { class: 'flex50', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
//   { class: 'flex50', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
//   { class: 'flex25', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
//   { class: 'flex25', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
//   { class: 'flex25', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
//   { class: 'flex25', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
//   { class: 'flex25', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
//   { class: 'flex25', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
//   { class: 'flex25', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
//   { class: 'flex25', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' }
// ];

const games = [];

const gameList = document.getElementById('gameList');

if(games.length > 0) {
  games.forEach(game => {
    gameList.innerHTML += `<figure class="${game.class}">
    <img src="${game.src}" alt="${game.name}">
    <legend>${game.name}</legend>
  </figure>`;
  });
} else {
  gameList.innerHTML = '<p>We not have any game yet 😥</p>';
}

class Games {

}
