const leapYears = function(year) {
 if ((year % 4 === 0) && (year % 100 !== 0)) {// if year is divisible by 4 but not a century year
    return true;
} else if ((year % 100 === 0) && (year % 400 === 0)) { // century year divisible by 400
    return true;
} else {
    return false;
}
};

// Do not edit below this line
module.exports = leapYears;
