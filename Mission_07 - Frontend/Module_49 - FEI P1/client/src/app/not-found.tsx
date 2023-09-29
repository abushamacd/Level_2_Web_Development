import React from "react";
import errorPage from "@/assets/404 error .png";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div>
      <Image src={errorPage} width={1200} alt="404 error" />
    </div>
  );
};

export default NotFoundPage;
