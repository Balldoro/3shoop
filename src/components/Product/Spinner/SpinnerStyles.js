import styled, { keyframes } from "styled-components";

const EllipsisAnimation1 = keyframes`
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
    `;
const EllipsisAnimation3 = keyframes`
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  `;
const EllipsisAnimation2 = keyframes`
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  `;

export const SpinnerWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  & div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  & div:nth-child(1) {
    left: 8px;
    animation: ${EllipsisAnimation1} 0.6s infinite;
  }
  & div:nth-child(2) {
    left: 8px;
    animation: ${EllipsisAnimation2} 0.6s infinite;
  }
  & div:nth-child(3) {
    left: 32px;
    animation: ${EllipsisAnimation2} 0.6s infinite;
  }
  & div:nth-child(4) {
    left: 56px;
    animation: ${EllipsisAnimation3} 0.6s infinite;
  }
`;

export const LoadingMessage = styled.span`
  font-size: 1.5rem;
  color: #fff;
  position: relative;
  top: 70%;
  left: -5%;
`;
