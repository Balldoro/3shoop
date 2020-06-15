import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fafafa;
  min-height: calc(100vh - 55px);
`;

export const ProgressContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

export const ProgressOutLine = styled.div`
  width: 50%;
  height: 2px;
  background-color: #d4eef7;
`;

export const ProgressCirclesContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProgressCircle = styled.div`
  width: 36px;
  height: 36px;
  background-color: ${props => props.done && "#3d98b9"};
  border: 2px solid #3d98b9;
  border-radius: 50%;
  margin-right: 2.5rem;
  position: relative;
  &:last-child {
    margin-right: 0;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${props =>
      props.inactive
        ? "#fafafa"
        : props.active
        ? "radial-gradient(circle,rgba(109, 189, 218, 1) 0%,rgba(61, 152, 185, 1) 100%);"
        : props.done && "#3d98b9"};
  }
  &::after {
    content: "";
    display: block;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 110%;
    transform: translateY(-50%);
    width: 2.2rem;
    background-color: #d4eef7;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 2.5rem;
  text-align: center;
  color: #3a3a3a;
  padding: 3rem 0;
`;

export const RedirectMessage = styled.p`
  font-size: 1.25rem;
  text-align: center;
`;
