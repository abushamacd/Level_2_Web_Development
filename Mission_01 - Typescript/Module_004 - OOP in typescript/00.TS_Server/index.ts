// abstraction interface
interface IVehicel {
  startEngine(): void;
  move(): void;
  stopEngine(): void;
}

class Vehicel implements IVehicel {
  startEngine(): void {
    console.log("start");
  }
  move(): void {
    console.log("move");
  }
  stopEngine(): void {
    console.log("stop");
  }
}

const car = new Vehicel();
car.startEngine();

// abstraction class

abstract class Vehicel1 {
  abstract startEngine(): void;
  abstract move(): void;
  abstract stopEngine(): void;
}

class Car extends Vehicel1 {
  startEngine(): void {
    console.log("car start");
  }
  move(): void {
    console.log("car move");
  }
  stopEngine(): void {
    console.log("car stop");
  }
}

const newCar = new Car();
newCar.startEngine();
