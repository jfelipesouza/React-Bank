import React, { createContext, useState } from "react";

interface ContextProps {
  open: Boolean;
  setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}

export const Context = createContext<ContextProps>({} as ContextProps);

const ContextProvider: React.FC = (props) => {
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <Context.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
