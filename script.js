
function add2(num) {
    return num + 2;
}

console.log(add2(2));
// Tried a lot of things at this point. Do I need a param? Do I need to assign Rock / Paper / Scissors to a value?
// Thank you guys this part is working now!!! 
// Made them all if statements!

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    
    if (randomNum === 0) {
        return 'Rock'
    } if (randomNum === 1) {
        return 'Paper'
    } if (randomNum === 2) {
        return 'Scissors'
    }
}

// Starting the playRound() here. I didn't need a pop up? I used parseInt but that did not seem to be the direction I was supposed to go.
// This is showing correctly in console.log(playRound)

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        return 'You tied!'
    }
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You lose!'
    }
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You Win!'
    }
}

function playGame(playRound) {
    
}

// I feel like these should go to the top of my code?

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
