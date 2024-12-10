// import React, { createContext, useContext, useState } from "react";

// // Create a context
// const StateContext = createContext();

// // Context provider to manage global state
// export const StateProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [token, setToken] = useState(localStorage.getItem("ACCESS_TOKEN") || null);

//     return (
//         <StateContext.Provider value={{ user, setUser, token, setToken }}>
//             {children}
//         </StateContext.Provider>
//     );
// };

// // Hook to use the context
// export const useStateContext = () => {
//     const context = useContext(StateContext);

//     if (!context) {
//         throw new Error("useStateContext must be used within a StateProvider");
//     }

//     return context;
// };

import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("ACCESS_TOKEN") || null);

  const updateToken = (newToken) => {
    setToken(newToken);
    if (newToken) {
      localStorage.setItem("ACCESS_TOKEN", newToken);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  return (
    <StateContext.Provider value={{ user, setUser, token, setToken: updateToken }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};
