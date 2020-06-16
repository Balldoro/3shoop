import React, { useContext } from "react";
import {
  ProgressTitle,
  Form,
  Label,
  Input,
  FieldContainer,
  Submit,
  FormWarning
} from "../PaymentStyles";
import { useHistory } from "react-router-dom";
import { useForm, ErrorMessage } from "react-hook-form";
import { PaymentContext } from "../../../context/PaymentContext";

function Details() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const { state, updateState } = useContext(PaymentContext);

  const onSubmit = data => {
    history.push("/payment/billing");
    updateState(state => ({ ...state, ...data }));
  };

  return (
    <>
      <ProgressTitle>Details</ProgressTitle>
      <div>
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
      </div>
    </>
  );
}

export default Details;
