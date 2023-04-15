// arguments object - no longer bound with arrow functions
const add = function (a, b) {
  console.log(arguments); // arguments will have 3 ones if passed 3 ones into
  return a + b;
}
console.log(add(10,20,30));
const add2 = (a, b) => {
  // console.log(arguments); // arguments is gone
  return a + b;
}
console.log(add2(10,20));

// this keyword - no longer bound
const user = {
  firstName: 'Andy',
  lastName: 'Wang',
  cities: ['A', 'B', 'C'],
  printCities: function(){
    console.log(this.firstName);
    console.log(this.cities);
    const that = this;
    this.cities.forEach(function(city){
      //console.log(this.firstName + ' has this city: ' + city); // this is not available in the scope of printCities(), but in the forEach()
      console.log(that.firstName + ' has this city: ' + city);
    })
  },
  printCities2() {
    console.log(this.firstName);
    console.log(this.cities);
    this.cities.forEach((city) => {
      console.log(this.firstName + ' has this city: ' + city); // this is available here because arrow function does not have 'this', so 'this' is in the scope of printCities2()
    })
  },
  printCities3: () => {
    // console.log(this.firstName); // this is not available because arrow function does not have 'this', so 'this' is in the global scope
  }
};
user.printCities();
user.printCities2();
user.printCities3();
