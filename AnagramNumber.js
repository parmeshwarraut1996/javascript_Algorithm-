const readline=require('readline');
var utility=require('./Utility.js');
var a=utility.primeNumbers();

for(var i=0;i<a.length;i++)
{
    for(var j=0;j<a.length;j++)
    {
        var b=i.toString();
        var c=j.toString();
   var prime=utility.primeAnagram(b,c);   
    
    }
}
console.log(prime);


