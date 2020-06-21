import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Category = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: calc(380 / 570 * 100%);
  position: relative;
`;

export const CategoryTitle = styled.h3`
  font-weight: 400;
  font-size: 1.8rem;
  color: #fff;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
`;

export const LinkWrapper = styled(Link)`
  width: 100%;
`;
