"use client";

import { useState } from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import sidebarItems from "@/constants/sidebarItems";
import { getUserInfo } from "@/service/auth.service";

type MenuItem = Required<MenuProps>["items"][number];
const { Sider } = Layout;

const Sidebar = () => {
  const { role } = getUserInfo() as any;
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        UMS
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
