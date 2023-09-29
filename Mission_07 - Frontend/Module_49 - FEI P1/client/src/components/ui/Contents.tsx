"use client";

import { Layout, theme } from "antd";
import Header from "./Header";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content style={{ color: "black" }}>
      <Header />
      {children}
    </Content>
  );
};

export default Contents;
