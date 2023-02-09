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
let cards = [];
for(let cardIndex=0; cardIndex<latestShows.length; cardIndex++){


let createCards = () => {
    let card = document.createElement('div');
    let imgElement = document.createElement('img');
    let cardBody = document.createElement('div');
    let h2 = document.createElement('h2');
    let h6 = document.createElement('h6');
    let btn = document.createElement('button');
    // Attaching all Elements
    imgElement.appendChild(document.createTextNode(''));  
    h2.appendChild(document.createTextNode(latestShows[cardIndex].name));
    h6.appendChild(document.createTextNode(latestShows[cardIndex].des));
    btn.appendChild(document.createTextNode(latestShows[cardIndex].watchlistBtn));
    cardBody.appendChild(h2);
    cardBody.appendChild(h6);
    cardBody.appendChild(btn);
    card.appendChild(cardBody);
    card.appendChild(imgElement);
    cardContainer.appendChild(card);
    
    imgElement.src = latestShows[cardIndex].image;
    // cardIndex++; 

    // Settinig Elements classname
    card.className = 'card';
    imgElement.className = 'card-img';
    cardBody.className = 'card-body';
    h2.className = 'name';
    h6.className = 'des';
    btn.className = 'watchlist-btn';

    cards.push(card);
    console.log(cards);   
}
createCards();
}


