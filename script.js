let numberToGuess;
let numberOfTries = 0;

function startGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    numberOfTries = 0;

    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = numberOfTries;
    document.getElementById('restart-button').style.display = 'none';
    document.getElementById('guess-input').value = '';
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess-input').value);
    numberOfTries++;
    let feedbackMessage = '';

    if (isNaN(userGuess)) {
        feedbackMessage = 'Please enter a valid number.';
    } else if (userGuess < 1 || userGuess > 100) {
        feedbackMessage = 'Guess must be between 1 and 100.';
    } else if (userGuess < numberToGuess) {
        feedbackMessage = 'Too low, try again.';
    } else if (userGuess > numberToGuess) {
        feedbackMessage = 'Too high, try again.';
    } else {
        feedbackMessage = `Well done! You guessed the number ${numberToGuess} in ${numberOfTries} tries.`;
        document.getElementById('restart-button').style.display = 'block';
    }

    document.getElementById('feedback').textContent = feedbackMessage;
    document.getElementById('attempts').textContent = numberOfTries;
}

document.getElementById('guess-button').addEventListener('click', checkGuess);
document.getElementById('restart-button').addEventListener('click', startGame);

startGame();
