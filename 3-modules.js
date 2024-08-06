// modules - encapsulate code (only share minimum)

const names = require('./4-names');
const sayHi= require('./5-utils')
const data = require('./6-alternative-flavor')

require(
    './7-mind-grenade'
)
console.log(data)
sayHi('Saksham')
sayHi(names.john)
sayHi(names.peter)