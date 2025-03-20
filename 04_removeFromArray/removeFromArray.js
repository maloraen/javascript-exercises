const removeFromArray = function(array, ...args) {
    return array.filter(remove => !args.includes(remove));
};

// Do not edit below this line
module.exports = removeFromArray;
