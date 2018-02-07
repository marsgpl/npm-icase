# npm module for integer case detection

install:

    yarn add icase

use:

```javascript
    "use strict"

    const icase = require("icase")

    // specify integer cases for numbers that ends on 0, 1 etc
    const cases = ["томатов", "томат", "томата"]

    Array.apply(null, {15}).map(Number.call, Number).forEach(amount => {
        console.log(amount + " " + cases[icase(amount)])
    })
```

should output something like this:

    0 томатов
    1 томат
    2 томата
    3 томата
    4 томата
    5 томатов
    6 томатов
    7 томатов
    8 томатов
    9 томатов
    10 томатов
    11 томатов
    12 томатов
    13 томатов
    14 томатов
