class Person {
  takeNap(): void {
    console.log(`I am sleeping 8 hours per day`);
  }
}

class Student extends Person {
  takeNap(): void {
    console.log(`I am sleeping 10 hours per day`);
  }
}

class Developer extends Person {
  takeNap(): void {
    console.log(`I am sleeping 5 hours per day`);
  }
}

function getNap(param: Person) {
  param.takeNap();
}

const person = new Person();
const student = new Student();
const developer = new Developer();

getNap(person);
getNap(student);
getNap(developer);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(public height: number, public width: number) {
    super();
  }

  getArea(): number {
    return this.height * this.width;
  }
}

function getAreaOfShape(param: Shape) {
  console.log(param.getArea());
}

getAreaOfShape(new Circle(12));
getAreaOfShape(new Rectangle(12, 12));
