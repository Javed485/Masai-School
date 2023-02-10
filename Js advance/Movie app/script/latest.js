let latestShows = [
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda.',
        image: './image/recomm/poster 1.png',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/recomm/poster 2.png',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/recomm/poster 3.png',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/recomm/poster 1.png',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/recomm/poster 1.png',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/recomm/poster 1.png',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/recomm/poster 1.png',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/recomm/poster 12.png',
        watchlistBtn: 'add to watchlist'
    },
    {
        title: 'aoashi',
        des: 'Ashito Aoi, a student, and Tatsuya Fukuda, an important coach, change the game of Japanese soccer.',
        image: './image/recomm/poster 11.png',
        watchlistBtn: 'add to watchlist'
    }
];

let cardContainer = document.querySelector('.m-container');

let createCards = function() {
    latestShows.forEach(function(el) {
        let card = document.createElement('div');
        card.className = 'card';

        let imgElement = document.createElement('img');
        imgElement.src = el.image;
        imgElement.className = 'card-img';

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let h2 = document.createElement('h2');
        h2.innerText = el.title;
        h2.className = 'name';

        let h6 = document.createElement('h6');
        h6.innerText = el.des;
        h6.className = 'des';

        let btn = document.createElement('button');
        btn.innerText = el.watchlistBtn;
        btn.className = 'watchlist-btn';

        cardBody.append(h2, h6, btn);
        card.append(imgElement, cardBody);
        cardContainer.append(card);
    });
}
createCards();



