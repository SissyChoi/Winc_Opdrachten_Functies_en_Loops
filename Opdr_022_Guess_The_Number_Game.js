let guessNumber = null;
let userName;
let minNumber = 0;
let maxNumber = 25;

while (userName === undefined || userName === null || userName.length === 0) {
  userName = prompt("Welcome! What is your name?");
}

alert("Hey " + userName);

let startGame = function () {
    const playerWins = Math.floor(Math.random() * maxNumber);
    let numberInput = prompt("Enter a number between 0 and 25 to start guessing...");
    let i = 0;
    while (numberInput !== playerWins && i < 5) {
        numberInput = prompt("That is wrong, try again!");
        i++;
    };

    alert("Congrats, you have won the game!");
    alert("Bye " + userName + ", see you!");
};
startGame();
