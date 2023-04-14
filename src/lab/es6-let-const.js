var nameVar = 'Andy';
nameVar = 'AW';
var nameVar = 100; // Accidentally re-defined variable
console.log('nameVar: ', nameVar);

let nameLet = 'Andy';
nameLet = 'AWW';
// let nameLet = 'Bo'; // Cannot re-define variable
console.log('nameLet: ', nameLet);

const nameConst = 'Andy';
nameConst = 'AAWW'; // Cannot re-assign variable
// const nameConst = 'WWAA'; // Cannot re-define variable
console.log('nameConst: ', nameConst);

// Block scoping
function getName() {
  var name = 'AName';
  return name;
}
getName();
console.log(name); // name is undefiend here, because name is in the scope of getName()
const name = getName();
console.log(name); // name is in the global scope

const age = 25;
let age4;
if (age) {
  var age1 = age + 1; // var defines in the global scope
  console.log(age1);
  const age2 = age + 2;
  console.log(age2);
  let age3 = age + 3;
  console.log(age3);
  age4 = age + 4;
  console.log(age4);
}
console.log(age1);
// console.log(age2); // age2 is const and in the block scope
// console.log(age3); // age3 is let and in the block scope
console.log(age4); // age4 is in the global scope