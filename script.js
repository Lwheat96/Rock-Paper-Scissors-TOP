
function add2(num) {
    return num + 2;
}

console.log(add2(2));
// Tried a lot of things at this point. Do I need a param? Do I need to assign Rock / Paper / Scissors to a value?

function getComputerChoice() {
    Math.floor(Math.random() * 2);
    
    if (Math.floor(Math.random() * 2) === 0){
        return 'Rock';
    };
    if (Math.floor(Math.random() * 2) === 1){
        return 'Paper';
    };
    if (Math.floor(Math.random() * 2) === 2){
        return 'Scissors';
    };
}

console.log(getComputerChoice(1))