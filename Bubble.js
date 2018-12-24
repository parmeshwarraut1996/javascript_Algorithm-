const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var utility1 = require('./Utility.js');

input();
function input() {
    userInput.question("How many elements enter = ", function (n) {
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

            utility1.bubbleSort(n, arr);
        }
    }
}





