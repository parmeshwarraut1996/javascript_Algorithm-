var utility = require('./Utility.js');

function input() {
    m = +process.argv[2];
    d = +process.argv[3];
    y = +process.argv[4];
    

    utility.dayOfWeek(m,d,y);
} input();