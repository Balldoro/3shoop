import React, { useEffect } from "react";
import { Prompt, useHistory } from "react-router-dom";

function LeavePrompt() {
  const history = useHistory();
  useEffect(() => {
    if (history.location.pathname.includes("/payment")) {
      const onUnload = e => {
        e.preventDefault();
        e.returnValue =
          "Are you sure you want to leave? You will lost all of your data";
      };
      window.addEventListener("beforeunload", onUnload);
      return () => window.removeEventListener("beforeunload", onUnload);
    }
  }, [history]);
  return (
    <Prompt
      message={location => {
        return !location.pathname.startsWith("/payment")
          ? `Are you sure you want to leave? You will lost all of your data`
          : true;
      }}
    />
  );
}

export default LeavePrompt;
