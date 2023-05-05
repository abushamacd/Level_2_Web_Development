// Normal class
class Human {
  name: string;
  age: string;

  constructor(name: string, age: string) {
    this.name = name;
    this.age = age;
  }

  makePerson() {
    console.log(`${this.name}, your age is ${this.age} `);
  }
}

const shama = new Human("Shama", "12");
const sunny = new Human("sunny", "23");
shama.makePerson();
sunny.makePerson();

// Perameter Prorties
class People {
  constructor(public name: string, public age: string) {}

  makePerson() {
    console.log(`${this.name}, your age is ${this.age} `);
  }
}
const sweet = new Human("sweet", "23");
sweet.makePerson();
