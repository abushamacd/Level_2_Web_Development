class Common {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): string {
    return `${this.name} take sleep ${hours} hours `;
  }
}

class Student extends Common {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const student1 = new Student("Shama", 26, "Chuadnaga");
student1.makeSleep(8);

class Teacher extends Common {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClass(numOfClass: number): string {
    return `${this.name} take sleep ${numOfClass} hours `;
  }
}
