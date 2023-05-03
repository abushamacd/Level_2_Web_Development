// generic interface
interface ICrush<T> {
  name: string;
  husband: T;
}

const cursh1: ICrush<string> = {
  name: "Sonia",
  husband: "Sabbir",
};

const cursh2: ICrush<boolean> = {
  name: "Sonia",
  husband: true,
};

const cursh3: ICrush<object> = {
  name: "Sonia",
  husband: {
    hasHusband: true,
    name: "Sabbir",
  },
};

// with interface
interface IHusband {
  hasHusband: boolean;
  name: string;
}

const cursh4: ICrush<IHusband> = {
  name: "Sonia",
  husband: {
    hasHusband: true,
    name: "Sabbir",
  },
};
