import { Box, Flex, Image, Text, Stack } from "@chakra-ui/react";
import React from "react";
import ScreenSize from "./ScreenSize";

const AuthLayout = ({ children, formTitle, ...props }) => {
    return (
        <ScreenSize>
            <Flex
                minH={["100vh"]}
                // maxH={["100vh"]}
                // h="100%"
                {...props}
                bgColor={"rgba(212, 150, 51, 0.18)"}
                justify={"center"}
                // align="center"
            >
                <Box
                    maxW={"527px"}
                    w="100%"
                    py="50px"
                    overflowY={["unset", "auto"]}
                    className="auth"
                >
                    <Box maxW="399px" mx="auto" p="15.5px">
                        <Box w="100%" mb="20px">
                            <Image
                                display="block"
                                mx="auto"
                                src="/images/logo.png"
                                alt="Gida Logo"
                            />
                        </Box>

                        <Box
                            bgColor={"white"}
                            padding="20px"
                            borderRadius={"10px"}
                        >
                            <Text
                                fontWeight={"500"}
                                fontSize={["16px"]}
                                mb="15px"
                                textAlign="center"
                                className="inter"
                            >
                                {" "}
                                {formTitle}{" "}
                            </Text>
                            <Box>{children}</Box>
                        </Box>
                    </Box>
                    {/* <Box mt="251px">
                    <Text textAlign={"center"} fontSize="14px">
                        Copyright 2022, All Rights Reserved
                    </Text>
                </Box> */}
                </Box>
                <Flex
                    // w="60%"
                    display={{base: "none", md: "block", xl: "block"}}
                    // h="100%"
                    flex="1"
                    bgImage={"/images/AuthImg.jpg"}
                    bgSize={"cover"}
                    bgPosition={"center"}
                    bgRepeat={"no-repeat"}
                >
                    {/* <Image
                        src="/images/AuthImg.jpg"
                        alt="Login Page"
                        objectFit={"cover"}
                    /> */}
                </Flex>
            </Flex>
        </ScreenSize>
    );
};

export default AuthLayout;
