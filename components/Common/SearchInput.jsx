import {
    InputGroup,
    InputLeftElement,
    Input,
    InputRightElement,
    Flex,
    Box,
    Icon,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput = ({ ...props }) => {
    return (
        <Box w="100%" position={"relative"} maxW="464px">
            <Input
                {...props}
                pr="55px"
                type={"search"}
                placeholder=""
                fontSize="15px"
                pl="20px"
                py="25px"
                bgColor="info_1"
                rounded="100px"
                border="1px"
                borderColor="info_1"
                w="100%"
                boxShadow={"none"}
                _focus={{}}
                _active={{}}
                _focusVisible={{}}
            />
            <Box
                pos="absolute"
                top="50%"
                right="10px"
                transform={"auto"}
                translateY="-50%"
                cursor="pointer"
            >
                <Flex
                    bgColor="primary"
                    align="center"
                    justify="center"
                    w="37px"
                    h="37px"
                    rounded="full"
                    py="10px"
                    top="5px"
                >
                    <Icon as={FiSearch} boxSize="17px" color="white" />
                </Flex>
            </Box>
        </Box>
    );
};

export const FaqSearchInput = ({ ...props }) => {
    return (
        <Box w="100%" position={"relative"} maxW="100%">
            <Input
                {...props}
                pr="55px"
                type={"search"}
                placeholder="Enter question here"
                fontSize="15px"
                pl="20px"
                py="25px"
                bgColor="stroke_1"
                rounded="100px"
                w="100%"
                boxShadow={"none"}
                _focus={{}}
                _active={{}}
                _focusVisible={{}}
            />
            <Box
                pos="absolute"
                top="50%"
                right="10px"
                transform={"auto"}
                translateY="-50%"
                cursor="pointer"
            >
                <Flex
                    bgColor="primary"
                    align="center"
                    justify="center"
                    // w="37px"
                    // h="37px"
                    rounded="full"
                    py="10px"
                    px="35px"
                    top="5px"
                    color="white"
                >
                    Search
                </Flex>
            </Box>
        </Box>
    );
};

export default SearchInput;
