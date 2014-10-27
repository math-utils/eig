
# eig

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Gittip][gittip-image]][gittip-url]

Get the eigenvalues and eigenvectors of a row-based matrix.
Currently based on [eigenfaces](https://github.com/kpuputti/eigenfaces/blob/master/eigvals.py),
but that will hopefully change soon.

## API

```js
var eig = require('eig')

eig([[1,0],[0,1]]).then(function (result) {
  console.log(result.eigenvalues)
  console.log(result.eigenvectors)
})
```

[npm-image]: https://img.shields.io/npm/v/eig.svg?style=flat-square
[npm-url]: https://npmjs.org/package/eig
[github-tag]: http://img.shields.io/github/tag/math-utils/eig.svg?style=flat-square
[github-url]: https://github.com/math-utils/eig/tags
[travis-image]: https://img.shields.io/travis/math-utils/eig.svg?style=flat-square
[travis-url]: https://travis-ci.org/math-utils/eig
[coveralls-image]: https://img.shields.io/coveralls/math-utils/eig.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/math-utils/eig
[david-image]: http://img.shields.io/david/math-utils/eig.svg?style=flat-square
[david-url]: https://david-dm.org/math-utils/eig
[license-image]: http://img.shields.io/npm/l/eig.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/eig.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/eig
[gittip-image]: https://img.shields.io/gratipay/jonathanong.svg?style=flat-square
[gittip-url]: https://gratipay.com/jonathanong/
