const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function input(){  
var utility1 = require('./Utility.js');
    userInput.question("Enter amount to get Change = ", (amount) => {
        
            utility1.vending(amount);
//            userInput.close();
        
    });

}input();
