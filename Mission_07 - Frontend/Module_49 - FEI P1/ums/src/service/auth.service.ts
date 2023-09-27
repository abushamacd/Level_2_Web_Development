import { setToLocalStorage } from "@/app/utils/local-storage";

export const saveUserInfo = ({ accessToken }: { accessToken: string }) => {
  setToLocalStorage("accessToken", accessToken as string);
};
