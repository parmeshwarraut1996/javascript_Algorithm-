const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var utility1 = require('./Utility.js');


function input() {
    userInput.question("Enter number  = ", (num) => {
       // utility1.toBinary(num);
      utility1.swap(num);
       
       

    });

} input();