// asynchronous
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Success";
    if (data) {
      resolve(data);
    } else {
      reject("Failed");
    }
  });
};

const getPromiss = async (): Promise<string> => {
  const data = await getPromiss();
  return data;
};
