import React, { createContext, useState } from "react";

const MonContext = createContext();

const MonContextProvider = ({ children }) => {
  const [poke, setPoke] = useState(null);
  const [yugi, setYugi] = useState(null);

  return (
    <MonContext.Provider value={{ poke, setPoke, yugi, setYugi }}>
      {children}
    </MonContext.Provider>
  );
};

export { MonContext, MonContextProvider };
