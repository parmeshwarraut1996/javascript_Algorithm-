var readline = require('readline');
//var utility = require("./A_utility");
var UserInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var N = 1;
var min = 0;

var inp = 0;

 n =+process.argv[2];



for (var i = 1; i <= n; i++) {
    N = N * 2;

}
console.log("Assume a number between 0 to " + N + "");
var max = N;
var mid = min + max / 2;
var min = 0;
number(min, max, mid);

function number(min, max, mid) {

    console.log(" 3 :- Yes," + mid + " is my number "); +
    console.log(" 1 :- Higher than mid =  " + mid);
    console.log(" 2 :- Lower than  mid " + mid);
    UserInput.question(" Enter your choice", (inp) => {
        input(inp);
    });

    function input(inp) {

        if (inp == 1) {
            min = mid;
            mid = Math.floor((min + max) / 2);
            number(min, max, mid)
        }
        if (inp == 2) {
            max = mid;
            mid = Math.floor((min + max) / 2);
            number(min, max, mid)
        }

        if (inp == 3) {
            console.log(+mid + " is your number");
        }
    }
}