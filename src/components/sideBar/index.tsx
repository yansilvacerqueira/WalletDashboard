import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";

export const SideBar = () => {
  const { Sider } = Layout;
  type MenuItem = Required<MenuProps>["items"][number];
  const navigate = useNavigate();
  const items: MenuItem[] = [
    {
      key: "1",
      icon: <PieChartOutlined />,
      label: "Dashboard",
      onClick: () => navigate("/"),
    },
    {
      key: "2",
      icon: <FileOutlined />,
      label: "Teste",
      onClick: () => navigate("/Expenses"),
    },
    {
      key: "3",
      icon: <DesktopOutlined />,
      label: "teste2",
      onClick: () => navigate(""),
    },
    {
      key: "4",
      icon: <UserOutlined />,
      label: "teste3",
      onClick: () => navigate(""),
    },
  ];
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        style={{
          height: 32,
          margin: 16,
          background: "#FFF",
        }}
      />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};
