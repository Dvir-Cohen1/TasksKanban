import React, { useState } from "react";
import { createContext, useContext } from "react";

const LayoutContext = createContext();

export function useLayoutContext() {
  return useContext(LayoutContext);
}

export default function layoutProvider({ children }) {
  const drawerWidth = 240;
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <LayoutContext.Provider
      value={{
        drawerWidth,
        open,
        setOpen,
        handleDrawerOpen,
        handleDrawerClose,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
