// Tried a lot of things at this point. Do I need a param? Do I need to assign Rock / Paper / Scissors to a value?
// Thank you guys this part is working now!!! 
// Made them all if statements!
const a = 'You win!';
const b = 'You lose!';
const c = 'Draw!';
// const playerScore = 
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    
    if (randomNum === 0) {
        return 'rock'
    } if (randomNum === 1) {
        return 'paper'
    } if (randomNum === 2) {
        return 'scissors'
    }
}
// Starting the playRound() here. I didn't need a pop up? I used parseInt but that did not seem to be the direction I was supposed to go.
// This is showing correctly in console.log(playRound)
/* 
It is correct but it isn't logically determining a winner. How do I set the params
for each iteration? 
Rock beats scissors, loses to paper, draws rock. 
Paper loses to scissors, ties paper. 
Scissors ties scissors.
*/

function playRound(playerSelection, computerSelection) {
    if ( playerSelection == 'rock' && computerSelection == 'rock'){
        return c;
    }
    else if ( playerSelection === 'paper' && computerSelection === 'rock'){
        return b;
    }
    else if ( playerSelection === 'scissors' && computerSelection === 'rock'){
        return a;
    }
    else if ( playerSelection === 'rock' && computerSelection === 'paper'){
        return b;
    }
    else if ( playerSelection === 'rock' && computerSelection === 'scissors'){
        return a;
    }
    else if ( playerSelection === 'paper' && computerSelection === 'paper'){
        return c;
    }
    else if ( playerSelection === 'paper' && computerSelection === 'scissors'){
        return b;
    }
    else if ( playerSelection === 'scissors' && computerSelection === 'paper'){
        return a;
    }
    else if ( playerSelection === 'scissors' && computerSelection === 'scissors'){
        return c;
    }
    
}



// I think I can equal pS and cS to 1 and then count it to 3 to display the winner of the game?
function playGame() {
    return playRound(playerSelection, computerSelection);

}



// I feel like these should go to the top of my code?

const playerSelection = prompt('Choose rock, paper, or scissors.').toLowerCase();
const computerSelection = getComputerChoice();
//const playRoundFive = playRound();
console.log(playerSelection);
console.log(computerSelection);
console.log(playGame());
console.log(playerScore);
// console.log(playGame())
// Giving undefined when user inputs capital letters.
// Also, it is popping up two prompts