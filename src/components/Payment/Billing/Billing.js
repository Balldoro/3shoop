import React, { useContext } from "react";
import {
  ProgressTitle,
  Form,
  FieldContainer,
  Label,
  Input,
  FormWarning,
  Submit
} from "../PaymentStyles";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { PaymentContext } from "../../../context/PaymentContext";
import AccessDenied from "../AccessDenied/AccessDenied";
import LeavePrompt from "../LeavePrompt/LeavePrompt";

function Billing() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const { state, updateState } = useContext(PaymentContext);
  const onSubmit = data => {
    history.push("/payment/summary");
    updateState(state => ({ ...state, ...data }));
  };

  return (
    <>
      {Object.entries(state).length !== 0 ? (
        <>
          <LeavePrompt />
          <ProgressTitle>Billing</ProgressTitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FieldContainer>
              <Label>Name on card</Label>
              <Input
                name="cardName"
                defaultValue={state.cardName || ""}
                type="text"
                placeholder="John Doe"
                ref={register({
                  required: "This field is required",
                  pattern: {
                    value: /^\p{L}+\s+\p{L}+$/u,
                    message: "Required first name and last name written on card"
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
                    value: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                    message: "Incorrect card number"
                  }
                })}
              />
              <ErrorMessage
                errors={errors}
                name="cardNumber"
                as={<FormWarning />}
              />
            </FieldContainer>

            <FieldContainer>
              <Label>Expiry date</Label>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Input
                    name="cardDate.mm"
                    defaultValue={(state.cardDate && state.cardDate.mm) || ""}
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
                    as={<FormWarning style={{ display: "block" }} />}
                  />
                </div>
                <span style={{ fontSize: "2rem" }}>/</span>
                <div>
                  <Input
                    name="cardDate.yy"
                    defaultValue={(state.cardDate && state.cardDate.yy) || ""}
                    type="number"
                    placeholder="YY"
                    ref={register({
                      required: "This field is required",
                      pattern: {
                        value: /(?<![0-9])[0-9]{2}(?![0-9])/,
                        message: "Incorrect value"
                      }
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="cardDate.yy"
                    as={<FormWarning style={{ display: "block" }} />}
                  />
                </div>
              </div>
            </FieldContainer>
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

            <Submit>Next</Submit>
          </Form>
        </>
      ) : (
        <AccessDenied />
      )}
    </>
  );
}
export default Billing;
