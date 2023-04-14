import { FinanceCard } from "components/cards/financeCard";

import BaseLayout from "layout/BaseLayout";
import * as Styles from "./styles";
import { MessageCard } from "components/cards/messageCard";

export const Dashboard = () => {
  return (
    <BaseLayout>
      <Styles.Container>
        <FinanceCard
          title="Saldo"
          description="Atualizado com base nas entradas"
          value={1000}
          icon="dolar"
        />
        <FinanceCard
          title="Entrada"
          description="Atualizado com base nas entradas"
          value={1000}
          icon="arrowUp"
        />
        <FinanceCard
          title="Saida"
          description="Atualizado com base nas entradas"
          value={1000}
          icon="arrowDown"
        />
      </Styles.Container>

      <Styles.Container>
        <MessageCard title="teste" description="teste"/>
        <MessageCard title="teste" description="teste"/>
      </Styles.Container>

    </BaseLayout>
  );
};
