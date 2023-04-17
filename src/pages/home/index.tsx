import { Link } from "react-router-dom";
import * as Style from "./styles";

import mockupDesk from "../../assets/mockDesk.png";
import mockupMobile from "../../assets/mockMobile.png";

export const Home = () => {
  return (
    <Style.Container>
      <Style.ContainerMain>
        <Style.Header>
          <p>Logo</p>
          <Style.LinksHeader>
            <Link to={""}>Home</Link>
            <Link to={""}>About</Link>
            <a href="#teste">Advantages</a>
          </Style.LinksHeader>

          <Style.ButtonLogin>Login</Style.ButtonLogin>
        </Style.Header>

        <Style.ContentMain>
          <h1>Domine o controle do seu dinheiro com Wallet</h1>
          <div className="mockDesk">
            <img src={mockupDesk} alt="mockup da tela de dashboard"/>
          </div>

          <div className="mockMobile">
            <img src={mockupMobile} alt="mockUp da tela de dashboard no celular" />
          </div>
        </Style.ContentMain>
      </Style.ContainerMain>

      <Style.ContainerAdvantages>
        <Style.ContentAdvantages id="teste">
          <p>Tenha uma visão clara dos seus benefícios com Wallet</p>
          <span>
            Com o Wallet, você terá suas informações financeiras em tempo real,
            incluindo seus gastos, renda e economias. Isso permite que você tome
            decisões financeiras mais informadas e eficazes, tendo maior
            controle sobre suas finanças. Com uma visão clara e atualizada de
            sua situação financeira, você pode identificar áreas onde pode
            economizar e otimizar seus gastos para alcançar suas metas
            financeiras a longo prazo.
          </span>
        </Style.ContentAdvantages>
      </Style.ContainerAdvantages>

      <Style.ContainerInfo>
        <Style.InfoCard></Style.InfoCard>
        <Style.ContentInfo>
          <h2>Facil</h2>
          <p>
            Tenha uma visão clara e em tempo real de sua situação financeira
            geral, incluindo gastos, renda e economias. Isso permite que você
            tome decisões financeiras mais informadas e eficazes, e tenha mais
            controle sobre suas finanças.
          </p>
        </Style.ContentInfo>
      </Style.ContainerInfo>

      <Style.ContainerMobile>
        <Style.ContentMobile>
          <p>Tenha o controle das suas finanças literalmente na palma da sua mão!</p>
          <Style.TextAndIMG>
          <span>
            Com o nosso layout responsivo, adaptado para ser usado em qualquer
            tela, você pode gerenciar suas finanças de onde estiver, seja pelo
            celular ou tablet, de forma prática e fácil.
          </span>
          <h2 style={{color: "#000"}}>qualquer coisa</h2>
          </Style.TextAndIMG>
        </Style.ContentMobile>
      </Style.ContainerMobile>


    </Style.Container>
  );
};
