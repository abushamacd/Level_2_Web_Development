"use client";

import { Layout, theme } from "antd";
import Header from "./Header";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const base = "admin";

  return (
    <Content style={{ color: "black" }}>
      <Header />
      {children}
    </Content>
  );
};

export default Contents;
