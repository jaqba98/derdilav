class Games {
  constructor() {
    this.games = [
      // { class: 'flex100', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
      // { class: 'flex50', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
      // { class: 'flex50', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
      // { class: 'flex25', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
      // { class: 'flex25', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
      // { class: 'flex25', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
      // { class: 'flex25', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
      // { class: 'flex25', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
      // { class: 'flex25', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
      // { class: 'flex25', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' },
      // { class: 'flex25', src: 'https://ocdn.eu/images/pulscms/Njk7MDA_/911e000e1049a96a69232a90e0d8f856.jpg', name: 'Wiedźmin 3' }
    ];
    this.gameList = document.getElementById('gameList');
  }

  generate() {
    this.games.length > 0 ?
        this.generateGames() :
        this.generateInformation();
  }

  generateGames() {
    this.games.forEach(game => {
      // noinspection JSUnresolvedVariable
      this.gameList.innerHTML += `<figure class="${game.class}">
        <img src="${game.src}" alt="${game.name}">
        <legend>${game.name}</legend>
        </figure>`;
    });
  }

  generateInformation() {
    const p = document.createElement('p');
    const node = document.createTextNode('We not have any game yet');
    p.appendChild(node);
    this.gameList.appendChild(p);
  }
}

const games = new Games();

games.generate();