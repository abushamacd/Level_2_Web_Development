import User from "./user.schema";

export const createUserService = async () => {
  const user = await new User({
    id: "112",
    role: "student",
    name: {
      firstName: "Abu9",
      lastName: "Shama",
    },
    password: "bolbona",
    dateOfBirth: "25, April 2000",
    gender: "male",
    email: "test@test.com",
    contactNo: "01982938723",
    emargencyContactNo: "01982938723",
    presentAddress: "Rangpur",
    permanentAddress: "Chudanga",
  });
  await user.save();
  return user;
};
