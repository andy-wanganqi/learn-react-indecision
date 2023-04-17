// Car entity: plate, make, model, year

class Person {
  constructor(name = 'Anonymous', age = -1) {
    this.name = name;
    this.age = age;
  }
  gretting() {
    return `Hi, this is ${this.name} !`;
  }
  getDesc() {
    if (typeof(age) === 'number') {
      return `${this.name} is ${this.age}${age>1?'s':''} old`;
    } else {
      return `${this.name}'s age is unknown`;
    }
  }
}

const me = new Person('Andy W', 40);