const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var utility = require('./Utility.js');
var fileStream = require('fs');

var f = fileStream.readFileSync('filestring', 'utf8')
var arr = f.split(' ');
var n=arr.length;
console.log(arr);
    utility.insertionSortForString(n,arr);


