const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var utility = require('./Utility.js');
var fileStream=require('fs');

var f=fileStream.readFileSync('filestring','utf8')
var arr=f.split(' ');
console.log(arr);
var target;
userInput.question("Enter string to search in file = ",(target)=>
    {
        console.log(target);
        
        utility.binarySearchForString(arr,target);



    });
