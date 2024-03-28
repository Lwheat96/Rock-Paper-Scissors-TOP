
function add2(num) {
    return num + 2;
}

console.log(add2(2));
// Tried a lot of things at this point. Do I need a param? Do I need to assign Rock / Paper / Scissors to a value?

function getComputerChoice() {
    Math.floor(Math.random() * 3);
    
    if (Math.floor(Math.random() * 3) === 0){
        return 'Rock';
    };
    if (Math.floor(Math.random() * 3) === 1){
        return 'Paper';
    };
    if (Math.floor(Math.random() * 3) === 2){
        return 'Scissors';
    };
}

console.log(getComputerChoice())