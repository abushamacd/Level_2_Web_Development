//   create user interface
export interface IUser {
  id: string;
  role: string;
  name: {
    firstName: string;
    lastName: string;
  };
  password: string;
  dateOfBirth?: string;
  gender: "male" | "female";
  email?: string;
  contactNo: string;
  emargencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}
