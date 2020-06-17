import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: #fafafa;
  min-height: calc(100vh - 55px);
  padding-bottom: 1.5rem;
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

export const ProgressTitle = styled.h2`
  color: #3d98b9;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 400;
`;

export const FormWrapper = styled.div`
  width: 100%;
  @media (min-width: 620px) {
    width: 50%;
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 15px;
`;

export const Label = styled.label`
  font-size: 1.15rem;
  margin-bottom: 0.4rem;
  display: inline-block;
`;

export const Input = styled.input`
  border: 1px solid #e0e0e0;
  background-color: #fdfdfd;
  width: 100%;
  padding: 14px;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  font-size: 1.1rem;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);
`;

export const FieldContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const Submit = styled.button`
  border: none;
  background-color: #3d98b9;
  color: #fff;
  height: 60px;
  border-radius: 5px;
  font-size: 1.4rem;
  margin: 1.5rem 0;
  width: 100%;
  cursor: pointer;
  @media (min-width: 620px) {
    width: 50%;
  }
`;

export const NextLink = styled(Link)`
  border: none;
  background-color: #3d98b9;
  color: #fff;
  height: 60px;
  border-radius: 5px;
  font-size: 1.4rem;
  margin: 1.5rem auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  @media (min-width: 620px) {
    width: 50%;
  }
`;

export const SubmitContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
`;

export const FormWarning = styled.span`
  color: #d61f1f;
`;

export const MultipleFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 620px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const MultipleInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 130px;
  @media (min-width: 620px) {
    width: 95%;
  }
`;
