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
