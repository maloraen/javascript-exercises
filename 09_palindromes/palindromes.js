const palindromes = function (str) {
    let noPunct = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"\s]/g, ""); // remove punction and special characters from string
    let reversedStr = noPunct.split('').reverse().join(''); // reverse string without special characters
    return reversedStr.toLowerCase() === noPunct.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
