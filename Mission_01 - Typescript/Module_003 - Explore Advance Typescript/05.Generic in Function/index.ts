// Generic in Function
// const createArray = <T>(param: T): T[] => {
//   return [param];
// };

// const result = createArray<string>("Shama");
// const result1 = createArray<boolean>(false);

interface IName {
  name: string;
}

// const result3 = createArray<IName>({ name: "shama" });

// Tuples generic functions
const createArray = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

const result = createArray<string, number>("Shama", 2);
const result1 = createArray<boolean, IName>(false, { name: "Shama" });
