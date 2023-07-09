import { Box, Input, Select } from "@chakra-ui/react";
import React from "react";

export const InputBox = ({
    inputType = "text",
    InputPlaceholder = "",
    value = "",
    inputName = "",
    ...props
}) => {
    return (
        <Input
            type={inputType}
            name={inputName}
            placeholder={InputPlaceholder}
            value={value}
            {...props}
            h="60px"
            p="20px"
            color="black"
            fontSize={"15px"}
            fontWeight="400"
            bgColor="fadeGray"
            w="100%"
            border="none"
            outline={"none"}
            _hover={{}}
            _focus={{ outline: "none" }}
            _active={{ outline: "none" }}
            _focusVisible={{}}
        />
    );
};

export const SelectBox = ({ placeholder, isLight, children, ...props }) => {
    return (
        <Select
            placeholder={placeholder}
            bgColor={isLight ? "white" : "fadeGray"}
            outline={"none"}
            boxShadow="none"
            border={isLight ? "1px" : "none"}
            borderColor={isLight ? "stroke_5" : "transparent"}
            h="60px"
            _hover={{}}
            _focus={{ outline: "none" }}
            _active={{ outline: "none" }}
            _focusVisible={{}}
            _placeholder={{ color: "light_2" }}
            color={"light_2"}
            rounded={isLight ? "10px" : ""}
            {...props}
        >
            {children}
        </Select>
    );
};

export const PropertyInputBox = ({
    inputType = "text",
    InputPlaceholder = "",
    value = "",
    inputName = "",
    ...props
}) => {
    return (
        <Input
            type={inputType}
            name={inputName}
            placeholder={InputPlaceholder}
            value={value}
            {...props}
            h="60px"
            p="20px"
            color="black"
            fontSize={"15px"}
            fontWeight="400"
            bgColor="white"
            w="100%"
            border="1px"
            borderColor="stroke_5"
            rounded="10px"
            outline={"none"}
            _hover={{}}
            _focus={{ outline: "none" }}
            _active={{ outline: "none" }}
            _focusVisible={{}}
        />
    );
};
