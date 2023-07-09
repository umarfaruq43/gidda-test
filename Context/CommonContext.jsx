import { useRouter } from "next/router";
import React, { createContext,  useContext, useState } from "react";

const CommonContext = createContext();

export const CommonContextWarpper = ({ children }) => {
    const router = useRouter();
    const [isGrid, setIsGrid] = useState(false);
    const [selectedNotification, setSelectedNotification] = useState(null);
    // handle card display
    const setIsGridTrue = () => {
        setIsGrid(true);
    };
    const setIsGridFalse = () => {
        setIsGrid(false);
    };
    // Go back to previous page
    const goBack = () => {
        router.back();
    };

    let sharedState = {
        isGrid,
        setIsGridTrue,
        setIsGridFalse,
        selectedNotification,
        setSelectedNotification,
        goBack,
    };
    return (
        <CommonContext.Provider value={sharedState}>
            {children}
        </CommonContext.Provider>
    );
};

export function useCommonContext() {
    return useContext(CommonContext);
}
