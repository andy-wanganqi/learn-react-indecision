import minusRenamedFromDefault, { square, add } from './utils.js'
import isSenior, { isAdult, canDrive } from './person.js'
import validator from 'validator'
import React from 'react'
import ReactDOM from 'react-dom'

console.log('hello webpack')

console.log('square: ', square(4))
console.log('add: ', add(4, 11))
console.log('minusRenamedFromDefault: ', minusRenamedFromDefault(11, 4))

console.log(isAdult(4))
console.log(canDrive(4))
console.log(isSenior(70))

console.log('isAdult: ', isAdult(4))
console.log('canDrive: ', canDrive(4))
console.log('isSenior: ', isSenior(70))

console.log('isEmail: ', validator.isEmail('aaa@gmail.com'))

// git rebase test
