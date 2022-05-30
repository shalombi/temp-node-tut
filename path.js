// const path = require('path')

// console.log(path.sep)

const path = require('path')

//console.log(path.sep)

const filePath = path.join('/kaki', 'content', 'subfolder', 'test.txt')
console.log(filePath)
// filePath = kaki/content/subfolder/test.txt

const base = path.basename(filePath)
// console.log(base)

const absolute = path.resolve(
  __dirname,
  'kaki',
  'content',
  'subfolder',
  'test.txt'
)

// console.log(absolute)

// console.log('Current working directory:', __dirname)
// console.log(path.resolve())
