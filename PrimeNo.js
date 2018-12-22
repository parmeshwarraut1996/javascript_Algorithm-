const readline=require('readline');
const UserInput=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

var utility=require('./Utility');
var a=utility.primeNumbers();
console.log(a);
