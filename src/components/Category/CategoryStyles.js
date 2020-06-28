import styled from "styled-components";

export const Wrapper = styled.main`
  position: relative;
`;

export const Title = styled.h1`
  background-color: #3d98b9;
  color: #fff;
  padding: 14px;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const OptionsContainer = styled.aside`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 420px) {
    position: relative;
  }
`;
