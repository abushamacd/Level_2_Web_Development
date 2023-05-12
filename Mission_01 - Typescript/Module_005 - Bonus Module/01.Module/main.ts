import { add as addTwo } from "./function";

const add = (n1: number, n2: number): number => {
  const res = n1 + n2;
  return res;
};

console.log(addTwo(2, 3));
