import LoginPage from "@/components/login/LoginPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "UMS | Login",
};

const Login = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default Login;
