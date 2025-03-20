const reverseString = function(string) {
    var newString  = "";

    for (i = string.length - 1; i >= 0; i--) {
        newString += string[i]; // add last character of string to newString, and continue backwards
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
