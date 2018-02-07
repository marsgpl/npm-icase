//

"use strict"

const icase = require("./icase")

const cases = ["томатов", "томат", "томата"]

for ( let amount=-5; amount<=22; ++amount ) {
    console.log(amount + " " + cases[icase(amount)])
}
