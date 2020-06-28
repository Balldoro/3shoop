import React, { useContext, useState } from "react";
import {
  ProgressTitle,
  Form,
  FieldContainer,
  Label,
  Input,
  FormWarning,
  Submit,
  MultipleInputsWrapper,
  MultipleFieldsWrapper
} from "../PaymentStyles";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { PaymentContext } from "../../../context/PaymentContext";
import AccessDenied from "../AccessDenied/AccessDenied";
import LeavePrompt from "../LeavePrompt/LeavePrompt";
import visa from "../../../assets/Visa.svg";
import masterCard from "../../../assets/mc_symbol.svg";
import {
  PaymentList,
  PaymentItem,
  PaymentButton,
  PaymentImg,
  PaymentCircle,
  PaymentButtonLeft,
  PaymentButtonRight,
  DateSlash
} from "./BillingStyles";

function Billing() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const { state, updateState } = useContext(PaymentContext);
  const [paymentOption, setPaymentOption] = useState(
    state.paymentOption || null
  );
  const onSubmit = data => {
    data.paymentOption = paymentOption;
    updateState(state => ({ ...state, ...data }));
    history.push("/payment/summary");
  };

  return (
    <>
      {Object.entries(state).length ? (
        <>
          <LeavePrompt />
          <ProgressTitle>Billing</ProgressTitle>
          <PaymentList>
            <PaymentItem>
              <PaymentButton onClick={() => setPaymentOption("card")}>
                <PaymentButtonLeft>
                  <PaymentCircle active={paymentOption === "card"} />
                  <span>Credit Card</span>
                </PaymentButtonLeft>
                <PaymentButtonRight>
                  <PaymentImg src={visa} alt="" />
                  <PaymentImg src={masterCard} alt="" />
                </PaymentButtonRight>
              </PaymentButton>
              {paymentOption === "card" && (
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <FieldContainer>
                    <Label>Cardholder name</Label>
                    <Input
                      name="cardName"
                      defaultValue={state.cardName || ""}
                      type="text"
                      placeholder="John Doe"
                      ref={register({
                        required: "This field is required",
                        pattern: {
                          value: /^$|^[a-zA-ZčČćĆđĐšŠžŽ-]+ [a-zA-ZčČćĆđĐšŠžŽ-]+\s?$/,
                          message: "First and last name required"
                        }
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="cardName"
                      as={<FormWarning />}
                    />
                  </FieldContainer>

                  <FieldContainer>
                    <Label>Card number</Label>
                    <Input
                      name="cardNumber"
                      defaultValue={state.cardNumber || ""}
                      placeholder="XXXX XXXX XXXX XXXX"
                      ref={register({
                        required: "This field is required",
                        pattern: {
                          value: /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/,
                          message: "Incorrect card number input"
                        }
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="cardNumber"
                      as={<FormWarning />}
                    />
                  </FieldContainer>

                  <MultipleFieldsWrapper>
                    <FieldContainer>
                      <Label>Expiry date</Label>
                      <MultipleInputsWrapper>
                        <div>
                          <Input
                            name="cardDate.mm"
                            defaultValue={
                              (state.cardDate && state.cardDate.mm) || ""
                            }
                            type="number"
                            placeholder="MM"
                            ref={register({
                              required: "This field is required",
                              pattern: {
                                value: /^(1[0-2]|0[1-9])$/,
                                message: "Incorrect value"
                              }
                            })}
                          />
                          <ErrorMessage
                            errors={errors}
                            name="cardDate.mm"
                            as={<FormWarning />}
                          />
                        </div>
                        <DateSlash>/</DateSlash>
                        <div>
                          <Input
                            name="cardDate.yy"
                            defaultValue={
                              (state.cardDate && state.cardDate.yy) || ""
                            }
                            type="number"
                            placeholder="YY"
                            ref={register({
                              required: "This field is required",
                              pattern: {
                                value: /^\d{2}(?:\d{2})?$/,
                                message: "Incorrect value"
                              }
                            })}
                          />
                          <ErrorMessage
                            errors={errors}
                            name="cardDate.yy"
                            as={<FormWarning />}
                          />
                        </div>
                      </MultipleInputsWrapper>
                    </FieldContainer>

                    <div>
                      <FieldContainer>
                        <Label>CVC</Label>
                        <Input
                          name="cardCVC"
                          defaultValue={state.cardCVC || ""}
                          placeholder="XXX"
                          type="number"
                          ref={register({
                            required: "This field is required",
                            pattern: {
                              value: /\b\d{3}\b/,
                              message: "It is incorrect CVC format (XXX)"
                            }
                          })}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="cardCVC"
                          as={<FormWarning />}
                        />
                      </FieldContainer>
                    </div>
                  </MultipleFieldsWrapper>
                  {paymentOption && <Submit>Next</Submit>}
                </Form>
              )}
            </PaymentItem>
          </PaymentList>
        </>
      ) : (
        <AccessDenied />
      )}
    </>
  );
}
export default Billing;
