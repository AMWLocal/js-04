//Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9.
function multiplication(num) {
    for (let i = 2; i <= 9; i++) {
        console.log(`${num} * ${i} = ${num * i}`)
    }
}

multiplication(+prompt('input num'))