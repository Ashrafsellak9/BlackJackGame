let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;

let cards = [firstCard, secondCard];

let hasBlackjack = false;
let isAlive = true;
let message = "";

let sum = cards[0] + cards[1];

const startGame = () => {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
        isAlive = true;
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackjack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    messageEl.textContent = message;
}

const newCard = () => {

}