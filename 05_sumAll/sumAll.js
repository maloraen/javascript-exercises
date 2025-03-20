const sumAll = function(x, y) {
    let sum = 0;

    if ((x < 0) || (y < 0) || !Number.isInteger(x) || !Number.isInteger(y)) { // if x and/or y is negative or not a number or integer
        return "ERROR";
    } else if (x < y) { // if the second parameter is the larger one
        for (i = x; i <= y; i++) {
            sum += i;
        }
    } else if (y < x) { // if the first parameter is the larger one
        for (i = y; i <= x; i++) {
            sum += i;
        }
    } 

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
