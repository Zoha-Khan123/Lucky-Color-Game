#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk';


//===========================Lucky Color Game ===============================================


console.log(chalk.bold.cyanBright("\n==================================================="));
console.log(chalk.bold.cyanBright("\n  🌟   ❤️ 💚 💙  Lucky Color Game  ❤️ 💚 💙   🌟"));
console.log(chalk.bold.cyanBright("\n==================================================="));
let Project = true;
while (Project) {
    let Name = await inquirer.prompt([{
        type: "input",
        name: "luck",
        message: (chalk.bold.yellowBright("What is your name?")),
    }
    ])


    let color = ["Red", "Blue", "Pink", "Yellow", "Green", "Gray", "Golden", "Darkblue", "Brown", "Aqua", "Purple", "Orange", "White", "Black", "Silver", "Gold", "Olive", "Lavender", "Indigo", "Violet"]
    let nameLength = (Name.luck.length);
    let luckycolor = color[nameLength];
    console.log(chalk.bold.greenBright("Your lucky color is " + luckycolor + " 👀 💫 ✨ ☀️ "));

    let tryy = await inquirer.prompt([
        {
            type: "confirm",
            name: "again",
            message: (chalk.bold.yellowBright("Do you want to try another time?")),
        }
    ])
    if (tryy.again === false) {
        break;
    }
}

console.log(chalk.bold.cyanBright("\n==================================================="));
console.log(chalk.bold.cyanBright("\n  🌟   ❤️ 💚 💙  Thank You  ❤️  💚 💙   🌟"));
console.log(chalk.bold.cyanBright("\n==================================================="));