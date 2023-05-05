interface IMyInfo {
  name: string;
  age: number;
  salary: number;
}

const makeCnnection = <T extends IMyInfo>(myInfo: T) => {
  const crush = "Shuly";
  const newData = { ...myInfo, crush };
  return newData;
};

const myInfo: IMyInfo = {
  name: "Shama",
  age: 23,
  salary: 121212,
};

const connection = makeCnnection<IMyInfo>(myInfo);
connection;
