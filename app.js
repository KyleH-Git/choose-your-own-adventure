const prompt = require('prompt-sync')();
// const username = prompt('What is your name? ');
// console.log(`Your name is ${username}`);

function getAnswer(){
    let answer;
    while(answer !== 'Y' || answer !== 'y' || answer !== 'N' || answer !== 'n'){
        answer = prompt('(Y/N)');
        if(answer === 'Y' || answer === 'y' || answer === 'N' || answer === 'n'){
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
        gameClass = prompt('Pick a class: 1 - Warrior, 2 - Mage, 3 - Rogue. ');
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
        console.log('You chose Warrior! Choose your adventure with Y/N!');
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
        console.log('You chose Mage! Choose your adventure with Y/N!');
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
        console.log('You chose Rogue! Choose your adventure with Y/N!');
        playerScore+=10;
        playerGold+=100;
        console.log('Sneaking through the city streets at night you see an adventurer walking down an alley. Would you like to pickpocket him?')
        if(getAnswer()){
            playerScore+=10;
            playerGold+=500;
            console.log('You pilfer 500 gold from the adventurer!');
            console.log('Do you attempt to steal the adventurer\'s weapon as well?');
            if(getAnswer()){
                playerScore-=10;
                console.log('The adventurer notices your efforts, and reports you to the guards. Attempt to flee?');
                if(getAnswer()){
                    playerScore+=100;
                    console.log('You flee the town, and are able to escape into the woods. Your days of thievery are just beginning...');
                    gameOver();
                } else {
                    playerScore+=50;
                    console.log('You are apprehended by the guards, and put into a cell to pay for your crime.')
                    console.log('Attempt to escape?');
                    if(getAnswer()){
                        playerScore+=10;
                        console.log('You successfully manage to pick the cell lock, and slink into the shadows.');
                        gameOver();
                    } else {
                        playerScore+=500;
                        console.log('Accepting your fate, you decide to only steal from the rich and give to the poor from now on.');
                        gameOver();
                    }
                }
            } else {
                playerScore +=100;
                console.log('You decide against robbing from the adventurer again, but see a dagger stickng out of a barrel nearby. Do you help yourself to the weapon?');
                if(getAnswer()){
                    playerScore+=50;
                    weaponGet = true;
                    console.log('You successfully pick up the dagger unseen, sticking it in your pouch.');
                    gameOver();
                } else {
                    playerScore+=10;
                    console.log('Skipping over the knife, content with your winnings from tonight, you retire to your thieves den to lay low.');
                    gameOver();
                }
            }
        } else {
            console.log('A noble thief such as yourself should be in an adventuring party. Heading to the guild you manage to fine a group looking for a Rogue.');
            console.log('Do you join them?');
            if(getAnswer()){
                playerScore+=100;
                console.log('Joining the party on their quest to slay a local Dragon, you feel content with your new path.');
                gameOver();
            } else {
                playerScore-=10;
                console.log('Refusing their offer, you continue your adventures solo.');
                gameOver();
            }
        }
        break;
    default:
        console.log('How did you get here? ');
}
