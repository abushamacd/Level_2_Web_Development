"use client";

import { Breadcrumb, Layout, theme } from "antd";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return <Content style={{ color: "black" }}>{children}</Content>;
};

export default Contents;
