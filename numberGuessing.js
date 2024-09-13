const prompt = require('prompt-sync')();
function startGame(){
    let max = 100;
    let min = 1;
    let random = Math.floor(Math.random()*(max - min + 1) + min);
    console.log("Welcome to the number guessing game ");
    console.log(`You will have to guess the number generated from the computer between ${min} and ${max} `);
    let attempts = 5;
    console.log(`You have ${attempts} attempts to guess`);
    while(attempts > 0){
        const intake = prompt(`Enter a number between ${min} and ${max}: `);
        let input = parseInt(intake);
        if(isNaN(input) || input > max || input < min){
            console.log(`Enter a valid number between ${min} and ${max}`);
            continue;
        }
        if(input == random){
            console.log(`Congratulation!!!! You have guessed the correct number`);
            return;
        }
        else{
            attempts--;
            if(attempts == 0){
                console.log("You have exhausted your attempts...");
            }
            else{
                console.log(input > random?"Too High...Try again" : "Too Low....Try again");
                console.log(`You have ${attempts} left`);
            }
        }

    }

}
startGame();