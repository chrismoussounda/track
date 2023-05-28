import React, { createContext, useReducer } from "react";

export default (reducer, action, defaultValue) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispacth] = useReducer(reducer, defaultValue);
    const boundActions = {};
    for (key in action) {
      boundActions[key] = action[key](dispacth);
    }
    return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};
