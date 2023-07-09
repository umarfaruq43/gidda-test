import { Box } from "@chakra-ui/react";
import React from "react";

const ScreenSize = ({ children, ...props }) => {
    return (
        <Box maxWidth={"1920px"} mx="auto" {...props} overflowX="hidden">
            {children}
        </Box>
    );
};

export default ScreenSize;
