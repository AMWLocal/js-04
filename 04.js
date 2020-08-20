//Написать функцию, которая проверяет, является ли переданное ей число простым.
function simpleNunber(num) {

    for (let index = 2; index <= num / 2; index++) {
        if (num % index == 0) {
            console.log('no simple')
            return
        }

    }
    console.log('simple')
}
simpleNunber(29)
