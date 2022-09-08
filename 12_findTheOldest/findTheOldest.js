const findTheOldest = function (people) {
    const oldest = people.reduce((a, b) => {
        if (getAge(a) > getAge(b)) {
            return a;
        } else return b;
    });
    return oldest;
};

function getAge(a) {
    if (!a.yearOfDeath) {
        a.yearOfDeath = new Date().getFullYear();
    }
    let age = a.yearOfDeath - a.yearOfBirth;
    return age;
}

// Do not edit below this line
module.exports = findTheOldest;
