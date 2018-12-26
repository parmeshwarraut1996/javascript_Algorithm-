const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var utility1 = require('./Utility.js');


function input() {
    P = +process.argv[2];
    Y= +process.argv[3];
    R = +process.argv[4];
    utility1.monthlyPayment(P,Y,R);



} input();