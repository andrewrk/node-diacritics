# node-diacritics

remove diacritics from strings

useful when implementing some kind of search or filter functionality.

## Installation

```
$ npm install diacritics
```

## API

### JavaScript
```js
var removeDiacritics = require('diacritics').remove;
console.log(removeDiacritics("Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ"));
// prints "Internationalizati0n"
```

### TypeScript
```ts
import * as diacritics from 'diacritics';

console.log(diacritics.remove("Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ"));
// prints "Internationalizati0n"
```