# integer case detection

install:

```bash
yarn add icase
```

use:

```javascript
const icase = require("icase")

const tomatoes = ["томатов", "томат", "томата"]

for ( let amount=-5; amount<=14; ++amount ) {
    console.log(amount + " " + tomatoes[icase(amount)])
}
```

output:

```
-5 томатов
-4 томата
-3 томата
-2 томата
-1 томат
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
```
