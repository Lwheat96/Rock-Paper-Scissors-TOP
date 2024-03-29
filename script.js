
function add2(num) {
    return num + 2;
}

console.log(add2(2));
// Tried a lot of things at this point. Do I need a param? Do I need to assign Rock / Paper / Scissors to a value?
// Thank you guys this part is working now!!! 

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    
    if (randomNum === 0) {
        return 'Rock'
    } if (randomNum === 1) {
        return 'Paper'
    } if (randomNum === 2){
        return 'Scissors'
    }
}

console.log(getComputerChoice())