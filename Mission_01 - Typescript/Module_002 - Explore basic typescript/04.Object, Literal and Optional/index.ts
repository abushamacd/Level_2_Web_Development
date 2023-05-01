const user: {
  name: string;
  // readonly name: string; //set readonly for not to change the value further
  age: number;
  country: "Bangladesh"; // literal types
  maritialStatus?: boolean; // optionnal types
} = {
  name: "Shama",
  age: 23,
  country: "Bangladesh",
  maritialStatus: true,
};

user.name = "Siddik";
