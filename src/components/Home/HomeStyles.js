import styled from "styled-components";

export const Title = styled.h1`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    ${props => `url(${props.background}) no-repeat`};
  background-position: center center;
  height: 420px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  background-size: cover;
  font-size: 2.15rem;
`;
