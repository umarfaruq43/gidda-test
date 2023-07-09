import { Box } from "@chakra-ui/react";
import React from "react";

const ComponentSize = ({ children, ...props }) => {
    return (
        <Box px={{ base: "16px", md: "40px", xl: "60px" }} {...props}>
            {children}
        </Box>
    );
};

export default ComponentSize;
