const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var utility = require('./Utility.js');
var fileStream = require('fs');

var f = fileStream.readFileSync('numbers', 'utf8');
var arr = f.split(' ')
//for (var i = 0; i <= f.length; i++) {
  //  arr.push(parseInt(f[i]));
//}
var n = parseInt(arr.length);
console.log(arr);
utility.bubbleSort(n, arr);


