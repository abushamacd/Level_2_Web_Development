let curse: any;
curse = "Web developer";

console.log((curse as string).length);

const kgToGram = (param: string | number): string | number | undefined => {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `String : ${param} kg = ${value} grams `;
  }

  if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
};

const result = kgToGram("10") as string;

console.log(result);
