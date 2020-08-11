//Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 
//1 – если первое больше, чем второе; и 0 – если числа равны.
function numberL(a, b) {
    if (a > b) {
        console.log('1')
    }
    if (a < b) {
        console.log('-1')
    }
    if (a == b) {
        (console.log('0'))
    }


}
let a = +prompt('input numb')
let b = +prompt('input numb')

numberL(a, b)