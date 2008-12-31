import React from 'react';
import AutContext from "./autContext";

const contextRoot = ({children}) => {
  return (
    <AutContext>
        {children}
    </AutContext>
  )
}

export default contextRoot