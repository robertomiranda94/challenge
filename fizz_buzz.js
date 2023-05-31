function fizz_buzz(n) {
    let listaNumeros = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            listaNumeros.push("FizzBuzz");
        } else if (i % 3 == 0) {
            listaNumeros.push("Fizz");
        } else if (i % 5 == 0) {
            listaNumeros.push("Buzz");
        } else {
            listaNumeros.push(i);
        }
    }
    return listaNumeros;
}

// console.log(fizz_buzz(2));
// console.log(fizz_buzz(5));
// console.log(fizz_buzz(9));
// console.log(fizz_buzz(15));

module.exports = fizz_buzz;