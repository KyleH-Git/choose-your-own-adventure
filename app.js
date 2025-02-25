const prompt = require('prompt-sync')();
// const username = prompt('What is your name? ');
// console.log(`Your name is ${username}`);


let gameClass = 0;
while(gameClass !== '1' || gameClass !== '2' || gameClass !== '3'){
        gameClass = prompt('Pick a class: 1 - Warrior, 2 - Mage, 3 - Rogue\n');
        if(gameClass === '1' || gameClass === '2' || gameClass === '3'){
            break;
        }
        console.log("Invalid selection, please pick a class!");
}

switch(gameClass){
    case '1':
        console.log('You chose Warrior!');
        break;
    case '2':
        console.log('You chose Mage!');
        break;
    case '3':
        console.log('You chose Rogue!');
        break;
    default:
        console.log('How did you get here?');
}
