import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    transform: translateX(100px);
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
  width: 30%;
  height: 175px;
  border-radius: 16px;
  margin: 10px 0;
  background-color: #002568;
  padding: 10px 20px;
  position: relative;
  overflow: hidden;
  animation: ${animate} 0.5s;
  color: white;
  & + & {
    margin-left: 68px;
  }

  > img {
    height: 110%;
    position: absolute;
    top: -10px;
    right: -30px;
    opacity: 0.3;
  }

  > span {
    font-size: 16px;
    font-weight: 600;
  }

  > small {
    font-size: 12px;
    position: absolute;
    bottom: 16px;
    font-weight: 400;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;
