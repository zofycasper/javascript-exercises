const repeatString = function (string, num) {
    // let string = "hey";
    // let num = 10;
    let result = "";
    let error = "ERROR";
    if (num < 0) {
        return error;
    }

    for (let i = 0; i < num; i++) {
        result = result + string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
