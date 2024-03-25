#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
import confirm from "@inquirer/confirm";
let quitProgram = true;
do {
    quitProgram = true;
    console.clear();
    console.log(chalk.bgYellow(chalk.bold("\n<<<<< SIMPLE COMMAND LINE CALCULATOR >>>>>\n")) +
        chalk.gray(chalk.italic("version: 1.0.0\n")) +
        chalk.gray(chalk.italic("Design By: Atiq Sarwar\n")));
    const answer = await inquirer.prompt([
        {
            name: "number1",
            type: "number",
            message: "Plese enter the first number: ",
        },
        {
            name: "number2",
            type: "number",
            message: "Plese enter the second number: ",
        },
        {
            name: "operator",
            type: "list",
            message: "Plese select the operator: ",
            choices: ["+", "-", "*", "/", "%"],
        },
    ]);
    let num1 = answer.number1;
    let num2 = answer.number2;
    let opt = answer.operator;
    switch (opt) {
        case "+":
            console.log(chalk.yellowBright(`\n${num1} ${opt} ${num2} = ${num1 + num2}\n`));
            break;
        case "-":
            console.log(chalk.yellowBright(`\n${num1} ${opt} ${num2} = ${num1 - num2}\n`));
            break;
        case "*":
            console.log(chalk.yellowBright(`\n${num1} ${opt} ${num2} = ${num1 * num2}\n`));
            break;
        case "/":
            console.log(chalk.yellowBright(`\n${num1} ${opt} ${num2} = ${num1 / num2}\n`));
            break;
        case "%":
            console.log(chalk.yellowBright(`\n${num1} ${opt} ${num2} = ${num1 % num2}\n`));
            break;
    }
    let restart = await confirm({
        default: true,
        message: "Do you want to quit the simple calculator?",
    });
    quitProgram = restart.valueOf();
} while (!quitProgram);
