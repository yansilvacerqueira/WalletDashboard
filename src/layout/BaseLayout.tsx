import { Layout } from "antd";
import { MyFooter } from "components/footer";

import { MyHeader } from "components/header";
import { SideBar } from "components/sideBar";

const {Content} = Layout;

const BaseLayout = ({ children }: any) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar/>
      <Layout className="site-layout">
        <MyHeader title="Dashboard"/>
        <Content style={{ display: "flex", alignItems: "center", justifyContent:"center" }}>
          <div
            style={{
              marginTop: 56,
              minHeight: "100%",
              width: "70%",
            }}
          >
            {children}
          </div>
        </Content>
        <MyFooter text="Created By Yan"/>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
