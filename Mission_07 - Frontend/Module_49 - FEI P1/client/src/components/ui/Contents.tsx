"use client";

import { Breadcrumb, Layout, theme } from "antd";
import UMBreadCrumb from "./UMBreadCrumb";
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
      <UMBreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: "student",
            link: `/${base}/student`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;
