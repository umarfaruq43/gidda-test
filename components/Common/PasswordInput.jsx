import { Box, Flex, Text, Input, Icon } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaBox, FaLock } from "react-icons/fa";
import { BsCheckCircle, BsEye, BsEyeSlash } from "react-icons/bs";
import { EyeSlash, Lock } from "@/public/Icon";

const PasswordInput = ({ value, ...props }) => {
    const [showLabel, setShowLabel] = useState(false);

    useEffect(() => {
        if (value && value.length > 0) {
            setShowLabel(true);
        } else {
            setShowLabel(false);
        }
    }, [value]);

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
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
                Password
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
                <Lock py="0px" />
            </Box>
            {/* Input element  */}
            <Input
                w="100%"
                h="65px"
                pl="60px"
                pr="39px"
                fontSize={{ base: "10px", md: "15px", xl: "15px" }}
                placeholder="Enter Password"
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
                type={showPassword ? "text" : "password"}
                name="password"
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

            <Box
                zIndex={1}
                position={"absolute"}
                transform="auto"
                top="50%"
                right={"19px"}
                paddingLeft="7px"
                translateY="-50%"
                display="flex"
                align="center"
                justify={"center"}
                cursor="pointer"
                onClick={handleShowPassword}
            >
                <Icon
                    as={showPassword ? BsEye : EyeSlash}
                    color="#292D32"
                    fontSize="19px"
                />
            </Box>
        </Flex>
    );
};

export default PasswordInput;
