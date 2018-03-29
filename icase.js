//

"use strict"

module.exports = function(number) {
    number = parseInt(number, 10)
    number = Math.abs(number)

    var mod10 = number % 10
    var mod100 = number % 100

    if ( mod10===0 || (mod10>4&&mod10<10) || (mod100>4&&mod100<20) ) {
        return 0 // томатов
    } else if ( mod10==1 ) {
        return 1 // томат
    } else {
        return 2 // томата
    }
}
