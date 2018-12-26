var utility = require('./Utility.js');
input();
function input() {
    m = +process.argv[2];
    d = +process.argv[3];
    y = +process.argv[4];
    

    utility.dayOfWeek(m,d,y);
}