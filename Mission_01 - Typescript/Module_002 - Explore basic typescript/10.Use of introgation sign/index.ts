// Ternary operator
const age: number = 19;
const isAdult = age >= 18 ? "Yes" : "No";

console.log(isAdult);

// Nullish operator/ null colese operator = null or undefiend
const isAuthenticated = null;
const user = isAuthenticated ?? "Guest";
console.log(user);

// optional chaining
type Manush = {
  name: string;
  age: number;
  address: {
    city: string;
    road: string;
    home?: string;
  };
};

const person1: Manush = {
  name: "Siddik",
  age: 23,
  address: {
    city: "Chudanga",
    road: "Chudanga",
  },
};

const home = person1?.address?.home ?? "121/9 Bangoss para";
console.log(home);
