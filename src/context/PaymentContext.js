import React, { createContext, useState } from "react";

export const PaymentContext = createContext();

function PaymentContextProvider({ children }) {
  const [state, setState] = useState({});

  const updateState = data => {
    setState(data);
  };

  return (
    <PaymentContext.Provider value={{ state, updateState }}>
      {children}
    </PaymentContext.Provider>
  );
}

export default PaymentContextProvider;
