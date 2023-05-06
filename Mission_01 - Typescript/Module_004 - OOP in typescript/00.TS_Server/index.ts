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

function getAnimal(animal: Animal) {
  if (animal instanceof Dog) {
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
