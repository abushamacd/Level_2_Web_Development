// normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(3, 4);

// arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;

// callback function
const arr: number[] = [1, 3, 5];
const newArray: number[] = arr.map((elem: number) => elem * elem);

// use method in obj
const user: {
  name: string;
  balance: number;
  addBalance(money: number): number;
} = {
  name: "Shama",
  balance: 5,
  addBalance(money: number) {
    return this.balance + money;
  },
};
