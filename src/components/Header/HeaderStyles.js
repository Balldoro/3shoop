import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  padding: 0 10px;
  @media (min-width: 1180px) {
    padding: 0;
  }
`;

export const Logo = styled.span`
  font-size: 2rem;
  font-weight: 400;
`;

export const Cart = styled.span`
  font-size: 1.5rem;
`;
