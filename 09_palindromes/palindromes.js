const palindromes = function (string) {
    let words = Array.from(string.toLowerCase());
    let newString = [];

    for (let i = 0; i < words.length; i++) {
        if (
            words[i] != " " &&
            words[i] != "!" &&
            words[i] != "," &&
            words[i] != "."
        ) {
            newString.push(words[i]);
        }
    }

    let length = newString.length;
    let mid = Math.floor(length / 2);
    let count = 0;
    for (let i = 0; i < mid; i++) {
        if (newString[i] == newString[length - 1 - i]) {
            count++;
        }
    }
    if (count == mid) {
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = palindromes;
