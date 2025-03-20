const sumAll = function(x, y) {
    if ((x < 0) || (y < 0) ||                           // if x and/or y is negative
        !Number.isInteger(x) || !Number.isInteger(y)) { // or not a number or integer
        return "ERROR";
    } 
    if (x > y) { // if larger number is first
        [x, y] = [y, x]; // swap numbers
    }

    let sum = 0;
    for (i = x; i<= y; i++) { // iterate through range, including given values
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
