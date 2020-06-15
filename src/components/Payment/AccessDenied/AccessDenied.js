import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { ErrorMessage, RedirectMessage } from "./AccessDeniedStyles";

function AccessDenied() {
  const [redirect, setRedirect] = useState({ ready: false, counter: 5 });
  useEffect(() => {
    const countingDown = setInterval(() => {
      setRedirect(prevState => ({
        ready: false,
        counter: prevState.counter - 1
      }));
      if (redirect.counter === 1) {
        setRedirect({ ready: true });
      }
    }, 1000);

    return () => clearInterval(countingDown);
  }, [redirect]);
  return (
    <>
      <ErrorMessage>You don't have access to this page.</ErrorMessage>
      <RedirectMessage>
        Redirect to home page after {redirect.counter}...
      </RedirectMessage>
      {redirect.ready && <Redirect to="/" />}
    </>
  );
}

export default AccessDenied;
