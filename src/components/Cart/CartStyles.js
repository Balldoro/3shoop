import styled from "styled-components";

export const CartContentWrapper = styled.div`
  position: absolute;
  background-color: #fff;
  width: 100%;
  max-width: 450px;
  min-height: 250px;
  right: 0;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.35);
  top: 70px;
  border-radius: 8px;
  &::before {
    content: "";
    display: block;
    width: 0;
    position: absolute;
    height: 0;
    border-left: 22px solid transparent;
    border-right: 0;
    border-bottom: 20px solid #fff;
    top: -12px;
    right: 10px;
  }
`;

export const CartButton = styled.button`
position: relative;
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  color: #3a3a3a;
  cursor: pointer;
  outline: none;
  &::after {
    content: '${props => props.amount}';
    display: ${props => (props.amount === 0 ? "none" : "block")};
    background-color: #3d98b9;
    color: #fff;
    padding: 2px 5px;
    font-size: 0.95rem;
    position: absolute;
    top: 40%;
    right: 45%;
    border-radius: 5px;
  }
`;

export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 0.5rem;
  font-size: 1rem;
  color: #3a3a3a;
  cursor: pointer;
`;

export const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  border-bottom: 1px solid #f7f7f7;
  padding: 15px;
  color: #3a3a3a;
`;

export const BuyButton = styled.button`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #3d98b9;
  color: #fff;
  border: none;
  width: 80%;
  max-width: 250px;
  height: 50px;
  border-radius: 5px;
  font-size: 1.25rem;
  text-align: center;
  cursor: pointer;
`;

export const EmptyCartText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
`;

export const TotalPrice = styled.p`
  font-size: 1.4rem;
  color: #3a3a3a;
  margin-top: 1rem;
  margin-bottom: 80px;
  text-align: center;
`;
