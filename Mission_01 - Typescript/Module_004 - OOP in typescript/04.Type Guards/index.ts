// keyof gaurd
type AlphaNumaric = string | number;
function add(param1: AlphaNumaric, param2: AlphaNumaric): AlphaNumaric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

console.log(add(1, "3"));
console.log(add(1, 3));

// In gaurd
interface NormalUser {
  name: string;
}
interface AdminUser {
  name: string;
  role: "admin";
}
const normalUser: NormalUser = {
  name: "Shama",
};
const adminUser: AdminUser = {
  name: "Shama",
  role: "admin",
};

function getUser(user: NormalUser | AdminUser): string {
  if ("role" in user) {
    return `I am an admin`;
  } else {
    return `I am an only user`;
  }
}

console.log(getUser({ name: "Shama" }));
console.log(getUser({ name: "Shama", role: "admin" }));

// instaceof guard
class Animal {
  constructor(public name: string, public species: string) {}
  makeSound() {
    console.log(`Make sound`);
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBarking() {
    console.log(`Barking`);
  }
}

class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeawing() {
    console.log(`Meawing`);
  }
}

// type check by function
function isDog(animal: Animal): animal is Dog {
  return animal instanceof Dog;
}

function getAnimal(animal: Animal) {
  if (isDog(animal)) {
    animal.makeBarking();
  } else if (animal instanceof Cat) {
    animal.makeMeawing();
  } else {
    animal.makeSound();
  }
}

const dog = new Dog("Tom", "Dog");
const cat = new Cat("Tom", "Cat");
const animal = new Animal("Tom", "Cat");

getAnimal(dog);
getAnimal(cat);
getAnimal(animal);
