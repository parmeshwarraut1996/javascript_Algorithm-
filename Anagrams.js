const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var utility = require('./Utility.js');
userInput.question("Enter first  string = ", (str1) => {
    userInput.question("Enter  second string = ", (str2) => {
        utility.checkAnagramsString(str1, str2);
    })
});