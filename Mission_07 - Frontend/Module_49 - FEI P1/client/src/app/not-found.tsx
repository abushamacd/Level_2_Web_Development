import React from "react";
import errorPage from "@/assets/404 error .png";
import Image from "next/image";
import { Row } from "antd";

const NotFoundPage = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
      }}
    >
      <Image src={errorPage} width={1200} alt="404 error" />
    </Row>
  );
};

export default NotFoundPage;
