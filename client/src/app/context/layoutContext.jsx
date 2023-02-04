import React from "react";
import { createContext, useContext } from "react";

const LayoutContext = createContext();

export function useLayoutContext() {
  return useContext(LayoutContext);
}

export default function layoutProvider({ children }) {
  const drawerWidth = 240;
  return (
    <LayoutContext.Provider value={drawerWidth}>
      {children}
    </LayoutContext.Provider>
  );
}
