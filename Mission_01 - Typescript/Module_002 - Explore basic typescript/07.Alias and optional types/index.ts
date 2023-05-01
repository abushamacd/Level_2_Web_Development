type CrushType = {
  name: string;
  age?: number;
  address: string;
};

const crush1: CrushType = {
  name: "Sadik",
  age: 22,
  address: "Sudan",
};

const crush2: CrushType = {
  name: "Sajid",
  address: "Sudan",
};

type OpetarionTypes = (x: number, y: number) => number;

const calculate = (n1: number, n2: number, operation: OpetarionTypes) => {
  return operation(n1, n2);
};

calculate(2, 3, (x, y) => x + y);
