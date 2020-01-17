// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        console.log(data);
        Object.entries.forEach
    })

function createCard(obj) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const autspan = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgDiv);
    imgDiv.appendChild(img);
    author.appendChild(autspan);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgDiv.classList.add('img-container');


    return card;
}


const cardContent = document.querySelector('cards-container');
cardContent.appendChild(createCard(obj));