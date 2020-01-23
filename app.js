const flipCard = document.querySelectorAll('.pokemon-front');
const backCard = document.getElementById('game-board');
const start = document.querySelector('#start-game');
const card = document.querySelectorAll('.the-card');
// const backOfCard = document.getElementsByClassName('card-back');
let card1 = null;
let card2 = null;
let score = 0;
let cardsToWin = 24;
let game = false;

let pokemonURLS = [
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
];

start.addEventListener('click', gameState);
// flipCard.addEventListener('click', playRound);
var els = document.querySelectorAll('.card-back img');

function changePokemonUrls() {
  let tiles = [];
  // grab a random card from pokemonURLS
  for (let url of pokemonURLS) {
    tiles.push(url, url);
  }
  shuffle(tiles);

  for (var i = 0; i < els.length; i++) {
    els[i].setAttribute('src', tiles.shift());
  }
}

function gameState(e) {
  console.log('clicked start game');
  game = true;

  resetGame();
  for (let card of flipCard) {
    card.addEventListener('click', function(e) {
      e.target.parentElement.parentElement.classList.toggle('flipped');
    });
  }
  changePokemonUrls();
}

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

function resetGame() {
  for (let i = 0; i < card.length; i++) {
    card[i].classList.remove('flipped');
  }
}

document.querySelectorAll('.pokemon-front').forEach((item) => {
  item.addEventListener('click', (event) => {
    console.log('playing the game');
  });
});

function playRound() {
  console.log(e + 'playing the game');
}

// for (let i of card) {
//   card.addEventListener("click", handleCardClick);
// }

// function handleCardClick(e) {
//   if (!e.target.classList.contains("front")) return;

//   let currentCard = e.target.parentElement;

//   if (!card1 || !card2) {
//     if (!currentCard.classList.contains("flipped")) {
//       setScore(currentScore + 1);
//     }
//     currentCard.classList.add("flipped");
//     card1 = card1 || currentCard;
//     card2 = currentCard === card1 ? null : currentCard;
//   }

//   if (card1 && card2) {
//     let gif1 = card1.children[1].children[0].src;
//     let gif2 = card2.children[1].children[0].src;

//     if (gif1 === gif2) {
//       cardsFlipped += 2;
//       card1.removeEventListener("click", handleCardClick);
//       card2.removeEventListener("click", handleCardClick);
//       card1 = null;
//       card2 = null;
//     } else {
//       setTimeout(function () {
//         card1.classList.remove("flipped");
//         card2.classList.remove("flipped");
//         card1 = null;
//         card2 = null;
//       }, 1000);
//     }
//   }

//   if (cardsFlipped === numCards) endGame();
// }
