import React from "react";
import { LoadingMessage, SpinnerWrapper } from "./SpinnerStyles";

const Spinner = React.forwardRef((props, ref) => {
  return (
    <SpinnerWrapper ref={ref}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <LoadingMessage>Loading...</LoadingMessage>
    </SpinnerWrapper>
  );
});

export default Spinner;
