import React, { useContext } from "react";
import {
  ProgressTitle,
  Form,
  Label,
  Input,
  FieldContainer,
  Submit,
  FormWarning,
  FormWrapper
} from "../PaymentStyles";
import { useHistory } from "react-router-dom";
import { useForm, ErrorMessage } from "react-hook-form";
import { PaymentContext } from "../../../context/PaymentContext";
import LeavePrompt from "../LeavePrompt/LeavePrompt";

function Details() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const { state, updateState } = useContext(PaymentContext);

  const onSubmit = data => {
    updateState(state => ({ ...state, ...data }));
    history.push("/payment/billing");
  };

  return (
    <>
      <LeavePrompt />
      <ProgressTitle>Details</ProgressTitle>
      <FormWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FieldContainer>
            <Label>First name</Label>
            <Input
              name="firstName"
              defaultValue={state.firstName || ""}
              ref={register({
                required: "This field is required",
                pattern: {
                  value: /^\p{L}+$/u,
                  message: "Only letters allowed (Unicode included)"
                }
              })}
            />
            <ErrorMessage
              errors={errors}
              name="firstName"
              as={<FormWarning />}
            />
          </FieldContainer>

          <FieldContainer>
            <Label>Last name</Label>
            <Input
              name="lastName"
              defaultValue={state.lastName || ""}
              ref={register({
                required: "This field is required",
                pattern: {
                  value: /^\p{L}+$/u,
                  message: "Only letters allowed (Unicode included)"
                }
              })}
            />
            <ErrorMessage
              errors={errors}
              name="lastName"
              as={<FormWarning />}
            />
          </FieldContainer>

          <FieldContainer>
            <Label>E-mail</Label>
            <Input
              name="email"
              defaultValue={state.email || ""}
              ref={register({
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Incorrect e-mail format"
                }
              })}
            />
            <ErrorMessage errors={errors} name="email" as={<FormWarning />} />
          </FieldContainer>

          <Submit>Next</Submit>
        </Form>
      </FormWrapper>
    </>
  );
}

export default Details;
