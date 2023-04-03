import { Header } from "antd/es/layout/layout";

type MyHeaderProps = {
  title: string;
  p?: string;
}

export const MyHeader = ({title}: MyHeaderProps) => {
  return (
    <Header style={{ background: "#BCBCBC" }}>
      <div
        className="teste"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h1>{title}</h1>
        <div className="content-header">
          <p>Bem vindo ao seu dashboard</p>
        </div>
      </div>
    </Header>
  );
};
