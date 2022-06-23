// Basic operations using JS...

// 1.) Get user input
firstNumber = window.prompt("What is your first number?:");
secondNumber = window.prompt("What is your second number?:");

// 2.) Parse user input as an integer
firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

// 3.) Get user operator
operator = window.prompt("What is your preferred operator?: [Choose from '+', '-', '*', '/']");

add = firstNumber + secondNumber;
subtract = firstNumber - secondNumber;
multiply = firstNumber * secondNumber;
divide = firstNumber / secondNumber;

// State conditions
if (operator === "+") {
    alert("Your result is: "+ add +".");
} else if (operator === "-") {
    alert("Your result is: "+ subtract +".");
} else if (operator === "*") {
    alert ("Your result is: "+ multiply +".");
} else if (operator === "/") {
    alert ("Your result is: "+ divide +".");
} else {
    alert ("Invalid Operator!");
}

