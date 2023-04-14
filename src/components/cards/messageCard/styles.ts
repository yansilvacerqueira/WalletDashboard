import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50%{
      opacity: .3;
    }
  100%{
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 48%;
  height: 200px;
  background-color: #002568;
  color: white;

  border-radius: 7px;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  animation: ${animate} 0.5s;

  & + & {
    margin-left: 68px;
  }

  > header p {
    margin-top: 30px;
    font-size: 18px;
    font-weight: 300;
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;
