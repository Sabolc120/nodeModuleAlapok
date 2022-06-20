//Install npm package by lazy= npm init -y
//Install package only for ONE project (the project you are in: npm i (packagename)
//Példa használatra:
const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);