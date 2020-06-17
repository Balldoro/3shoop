import styled from "styled-components";

export const SummaryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  color: #3d98b9;
`;

export const SummaryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: flex-start;
  @media (min-width: 620px) {
    grid-template-columns: 3fr 2fr;
  }
`;

export const SectionWrapper = styled.section`
  width: 100%;
  margin-left: auto;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  padding: 15px;
`;

export const OrderItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  align-items: center;
  border-bottom: 1px solid #f3f3f3;
`;

export const OrderItemText = styled.span`
  font-size: 1.05rem;
`;

export const OrderTotal = styled.div`
  text-align: right;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

export const OrderButton = styled.button`
  background-color: #3d98b9;
  color: #fff;
  width: 40%;
  height: 65px;
  font-size: 1.05rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 auto;
  border: 1px solid #3d98b9;
  display: block;
  margin-top: 2rem;
`;

export const PersonalItemWrapper = styled.div`
  display: flex;
  padding: 15px 0;
  align-items: center;
  border-bottom: 1px solid #f3f3f3;
`;

export const PersonalHeading = styled.h4`
  font-size: 1.15rem;
  font-weight: 500;
  margin-right: 1rem;
  @media (min-width: 620px) {
    width: 155px;
  }
`;
