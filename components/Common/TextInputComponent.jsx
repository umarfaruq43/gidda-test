import { Box, Flex, Text, Input, Icon } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaBox } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";

const TextInputComponent = ({
    value,
    inputName,
    inputLabel,
    inputPlaceHolder,
    ...props
}) => {
    const [showLabel, setShowLabel] = useState(false);
    // const handleShowLabel = () => {
    //     setShowLabel(!showLabel);
    // };
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
                {inputLabel}
            </Text>

            {/* Input element  */}
            <Input
                w="100%"
                h="65px"
                // pl="60px"
                // pr="33px"
                px="20px"
                fontSize={{ base: "10px", md: "15px", xl: "15px" }}
                placeholder={inputPlaceHolder}
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
                type="text"
                name={inputName}
                required
                value={value}
                {...props}
                onFocus={() => setShowLabel(true)}
                onBlur={() => {
                    if (value.length > 0) {
                        setShowLabel(true);
                    } else {
                        setShowLabel(false);
                    }
                }}
            />
        </Flex>
    );
};

export default TextInputComponent;
