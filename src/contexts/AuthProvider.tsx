'use client'
import { UserProfile } from "@/types/Util";
import React, { useState, createContext, ReactNode, useContext, useEffect } from "react";


export interface AuthContextType {
    user?: UserProfile,
    setUser?: Function 
}

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
    user: undefined,
    setUser: () => {}
});

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState(undefined);
    return (
        <AuthContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);