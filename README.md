# keq-headers

[![version](https://img.shields.io/npm/v/keq-headers.svg?style=flat-square)](https://www.npmjs.com/package/keq-headers)
[![downloads](https://img.shields.io/npm/dm/keq-headers.svg?style=flat-square)](https://www.npmjs.com/package/keq-headers)
[![license](https://img.shields.io/npm/l/keq-headers.svg?style=flat-square)](https://www.npmjs.com/package/keq-headers)
[![dependencies](https://img.shields.io/david/keq-request/keq-headers.svg?style=flat-square)](https://www.npmjs.com/package/keq-headers)
[![coveralls](https://img.shields.io/coveralls/github/keq-request/keq-headers.svg?style=flat-square)](https://coveralls.io/github/keq-request/keq-headers)



<!-- description -->
Set/Append headers to request.
<!-- description -->

## Usage

<!-- usage -->
```typescript
import { request } from 'keq'
import {
  setHeader,
  setHeaders,
  appendHeader,
  appendHeaders,
  insertHeader,
  insertHeaders,
} from 'keq-headers'


request
  .use(setHeader('x-user-name', 'Kerry'))
  .use(appendHeader('x-user-name', 'Marry'))
  .use(insertHeader('x-user-name', 'J'))
  .use(setHeaders({
    'x-user-name': 'Kerry',
    'x-user-id': '1'
  }))
  .use(appendHeaders({
    'x-user-name': 'Marray',
    'x-user-id': '1',
  }))
  .use(insertHeaders({
    'x-user-name': 'J',
    'x-user-id': 1,
  }))
```

 Middleware      | Description
 :---------------|:--------------
 setHeader       | Set a header.If it already exists, the original value will be overwritten.
 setHeaders      | Set headers.If it already exists, the original value will be overwritten.
 appendHeader    | Append a header.
 appendHeaders   | Append headers.
 insertHeader    | Set a header, if it isn't existed.
 insertHeaders   | Set headers, if it isn't existed.
<!-- usage -->

<!-- addition --><!-- addition -->

## Sponsor

Support code development on patron.

[![patron](https://c5.patreon.com/external/logo/become_a_patron_button@2x.png)](https://www.patreon.com/bePatron?u=22478507)

## Contributing & Development

If there is any doubt, it is very welcome to discuss the issue together.
Please read [Contributor Covenant Code of Conduct](.github/CODE_OF_CONDUCT.md) and [CONTRIBUTING](.github/CONTRIBUTING.md).
