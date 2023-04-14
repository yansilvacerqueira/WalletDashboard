import { useState } from "react";
import { Button, Drawer, Menu } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";

const SideBarMobile: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  type MenuItem = Required<MenuProps>["items"][number];
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
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
      onClick: () => navigate("/Records"),
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

  return (
    <>
      <Button type="primary" onClick={showDrawer} style={{display: "none"}}>
        Open
      </Button>

      <Drawer
        title="Wallet DashBoard"
        headerStyle={{ color: "white" }}
        placement="left"
        onClose={onClose}
        open={open}
        style={{ background: "#002568", color: "white"}}
      >
        <Menu
          theme="dark"
          style={{ background: "#002568", color: "white" }}
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Drawer>
    </>
  );
};

export default SideBarMobile;
