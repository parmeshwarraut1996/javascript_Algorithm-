const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var utility1 = require('./Utility.js');

function input() {
    userInput.question("Enter amount to get Change = ", (amount) => {
        
            utility1.vending(amount);
        
    });
} input();

