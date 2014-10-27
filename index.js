
var exec = require('mz/child_process').execFile
var tmpdir = require('os').tmpdir()
var path = require('path')
var fs = require('mz/fs')

var eigpy = path.resolve(__dirname, 'eig.py')

module.exports = function (matrix) {
  var filename = path.join(tmpdir, Math.random().toString(36).slice(2))
  return fs.writeFile(filename, JSON.stringify(matrix)).then(function () {
    return exec('python', [
      eigpy,
      filename
    ], {
      maxBuffer: Infinity,
      encoding: 'utf8'
    })
  }).then(function (stdout) {
    fs.unlink(filename)
    return JSON.parse(stdout[0])
  })
}
