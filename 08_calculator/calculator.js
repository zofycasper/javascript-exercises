const add = function (num1, num2) {
    return num1 + num2;
};

const subtract = function (num1, num2) {
    return num1 - num2;
};

const sum = function (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
};

const multiply = function (numbers) {
    let multiplies = 0;
    if (numbers.length != 0) {
        multiplies = 1;
    }

    for (let i = 0; i < numbers.length; i++) {
        multiplies = multiplies * numbers[i];
    }
    return multiplies;
};

const power = function (number, power) {
    let powered = 0;
    if (number != 0) {
        powered = 1;
    }
    for (let i = 0; i < power; i++) {
        powered = powered * number;
    }
    return powered;
};

const factorial = function (number) {
    let factorialed = 1;

    for (let i = 0; i < number; i++) {
        factorialed = factorialed * (number - i);
    }
    return factorialed;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
