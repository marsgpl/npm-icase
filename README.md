# npm module for integer case detection

install:

    yarn add icase

use:

    const icase = require("./icase")

    const cases = ["томатов", "томат", "томата"]

    const length = process.argv[2] || 30

    Array.apply(null, { length }).map(Number.call, Number).forEach(amount => {
        console.log(amount + " " + cases[icase(amount)])
    })
