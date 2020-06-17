import styled from "styled-components";

export const PaymentButton = styled.button`
  width: 100%;
  height: 65px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  padding: 15px;
`;

export const PaymentButtonLeft = styled.div`
  display: flex;
  width: 65%;
`;

export const PaymentButtonRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 35%;
`;

export const PaymentCircle = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #3d98b9;
  margin-right: 1rem;
  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    display: ${props => (props.active ? "block" : "none")};
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #3d98b9;
  }
`;

export const PaymentItem = styled.li`
  width: 100%;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 1rem;
`;

export const PaymentList = styled.ul`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 620px) {
    width: 50%;
  }
`;

export const PaymentImg = styled.img`
  max-width: 65px;
  width: 50%;
`;
