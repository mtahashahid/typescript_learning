#! /usr/bin/env node
import inquirer from "inquirer";
async function playGame() {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    const answer = await inquirer.prompt([{
            message: "Enter a number between 1 - 10: ",
            type: 'number',
            name: 'guessedNumber'
        }]);
    if (answer.guessedNumber === randomNumber) {
        console.log("You Won, Congratulations! 🎉 🏆");
    }
    else {
        console.log("You lose, The correct number was " + randomNumber);
        const tryAgain = await inquirer.prompt({
            type: 'confirm',
            message: 'Do you want to try again?',
            name: 'tryAgain'
        });
        if (tryAgain.tryAgain) {
            playGame(); // Restart the game
        }
        else {
            console.log("Thanks for playing! Goodbye!");
        }
    }
}
playGame(); // Start the game initially
