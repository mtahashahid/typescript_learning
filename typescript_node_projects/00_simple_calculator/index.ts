#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Enter first number: ",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "Enter second number: ",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "Choose an operator: ",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// operator checking and performing calculation
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  if (answer.secondNumber !== 0) {
    console.log(answer.firstNumber / answer.secondNumber);
  } else {
    console.log(
      "Cannot divide by zero. Please enter a non-zero second number."
    );
  }
} else {
  console.log("PLease select a valid operator.");
}
