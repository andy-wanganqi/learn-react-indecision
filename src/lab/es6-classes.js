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
      return `${this.name} is year${this.age}${age>1?'s':''} old`;
    } else {
      return `${this.name}'s age is unknown`;
    }
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  getDesc() {
    let desc = super.getDesc();
    if (this.hasMajor()) {
      desc += ` Major is ${this.major}.`;
    }
    return desc;
  }
  hasMajor() {
    return !!this.major;
  }
}

class Traveler extends Person {
  constructor(name, age, home) {
    super(name, age);
    this.home = home;
  }
  gretting() {
    let saying = super.gretting();
    if (this.home) {
      saying += ` I am visiting from ${home}`;
    }
    return saying;
  }
}

const me = new Student('Andy W', 40, 'CS');
const anonymous = new Student();