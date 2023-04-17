import styled from "styled-components";

export const Container = styled.div`
  background: #001138;
  width: 100%;
  height: 100%;
  color: white;
`;
export const ContainerMain = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  height: 960px;
`;
export const ContentMain = styled.main`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 64px;
    font-weight: 400;
  }

  .mockDesk {
    img {
      position: relative;
      bottom: 270px;
    }

    @media (max-width: 890px) {
      display: none;
    }
  }

  .mockMobile {
    display: none;
    img {
      position: relative;
      bottom: 50px;
    }

    @media (max-width: 890px) {
      display: block;
    }
  }
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;

export const LinksHeader = styled.div`
  display: flex;

  a {
    text-decoration: none;
    color: white;
    margin-right: 8px;
  }
`;
export const ButtonLogin = styled.button`
  width: 180px;
  height: 48px;
  border-radius: 8px;
  background: linear-gradient(217.08deg, #667ba8 2.12%, #002568 98.96%);
  backdrop-filter: blur(9px);
  color: white;
  border: none;
  cursor: pointer;
`;

export const ContainerAdvantages = styled.div`
  width: 100%;
  background: #ccd3e3;
  position: relative;
`;
export const ContentAdvantages = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    margin-top: 100px;
    text-align: center;
    font-size: 64px;
    color: #001138;
    max-width: 1130px;
  }
  span {
    margin-top: 40px;
    text-align: center;
    color: #4c515c;
    max-width: 1130px;
    margin-bottom: 100px;
  }
`;
export const ContainerInfo = styled.div`
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const ContentInfo = styled.div`
  h2 {
    font-weight: lighter;
    font-size: 48px;
  }
  p {
    margin-top: 16px;
    color: #aab6d0;
    max-width: 420px;
  }
`;
export const InfoCard = styled.div`
  width: 500px;
  height: 500px;
  background: #ccd3e3;
  margin-top: 100px;
  margin-right: 120px;
`;
export const ContainerMobile = styled.div`
  width: 100%;
  background: #ccd3e3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
`;
export const ContentMobile = styled.div`
  p {
    margin-top: 100px;
    text-align: center;
    font-size: 56px;
    color: #001138;
    max-width: 1130px;
  }
  span {
    margin-top: 40px;
    text-align: center;
    color: #4c515c;
    max-width: 549px;
    margin-bottom: 100px;
  }
`;
export const TextAndIMG = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
