type NobeDeveloper = {
  name: string;
};

// type juniorDeveloper = {
//   name: string;
//   expertise: string;
//   exprience: number;
// };

// intersec
type JuniorDeveloper = NobeDeveloper & {
  expertise: string;
  exprience: number;
};

enum Level {
  junior = "junior",
  mid = "mid",
  senior = "senior",
}

type nextLevelDeveloper = JuniorDeveloper & {
  level: Level;
};

// union
const newDeveloper: NobeDeveloper | JuniorDeveloper = {
  name: "Shama",
  expertise: "JS",
  exprience: 1,
};

// enum
const developer: nextLevelDeveloper = {
  name: "Shama",
  expertise: "JS",
  exprience: 1,
  level: Level.junior,
};
