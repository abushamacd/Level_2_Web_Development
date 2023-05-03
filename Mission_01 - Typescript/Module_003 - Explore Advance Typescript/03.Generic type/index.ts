type GenericType<T> = Array<T>;

const age: GenericType<number> = [1, 2, 4, 6];
const friendsName: GenericType<string> = ["Shama", "Sadik"];

// Tuple Generic
type GenericTuple<X, Y> = [X, Y];
type CommonType = { name: string; address: string };

const bestFriend: GenericTuple<string, string> = ["Shama", "Salman"];

const aboutShama: GenericTuple<CommonType, number> = [
  {
    name: "Shamaa",
    address: "Chuadanga",
  },
  23,
];
