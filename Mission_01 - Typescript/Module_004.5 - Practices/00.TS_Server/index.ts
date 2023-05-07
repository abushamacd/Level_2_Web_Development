// Problem 1 - convert js array to tuples
const userInfo: [number, string, string, boolean, undefined, string] = [
  101,
  "Ema",
  "John",
  true,
  ,
  "2023",
];

// Problem 2 - Return similer number
const similerNumber = (arr1: number[], arr2: number[]): number[] => {
  const result = arr2.filter((value) => arr1.indexOf(value) !== -1);
  return result;
};

// console.log(similerNumber([1, 2, 3, 4, 5], [2, 4, 6, 8]));

// Problem 3 - Generic with type safty

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "iPhone",
    price: 50000,
    category: "phone",
  },
  {
    id: 1,
    name: "itel",
    price: 10000,
    category: "phone",
  },
  {
    id: 1,
    name: "Realme",
    price: 12000,
    category: "phone",
  },
  {
    id: 1,
    name: "Canon",
    price: 22000,
    category: "camera",
  },
  {
    id: 1,
    name: "Sony",
    price: 60000,
    category: "camera",
  },
];

const matchCriteria = <T>(argu1: Product[], argu2: T): Product[] => {
  const matched = argu1.filter((product) => product.category === argu2);
  return matched;
};

console.log(matchCriteria(products, "camera"));

// Problem - 8
interface IColors {
  red: "red";
  green: "green";
  blue: "blue";
  isTrue?: boolean;
}

const colors: IColors = {
  red: "red",
  green: "green",
  blue: "blue",
  isTrue: true,
};

const caseConvert = (color: string, isTrue: undefined | boolean): void => {
  if (isTrue) {
    console.log(color.toUpperCase());
  } else {
    console.log(color.toLowerCase());
  }
};

caseConvert(colors.red, colors.isTrue);
