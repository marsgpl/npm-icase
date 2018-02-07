//

"use strict"

const icase = require("./icase")

const cases = ["томатов", "томат", "томата"]

const length = process.argv[2] || 30

for ( let amount=-10; amount<=length; ++amount ) {
    console.log(amount + " " + cases[icase(amount)])
}
