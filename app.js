const prompt = require('prompt-sync')();
// const username = prompt('What is your name? ');
// console.log(`Your name is ${username}`);

function getAnswer(){
    let answer;
    while(answer !== 'Y' || answer !== 'y' || answer !== 'N' || answer !== 'n'){
        answer = prompt('(Y/N)');
        if(answer !== 'Y' || answer !== 'y' || answer !== 'N' || answer !== 'n'){
            break;
        }
        console.log("Invalid answer, please answer Y/N.");
    }
    if(answer === 'Y' || answer === 'y'){
        return true;
    }
    return false;
}

function gameOver(){
    console.log(`Thank you for playing!\nYour total gold aquired was ${playerGold}, and your final score was ${playerScore}`);
}

let gameClass = 0;
while(gameClass !== '1' || gameClass !== '2' || gameClass !== '3'){
        gameClass = prompt('Pick a class: 1 - Warrior, 2 - Mage, 3 - Rogue\n');
        if(gameClass === '1' || gameClass === '2' || gameClass === '3'){
            break;
        }
        console.log("Invalid selection, please pick a class!");
}

let playerGold = 0; 
let playerScore = 10;

let mouseHelp = false;
let weaponGet = false;


switch(gameClass){
    case '1':
        console.log('You chose Warrior!');
        console.log('As a warrior fresh off of a quest you return to town. Would you like to check in at the guild?');
        if(getAnswer()){
            console.log('You approach the guild. Entering the beaten doors, you approach the quest counter and turn in your spoils.\nThe reward was 500 gold!');
            playerGold += 500;
            console.log(`You now have ${playerGold} gold.`);
            console.log('The receptionists asks if you would like to spend the night at the inn for 100g and receive a new quest in the morning.')
            if(getAnswer()){
                playerScore+=10;
                console.log('You spend a restful night at the inn. The receptionist offers you a quest to slay a dragon when you arrive on the ground floor.\n Would you like to accept?');
                if(getAnswer()){
                    playerScore+=10;
                    console.log('On your way out of town, you see a weapon shop that had not caught your eye before. Enter and purchase a new sword?');
                    if(getAnswer()){
                        playerScore+=10;
                        weaponGet = true;
                        playerGold -= 200;
                        console.log('Entering the store, you pay 200 gold to purchase a new longsword. How fancy!');
                    }
                    console.log('You exit the town, and begin the long journey towards the dragons lair. Would you like to attempt a shortcut through the woods?');
                    if(getAnswer()){
                        playerScore+=10;
                        console.log('Going through the woods, you\'re able to get to the dragons lair before it left to attack the town!');
                        console.log('Attempt to fight the dragon?');
                        if(getAnswer){
                            if(weaponGet){
                                playerScore+=50;
                                console.log('With the strength granted to you by your new sword, you are able to strike the Dragon down quickly and cleanly. The town will surely thank you for your efforts.')
                                console.log('You also find the dragons horde of treasure!')
                                playerGold += 1000;
                                gameOver();
                            } else {
                                playerScore+=5;
                                console.log('The battle with the dragon is a long one, with your sword breaking on you at the end. You trade blows, both collapsing in the end. At least the town is safe.');
                                gameOver();
                            }
                        } else {
                            playerScore-=10;
                            console.log('You abandon the town to it\'s fate, and slink off to the wilderness, revelling in your cowardice');
                            gameOver();
                        }
                    } else {
                        playerScore+=10;
                        console.log('As you journey across the road towards the dragon\'s lair you see a mouse laying in the road. Do you offer it aid?')
                        if(getAnswer()){
                            playerScore+=50;
                            mouseHelp = true;
                            console.log('Offering the mouse a biscuit and some water, it soon comes to before scurrying off. It will remember this!')
                        }
                        console.log('As you apporach the dragons lair, you see it emerge ready to lay waste to the town. Attempt to fight the dragon?')
                        if(getAnswer()){
                            if(weaponGet){
                                playerScore+=10;
                                console.log('With your new sword, you are able to fight the dragon on even footing. You eventually land a strike true, and slay the beast! The town will forever be in your debt.');
                                gameOver();
                            }
                            else{
                                playerScore-=10;
                                console.log('The dragon makes quick work of you before flapping it\'s wings, flying off to destroy the town. If only you had a better weapon!');
                                gameOver();
                            }
                        } else {
                            playerScore+=100;
                            console.log('Running away in cowardice, you hear a small squeak. Looking over your shoulder as you flee, you see the mouse bite and kill the dragon instantly. Better lucky then good!');
                            gameOver();
                        }
                    }
                } else {
                    playerScore-=10;
                    console.log('Blowing off the quest, you decide to take it easy in town. That afternoon a clamour errupts as the dragon you ignored launches it\'s attack on the town. Oh no!');
                    gameOver();
                }
            } else {
                playerScore+=5;
                console.log('You ignore the receptionists offer and decide to head home. Hopefully the quest wasn\'t going to be important!');
                gameOver();
            }
        } else {
            playerScore += 5;
            console.log('Ignoring the guild, you wander through the streets at night, with the eery feeling that someone is following you. Do you try and run?');
            if(getAnswer()){
                console.log('You sprint off, metal clattering as you manage to escape the shadow following you. Unfortunately, you have dropped all of your equipment!');
                gameOver();
            } else {
                playerScore+=10;
                console.log('You stand and fight the thief, cleaving him in two as he approached you from the shadows. You are arrested for your crime, but at least you weren\'t robbed!');
                gameOver();
            }
        }
        break;
    case '2':
        console.log('You chose Mage!');
        playerScore+10;
        console.log('Would you like to purchase a libram?');
        if(getAnswer()){
            playerScore+=10;
            playerGold-=500;
            console.log('As a mage you stay at the Wizards college and study your librams all day. No adventuring for you.');
            gameOver();
        } else {
            playerScore+=200;
            console.log('With the money you saved from not purchasing a Libram, you go out for a night on the town!');
            gameOver();
        }
        break;
    case '3':
        console.log('You chose Rogue!');
        break;
    default:
        console.log('How did you get here?');
}
