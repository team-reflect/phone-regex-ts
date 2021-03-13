# phone-regex-ts

Builds a regexp to match phone-numbers.

### Install

```
yarn add phone-regex-ts
```
### Example (es module)
```js
import phoneRegex from 'phone-regex-ts'
console.log(phoneRegex().test('11234567890'))
// => true
```

### Example (commonjs)
```js
var phoneRegex = require('phone-regex-ts');
console.log(phoneRegex().test('11234567890'))
// => true
```

### Options:

```
@param indian [false] - match Indian phone numbers
@param exact [false] - perform an exact match
```

