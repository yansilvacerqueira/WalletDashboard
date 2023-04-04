import CountUp from "react-countup";
import * as Style from "./styles";
import arrowDown from "../../../assets/arrow-down.svg";
import arrowUp from "../../../assets/arrow-up.svg";
import dollar from "../../../assets/dollar.svg";

type FinanceCardProps = {
  title: string;
  value: number;
  description: string;
  icon: "dolar" | "arrowUp" | "arrowDown";
};

export const FinanceCard = ({
  title,
  description,
  value,
  icon,
}: FinanceCardProps ) => {
  const iconSelected = (icon: string) => {
    switch (icon) {
      case "dolar":
        return dollar;
      case "arrowUp":
        return arrowUp;
      case "arrowDown":
        return arrowDown;
    }
  };

  return (
    <Style.Container>
      <span>{title}</span>
      <h1>
        <CountUp
          end={value}
          prefix="R$"
          separator="."
          decimal=","
          decimals={2}
        />
      </h1>
      <small>{description}</small>
      <img src={iconSelected(icon)} alt="informacoes da carteira" />
    </Style.Container>
  );
};
