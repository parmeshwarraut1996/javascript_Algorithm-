var utility = require('./Utility.js');
const arr = [32, 5, 65, 54, 8, 79, 6, 1, 3, 4]
function input() {
    console.log("Unsorted elements in array are :- " + arr);
    var output = utility.mergeSort(arr);
    console.log("Elements are sort using merge sort :- " + output);

} input();