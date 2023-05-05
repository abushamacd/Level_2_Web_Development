interface IPerson {
  name: string;
  age: 23;
}
type NewPerson = keyof IPerson;
const person: NewPerson = "age";

const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
  obj[key];
};

const property = getProperty({ name: "Shama", age: 23 }, "age");
