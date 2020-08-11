// Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial(num) {
    let f = 1;
    for (let i = 2; i <= num; i++) {
        f *= i;
    }
    return f;
}

console.log(factorial(+prompt('введите число')))