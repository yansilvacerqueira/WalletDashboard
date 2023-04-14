import { Header } from "antd/es/layout/layout";
import SideBarMobile from "components/sideBarMobile";

type MyHeaderProps = {
  title: string;
  p?: string;
}

export const MyHeader = ({title}: MyHeaderProps) => {
  return (
    <Header style={{ background: "#FFF" }}>
      <div
        className="teste"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="drawer" style={{display: "flex", alignItems: "center"}}>
          <SideBarMobile/>
          <h1 style={{color: "#002568"}} >{title}</h1>
        </div>
        <div className="content-header" style={{color: "#002568"}}>
          <p>Bem vindo ao seu dashboard</p>
        </div>
      </div>
    </Header>
  );
};
