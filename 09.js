// Написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. Какие числа выводить, определяется третьим параметром типа bool (true – четные, false – нечетные).
let numMin = +prompt('input min number')
let numMax = +prompt('input max number')
let conditionValue = +prompt('make chuse\n 1 - not even\n 0 - even')
let isEven = conditionValue == 0 ? true : false

function print(numMin, numMax, isEven) {
    for (let index = numMin; index <= numMax; index++) {
        if (isEven && index % 2 == 0 ) {
            console.log(index)
            continue
        }
        if ( !isEven && index % 2 != 0) {
            console.log(index)
        }
    }
}


print(numMin, numMax, isEven)