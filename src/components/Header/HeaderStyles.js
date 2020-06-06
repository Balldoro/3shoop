import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  position: relative;
  @media (min-width: 1180px) {
    padding: 0;
  }
`;

export const LogoLink = styled(Link)`
  font-size: 2rem;
  font-weight: 400;
  color: #3a3a3a;
  text-decoration: none;
`;

export const Cart = styled.span`
  font-size: 1.5rem;
`;
