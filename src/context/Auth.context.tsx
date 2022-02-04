import React, { createContext, useState, useEffect } from "react";
import { IAuthUser } from "../models/user.interface";

interface IAuthContext {
    signed: boolean;
    user: IAuthUser;
    authLoading: boolean;
    signOut(): void;
    setUser(user: IAuthUser): void;
    // getUserData(): Promise<any>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<IAuthUser>({} as IAuthUser);
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        async function fetchStorage() {
            const userData = sessionStorage.getItem("@DC_Auth:user");
            console.log(userData);
                        
            if (userData) {
                setUser(JSON.parse(userData));
            }
            setAuthLoading(false);
        }

        fetchStorage();
    }, []);

    useEffect(() => {
        sessionStorage.setItem('@DC_Auth:user', JSON.stringify(user))
    }, [user])

    function signOut() {
        setUser({} as IAuthUser)
    }

    return (
        <AuthContext.Provider value={{ signed: !!user.id, user, authLoading, setUser, signOut }}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthContext;
