
var assert = require('assert')
var eig = require('..')

describe('eig', function () {
  it('should run on a simple matrix', function () {
    var matrix = [[1, 0], [0, 1]]
    return eig(matrix).then(function (result) {
      assert(Array.isArray(result.eigenvectors))
      assert(Array.isArray(result.eigenvalues))
    })
  })
})
