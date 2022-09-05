const reverseString = function (string) {
    let length = string.length;
    let newString = "";
    for (let i = 0; i < length; i++) {
        newWord = string[length - 1 - i];
        newString = newString + newWord;
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
