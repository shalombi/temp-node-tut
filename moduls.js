// console.log(__dirname)

// setInterval(() => {
//   console.log('hello world')
// }, 1800)

const names = require('./names')
//names = {shalom = "shalom" john = "john"}

console.log(`names is : ${names}`)
console.log(`module is : ${module}`)
//
//
const sayHi = require('./utils')
const data = require('./alternative_flavor')
//console.log(module)
console.log(data)

//
//
//

require('./mind')

// sayHi
// sayHi('suzan')
// sayHi(names.jhon)
// sayHi(names.shalom)

//app

const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

//upTime system
console.log(`upTime system  is ${os.uptime} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)
// currentOS
