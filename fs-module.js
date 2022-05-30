const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./kaki/content/subfolder/first.txt', 'utf-8')
const second = readFileSync('./kaki/content/subfolder/second.txt', 'utf-8')

const rightFile = writeFileSync('./kaki/content/subfolder/third.txt', 'kaki')
console.log(first, second)
// console.log(first,)
// console.log(second)


const { readFile, writeFile } = require('fs')

readFile('./kaki/content/subfolder/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('KAKI')
})
