import { Box, Flex } from "@chakra-ui/react";
import { ArrowLeft2 } from "iconsax-react";
import { useState, useRef } from "react";

const MoveScroll = ({ scrollStep, children }) => {
  

    return (
        <Box>
            <Box
                minW="36px"
                onClick={() => handleScroll(scrollStep)}
                maxW="36px"
                display={"flex"}
                alignItems="center"
            >
                <ArrowLeft2 size="26" color="#B0B0B0" />
            </Box>
            <Flex
                ref={scrollContainerRef}
                gap="16px"
                pb="12px"
                overflowX={"auto"}
                className="dateScroll"
            >
                {children}
            </Flex>
            <Box
                minW="36px"
                onClick={() => handleScroll(-scrollStep)}
                maxW="36px"
                display={"flex"}
                alignItems="center"
            >
                <ArrowLeft2 size="26" color="#B0B0B0" />
            </Box>
        </Box>
    );
};

export default MoveScroll;
