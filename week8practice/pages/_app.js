import React, { useState, createContext, Component } from "react";

export const NameContext = createContext();
export const SetNameContext = createContext();

export default function App({ Component, pageProps }) {
  const [name, setName] = useState("NONE");

  return (
    <>
      <NameContext.Provider value={name}>
        <SetNameContext.Provider value={setName}>
          <Component {...pageProps} />
        </SetNameContext.Provider>
      </NameContext.Provider>
    </>
  );
}
