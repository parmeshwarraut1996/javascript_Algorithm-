const readline = require('readline');
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var utility = require('./Utility.js');
var fileStream = require('fs');
function input() {
  var f = fileStream.readFileSync('numbers', 'utf8');
  var arr = f.split(' ');
  var a = arr.map(Number);
  console.log(a);
  var size = arr.length;
  utility.bubbleSort(size, a);


} input();