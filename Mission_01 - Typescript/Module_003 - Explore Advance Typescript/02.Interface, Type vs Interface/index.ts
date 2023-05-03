// Type alias
type User = {
  name: string;
  age: number;
};

const userWithTypeAlias: User = {
  name: "Shama",
  age: 23,
};

// interface
interface IUser {
  name: string;
  age: number;
}

interface IExtendedUser extends IUser {
  role: string;
}

const userWithInterface: IUser = {
  name: "Siddik",
  age: 23,
};
