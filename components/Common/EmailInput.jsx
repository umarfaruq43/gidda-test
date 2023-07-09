import { Box, Flex, Text, Input, Icon } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaBox } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import { DirectIcon, TickCircle } from "@/public/Icon";

const EmailInput = ({ value, isEmailValid, handleIsEmailValid, ...props }) => {
    const [showLabel, setShowLabel] = useState(false);

    useEffect(() => {
        if (value && value.length > 0) {
            setShowLabel(true);
        } else {
            setShowLabel(false);
        }
    }, [value]);

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
                Email Address
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
                {/* <FaBox py="0px" /> */}
                <DirectIcon />
            </Box>
            {/* Input element  */}
            <Input
                w="100%"
                h="65px"
                pl="60px"
                pr="38px"
                fontSize={{ base: "10px", md: "15px", xl: "15px" }}
                placeholder="Enter Email Address"
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
                type="email"
                name="email"
                value={value}
                {...props}
                onFocus={() => setShowLabel(true)}
                onBlur={() => {
                    if (value.length > 0) {
                        setShowLabel(true);
                    } else {
                        setShowLabel(false);
                    }
                    console.log("loses focus");
                    handleIsEmailValid();
                }}
                // onChange={handleIsEmailValid}
            />
            {/* Right Icon */}
            {isEmailValid ? (
                <Box
                    zIndex={1}
                    position={"absolute"}
                    transform="auto"
                    top="50%"
                    right={"17px"}
                    paddingLeft="7px"
                    translateY="-50%"
                    display="flex"
                    align="center"
                    justify={"center"}
                    // bgColor="white"
                >
                    <Icon as={TickCircle} color="#292D32" />
                </Box>
            ) : (
                ""
            )}
        </Flex>
    );
};

export default EmailInput;
