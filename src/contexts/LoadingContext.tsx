import React, { createContext, useState } from "react";

export const LoadingContext = createContext(false);

export const LoadingContextProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
