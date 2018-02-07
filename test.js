//

"use strict"

const icase = require("./icase")

const tomatoes = ["томатов", "томат", "томата"]

for ( let amount=-5; amount<=22; ++amount ) {
    console.log(amount, tomatoes[icase(amount)])
}
