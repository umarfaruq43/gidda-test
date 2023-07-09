import { useDisclosure } from "@chakra-ui/react";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // Shared States
    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    // SigIn Function

    const SignIn = (values) => {
        console.log(values);
    };

    const RecoverPassword = () => {};

    // value passed
    let passedValues = {
        loading,
        SignIn,
        RecoverPassword,
        isLoggedIn,
    };
    return (
        <AuthContext.Provider value={passedValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export function useAuthContext() {
    return useContext(AuthContext);
}
