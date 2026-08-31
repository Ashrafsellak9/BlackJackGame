let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let hasBlackjack = false;
let isAlive = true;
let message = "";

let sum = firstCard + secondCard;

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
