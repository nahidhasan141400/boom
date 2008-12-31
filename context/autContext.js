import React,{useState,createContext, useContext} from 'react';

export const contextAuth = createContext();

// custom houk
export function useAuth(){
    return useContext(contextAuth);
}

const AutContext = ({children}) => {

    let [login,setLogin] = useState(false);

    
  React.useEffect(()=>{
    let cookie_array = document.cookie.split(';')
    if(cookie_array[0] !== "" && cookie_array[1] !== ""){
      setLogin(true)
    }
  },[]);
  const value ={
    login,setLogin
  }

  return (
    <contextAuth.Provider value={value}>
        {children}
    </contextAuth.Provider>
  )
}

export default AutContext