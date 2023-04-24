import minusRenamedFromDefault, { square, add } from './utils.js'
import isSenior, { isAdult, canDrive } from './person.js'

console.log('hello webpack')

console.log(square(4))
console.log(add(4, 11))
console.log(minusRenamedFromDefault(11, 4))

console.log(isAdult(4))
console.log(canDrive(4))
console.log(isSenior(70))
