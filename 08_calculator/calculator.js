const add = function (num1, num2) {
    return num1 + num2;
};

const subtract = function (num1, num2) {
    return num1 - num2;
};

const sum = function (numbers) {
    const sum = numbers.reduce((total, number) => {
        return total + number;
    }, 0);
    return sum;
};

const multiply = function (numbers) {
    return numbers.length
        ? numbers.reduce((total, number) => total * number)
        : 0;
};

const power = function (number, power) {
    return Math.pow(number, power);
};

const factorial = function (number) {
    let product = 1;

    for (let i = 0; i < number; i++) {
        product *= number - i;
    }
    return product;
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
