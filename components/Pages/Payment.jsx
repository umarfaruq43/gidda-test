import { images } from "@/next.config";
import { Box, Text, Flex, Button, Icon, Image } from "@chakra-ui/react";
import React from "react";

const Payment = () => {
    return (
        <Box className="openSans">
            <Box>
                <Text fontSize={"20px"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras porttitor lacus non eros elementum, non vehicula enim
                    ullamcorper. Etiam a ultrices ex, in commodo ante.
                </Text>

                <Box mt={{ base: "30px", md: "50px", xl: "50px" }}>
                    <Flex
                        gap={{ base: "10px", md: "10px", xl: "20px" }}
                        flexWrap={"wrap"}
                        justify={"space-between"}
                    >
                        {boxData.map(({ image, des, title }, i) => {
                            return (
                                <Box
                                    maxW={{
                                        base: "100%",
                                        sm: "170px",
                                        md: "228px",
                                        xl: "228px",
                                    }}
                                    minW={{
                                        base: "170px",
                                        md: "228px",
                                        xl: "228px",
                                    }}
                                    key={i}
                                    w="100%"
                                    p="16px"
                                    boxShadow="0px 2px 20px rgba(102, 70, 28, 0.11)"
                                    rounded={"10px"}
                                >
                                    <Flex
                                        mb="16px"
                                        h="64px"
                                        align={"center"}
                                        // justify={"center"}
                                    >
                                        <Image
                                            src={`/images/${image}`}
                                            alt={title}
                                            // h="100%"
                                            // objectFit={"cover"}
                                        />
                                    </Flex>
                                    <Box>
                                        <Text
                                            fontSize={"14px"}
                                            fontWeight={"700"}
                                        >
                                            {" "}
                                            {title}{" "}
                                        </Text>
                                        <Text mt="8px" fontSize={"12px"}>
                                            {des}
                                        </Text>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default Payment;

const boxData = [
    {
        image: "paypal.svg",
        title: "Paypal",
        des: "Some mini description beneath it",
    },
    {
        image: "masterCard.svg",
        title: "Mastercard",
        des: "Some mini description beneath it",
    },
    {
        image: "visa.svg",
        title: "Visa",
        des: "Some mini description beneath it",
    },
    {
        image: "payStack.svg",
        title: "Paystack",
        des: "Some mini description beneath it",
    },
    {
        image: "flutterwave.svg",
        title: "Flutterwave",
        des: "Some mini description beneath it",
    },
];
