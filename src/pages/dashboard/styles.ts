import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  & + & {
    margin-top: 28px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`
