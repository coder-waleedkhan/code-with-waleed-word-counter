#! /usr/bin/ node



// improrting inquirer and chalk packages

import inquirer from "inquirer";
import chalk from "chalk"

// display a colourful welcome message
console.log(chalk.bold.cyanBright("\n \t\t Code with Waleed - Worfd Counter"));
console.log("=".repeat(60));

// prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence abcd",
    }
]);

// Trimming the sentence and Splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");

// analysis of user input sentence

console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));


