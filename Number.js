const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var num;
var utility = require('./Utility.js');

var N = 1;
n = +process.argv[2];
console.log(n);

for (var i = 1; i <= n; i++) {
    N = N * 2;

}
console.log(N);

var min = 0;
var high = N;
var mid = Math.round((high - min) / 2);
console.log("Enter value between " +min+ " and " +high);
guessNumber(min, mid, high);
function guessNumber(min, mid, high) {
    console.log(" mid =  " + mid);
    console.log("Is your number higher than mid then press 1 = " + mid);
    console.log("Is you lower than mid then press 2 = " + mid);
    userInput.question("Enter choice = ", (ch) => {
        recursive(ch)
    });
    function recursive(ch) {
        if (ch == 1) {
            min = mid;
            mid = Math.round((high - min) / 2);
            guessNumber(min, mid, high);
        }
        if (ch == 2) {

            high = mid;
            mid = Math.round((high - min) / 2);
            guessNumber(min, mid, high);
        }
        if (ch == 3) {
            console.log("Your number is " + mid);

        }
        
        
        console.log("Guessed number is" + mid);

    }
}
