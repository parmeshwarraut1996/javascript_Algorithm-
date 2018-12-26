const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var utility1 = require('./Utility.js');

input();
function input() {
    userInput.question("Enter number  = ", (c) => {
        utility1.sqrtOfNumber(c);
       
    });

}