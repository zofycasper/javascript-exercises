const sumAll = function (num1, num2) {
    let error = "ERROR";
    if ((num1 || num2) < 0) {
        return error;
    } else if (typeof num1 != "number" || typeof num2 != "number") {
        return error;
    } else if (num2 >= num1) {
        let sum = 0;
        let numBetween = num2 - num1;

        for (let i = 0; i <= numBetween; i++) {
            sum = sum + (num1 + i);
        }
        return sum;
    } else {
        let sum = 0;
        let numBetween = num1 - num2;

        for (let i = 0; i <= numBetween; i++) {
            sum = sum + (num2 + i);
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
