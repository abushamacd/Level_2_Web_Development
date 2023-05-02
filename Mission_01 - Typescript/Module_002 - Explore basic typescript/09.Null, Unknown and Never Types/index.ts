// null type
const searchName = (value: string | null) => {
  if (value === null) {
    console.log("There is nothing to search");
  } else {
    console.log("Searching");
  }
};

// searchName(null);

// unknown type
const getCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(`My speed is ${convertedSpeed} ms^-1 `);
  }

  if (typeof speed === "string") {
    const value = speed.split(" ");
    const convertedSpeed = (parseFloat(value[0]) * 1000) / 3600;
    console.log(`My speed is ${convertedSpeed} ms^-1 `);
  } else {
    console.log("There is wrong type");
  }
};

getCarSpeed(10);
getCarSpeed("10 kmp^-1");

// never type
function throwErr(message: string): never {
  throw new Error(message);
}

throwErr("Got err");
