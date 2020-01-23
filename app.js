// Wire up event handlers
document.querySelector('#start-game').addEventListener('click', startNewGame);
document.querySelectorAll('.the-card').forEach((item) => {
  item.addEventListener('click', (event) => {
    // Show flip animation
    event.target.parentElement.parentElement.classList.toggle('flipped');

    // Run logic to handle the user action
    var cardId = item.querySelector(".card-back .pokemon-pic").getAttribute("data-card-id");
    handleCardFlip(cardId);
  });
});

let selectedCardId = null;
let cards = [{
  id: 1,
  url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
  isMatched: false
}, {
  id: 2,
  url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
  isMatched: false
}, {
  id: 3,
  url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png',
  isMatched: false
}, {
  id: 4,
  url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
  isMatched: false
}, {
  id: 5,
  url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png',
  isMatched: false
}, {
  id: 6,
  url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png',
  isMatched: false
}, {
  id: 7,
  url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png',
  isMatched: false
}, {
  id: 8,
  url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png',
  isMatched: false
}, {
  id: 9,
  url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png',
  isMatched: false
}, {
  id: 10,
  url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
  isMatched: false
}, {
  id: 11,
  url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png',
  isMatched: false
}, {
  id: 12,
  url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
  isMatched: false
}
];

function startNewGame() {
  console.log('clicked start game');
  resetCardState();
  // TODO shuffleCards();
  addCardsToPage();
}

// TODO Refactor this with new approach of storing state!
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/**
 * Distributes the 12 cards into the 24 elements on the page
 */
function addCardsToPage() {
  for (let i = 0; i < 24; i++) {
    var pokemonPic = document.querySelector(`#card-${i + 1} .card-back`).firstChild;

    // Only 12 pictures, need to distribute them over 24 cards
    // TODO How can we randomize the card order instead of this? Can we make use of the shuffle method above?
    // Also, light reading on data attributes: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
    if (i > 11) {
      pokemonPic.setAttribute("src", cards[i - 12].url);
      pokemonPic.setAttribute("data-card-id", cards[i - 12].id);
    } else {
      pokemonPic.setAttribute("src", cards[i].url);
      pokemonPic.setAttribute("data-card-id", cards[i].id);
    }
  }
}

/**
 * Sets all cards to not-matched
 */
function resetCardState() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].isMatched = false;
  }
}

/**
 * Handles the event of a user flipping a card
 * @param {number} cardId The card that was flipped
 */
function handleCardFlip(cardId) {
  // TODO How do we handle a user flipping a card that was already flipped?
  // First flip, just hold onto the id
  if (!selectedCardId) {
    selectedCardId = cardId;
  }

  // Second flip, need to compare to first flip
  else {
    if (selectedCardId == cardId) {
      console.log("MATCH!")
      selectedCardId = null;
      checkForGameOver();
    } else {
      console.log("NO MATCH!")
      selectedCardId = null;
      // TODO Need to flip both cards back over
    }
  }
}

function checkForGameOver() {
  // TODO What can we use to determine if all the cards were matched?
}