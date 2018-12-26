const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var utility1 = require('./Utility.js');

input();
function input() {
    userInput.question("Enter Temperature in Fahrenheit  = ", (f) => {
        userInput.question("Enter Temperature in celsius  = ", (c) => {
            utility1.temperaturConversion(f,c);
        });

    });

}