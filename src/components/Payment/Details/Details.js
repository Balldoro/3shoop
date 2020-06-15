import React, { useState } from "react";
import {
  ProgressTitle,
  Form,
  Label,
  Input,
  FieldContainer,
  NextLink
} from "../PaymentStyles";

function Details() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <ProgressTitle>Details</ProgressTitle>
      <div>
        <Form>
          <FieldContainer>
            <Label>First name</Label>
            <Input
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </FieldContainer>
          <FieldContainer>
            <Label>Last name</Label>
            <Input
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </FieldContainer>
          <FieldContainer>
            <Label>E-mail</Label>
            <Input value={email} onChange={e => setEmail(e.target.value)} />
          </FieldContainer>
          <NextLink
            to={{
              pathname: "/payment/billing",
              state: { firstName, lastName, email }
            }}
          >
            Next
          </NextLink>
        </Form>
      </div>
    </>
  );
}

export default Details;
