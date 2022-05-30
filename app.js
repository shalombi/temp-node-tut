// //npm init
// //npm init -y

// //sudo npm install -g <packegeName>

// //npm i <packegeName>

// // const _ = require('lodash')

const item = [1, [2, [3, [4, [5, 6, [7, [8]]]]]]]

// // const newItems = _.flattenDeep(item)
// // console.log(newItems)

const _ = require('lodash')
const newItems = _.flattenDeep(item)
console.log(newItems)
