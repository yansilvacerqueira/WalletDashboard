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
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              marginTop: 24,
              padding: 24,
              minHeight: "100%",
              background: "#bcbcbc",
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
