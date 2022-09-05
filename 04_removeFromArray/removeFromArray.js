const removeFromArray = function () {
    let array = arguments[0];
    let argLength = arguments.length;
    let arrLength = array.length;

    for (let j = 1; j < argLength; j++) {
        for (let i = 0; i < arrLength; i++) {
            if (array[i] === arguments[j]) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
