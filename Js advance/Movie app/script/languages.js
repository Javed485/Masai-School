let languages = [
    {
        title: 'Hindi',
        image: './image/language/language 1.webp',
    },
    {
        title: 'English',
        image: './image/language/language 2.webp',
    },
    {
        title: 'Tamil',
        image: './image/language/language 3.webp',
    },
    {
        title: 'Telugu',
        image: './image/language/language 4.webp',
    },
    {
        title: 'Malayalam',
        image: './image/language/language 5.webp',
    },
    {
        title: 'Bengali',
        image: './image/language/language 6.webp',
    },
    {
        title: 'Marathi',
        image: './image/language/language 7.webp',
    },
    {
        title: 'Kannada',
        image: './image/language/language 8.webp',
    },
    {
        title: 'Odia',
        image: './image/language/language 9.webp',
    },
    {
        title: 'Japanese',
        image: './image/language/language 10.webp',
    },
    {
        title: 'Korean',
        image: './image/language/language 11.webp',
    }
];

let languageContainer = document.querySelector('.language-container');

let languagesCards = function() {
    languages.forEach(function(el) {
        let card = document.createElement('div');
        card.className = 'channel-card';

        let imgElement = document.createElement('img');
        imgElement.src = el.image;
        imgElement.className = 'channel-img';

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let h2 = document.createElement('h2');
        h2.innerText = el.title;
        h2.className = 'language-name';

        cardBody.append(h2);
        card.append(imgElement, cardBody);
        languageContainer.append(card);
    });
}
languagesCards();



