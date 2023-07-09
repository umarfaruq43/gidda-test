// import React from 'react'

// const PricePerUnit = () => {
//   return (
//     <div>PricePerUnit</div>
//   )
// }

// export default PricePerUnit

import { Box, Flex, Text, Input, Icon } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaBox, FaLock } from "react-icons/fa";
import { BsCheckCircle, BsEye, BsEyeSlash } from "react-icons/bs";
import { EyeSlash, Lock } from "@/public/Icon";

const PricePerUnitInput = ({ value, ...props }) => {
    const [showLabel, setShowLabel] = useState(false);

    useEffect(() => {
        if (value && value.length > 0) {
            setShowLabel(true);
        } else {
            setShowLabel(false);
        }
    }, [value]);

    const [showPassword, setShowPassword] = useState(false);

    return (
        <Flex position={"relative"} w="100%">
            {/* labeL Code */}

            <Text
                opacity={showLabel ? 1 : 0}
                position={"absolute"}
                zIndex={1}
                fontSize="14px"
                bgColor="white"
                px="10px"
                left="20px"
                top="-10px"
            >
                Price Per Unit
            </Text>

            {/* Left Icon  */}
            <Box
                position={"absolute"}
                transform="auto"
                top="50%"
                translateY="-50%"
                left="20px"
                pr="12px"
                py="4px"
                borderRight={"1px"}
                borderColor="black_200"
                zIndex={1}
            >
                {/* <Lock py="0px" /> */}₦
            </Box>
            {/* Input element  */}
            <Input
                w="100%"
                h="65px"
                pl="60px"
                fontSize={{ base: "10px", md: "15px", xl: "15px" }}
                placeholder="Enter Price Per Unit"
                bgColor={value.length > 0 ? "transparent" : "fadeGray"}
                border={value.length > 0 ? "1px" : "none"}
                zIndex={0}
                borderColor="light_1"
                _focus={{
                    bgColor: "transparent",
                    border: "1px",
                    borderColor: "light_1",
                }}
                _active={{}}
                _focusVisible={{}}
                type={"number"}
                name="pricePerUnit"
                required
                value={value}
                onFocus={() => setShowLabel(true)}
                onBlur={() => {
                    if (value.length > 0) {
                        setShowLabel(true);
                    } else {
                        setShowLabel(false);
                    }
                }}
                {...props}
            />
            {/* Right Icon */}
        </Flex>
    );
};

export default PricePerUnitInput;
