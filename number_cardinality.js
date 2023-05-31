number_cardinality = (n) => {
    if (n % 10 == 0) {
        return "zero";
    } else if (n % 10 == 5) {
        return "five";
    } else if (n % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

// console.log(number_cardinality(100));
// console.log(number_cardinality(88));
// console.log(number_cardinality(155));
// console.log(number_cardinality(99));

module.exports = number_cardinality;