const solution = 'CLOUD';// change this word as needed each time we play a new game. 
let currentRow = 0;
let currentTile = 0;

function submitGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.toUpperCase();

    if (guess.length !== 5) {
        showMessage('Please enter a 5-letter word.');
        return;
    }

    if (currentRow >= 6) {
        showMessage('Game over! No more guesses left.');
        return;
    }

    const row = document.getElementsByClassName('row')[currentRow];
    const tiles = row.getElementsByClassName('tile');

    for (let i = 0; i < 5; i++) {
        tiles[i].textContent = guess[i];

        if (guess[i] === solution[i]) {
            tiles[i].classList.add('correct');
        } else if (solution.includes(guess[i])) {
            tiles[i].classList.add('present');
        } else {
            tiles[i].classList.add('absent');
        }
    }

    currentRow++;
    guessInput.value = '';

    if (guess === solution) {
        showMessage('Congratulations! You guessed the word!');
    } else if (currentRow >= 6) {
        showMessage(`Game over! The word was ${solution}.`);
    }
}

function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
}
document.getElementById('guessButton').addEventListener('click', submitGuess);

function submitGuess() {
    const guessInput = document.getElementById('guessInput').value.toUpperCase();
    if (guessInput.length !== 5) {
        document.getElementById('message').innerText = 'Please enter a 5-letter word.';
        return;
    }

    // Find the first empty row
    const rows = document.querySelectorAll('.row');
    for (let row of rows) {
        const tiles = row.querySelectorAll('.tile');
        if (tiles[0].innerText === '') {
            // Fill the row with the guessed word
            for (let i = 0; i < 5; i++) {
                tiles[i].innerText = guessInput[i];
            }
            break;
        }
    }

    // Clear the input field
    document.getElementById('guessInput').value = '';
}

