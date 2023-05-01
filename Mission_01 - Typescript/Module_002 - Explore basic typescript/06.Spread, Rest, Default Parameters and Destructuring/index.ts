// default parameters
const sum = (n1: number, n2: number = 2): number => n1 + n2;
// console.log(sum(4));

// Spread operators
const myFriends: string[] = ["Salman", "Sunny", "Sweet"];
const newFrinds: string[] = ["Shamim", "Sakib", "Sadia"];

myFriends.push(...newFrinds);

// console.log(myFriends);

// rest operators

const greetFrinds = (...friends: string[]): void =>
  friends.forEach((friend) => console.log(`Hi ${friend}`));

greetFrinds("Salman", "Sunny", "Sweet", "Shamim", "Sakib", "Sadia", "Sabbir");

// array and object de-structing

const clgFrnd = {
  clgBestFrnd: "Muktadir",
  age: 23,
};

const [bestfriend] = myFriends;
const { clgBestFrnd } = clgFrnd;

console.log(myFriends[2]);
console.log(bestfriend, clgBestFrnd);
