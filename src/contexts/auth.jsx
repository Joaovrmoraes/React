import React, { useState,createContext } from 'react' 

import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const navigte = useNavigate();
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        console.log("login auth", {email, password})
        
        if (password === "secret"){
            setUser({id:"123", email})
            navigte("/")
        }
    };
    const logout = () =>{
        console.log("logout")
        setUser(null);
        navigte("/login")
    }
    return(
        <AuthContext.Provider
         value = {{autehnticated: !!user, user, login,logout}}>
         {children}
        </AuthContext.Provider>
    )
}