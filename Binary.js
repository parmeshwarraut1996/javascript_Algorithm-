const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var utility1 = require('./Utility.js');


function input() {
    userInput.question("How many elements enter in array = ", function (n) {
        addValues(n);

    });

}

function addValues(n) {
    var arr = [];
    var len = parseInt(n);

    add(len);

    function add(len) {
        if (len > 0) {
            userInput.question("Enter elements = ", (i) => {
                arr.push(parseInt(i));
                len--;
                add(len)
            });

        }
        else {
            userInput.question("Enter element to search = ",(target)=>
            {
                utility1.binarySearch(arr,target);
            });
        }
    }



} input();

