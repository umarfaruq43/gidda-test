import AuthProvider from "@/Context/AuthContext";
import { CommonContextWarpper } from "@/Context/CommonContext";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { theme } from "@/theme";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <CommonContextWarpper>
                <AuthProvider>
                    <Component {...pageProps} />
                </AuthProvider>
            </CommonContextWarpper>
        </ChakraProvider>
    );
}
