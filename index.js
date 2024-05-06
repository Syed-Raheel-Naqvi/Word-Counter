#! /usr/bin/env node
//Import the 'inquirer' module, which is a command line interface for Node.js 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.italic.bgBlue("\n\t\t WORD COUNTER \n"));
// Declare a constant  'awnser' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.bold("Enter your sentence to count the words: ")
    }
]);
const words = answers.Sentence.trim().split(" ");
//print the array of words to the console
//console.log(words);
if (!answers.Sentence) {
    console.log(chalk.bold.red("\nThere were no sentence entered: Please enter the sentence!"));
}
//Print the word count of the sentence to the console
else {
    console.log((`\n\tYour sentence word count is: `) + chalk.cyanBright(`${words.length}`));
}
