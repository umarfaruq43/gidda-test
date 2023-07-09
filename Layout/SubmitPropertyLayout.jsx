import { Box, Text, Flex, Link, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import NextLink from "next/link";
import { MdOutlineChevronRight } from "react-icons/md";
import { useCommonContext } from "@/Context/CommonContext";

const SubmitPropertyLayout = ({ children, currentStage }) => {
    const { goBack } = useCommonContext();
    return (
        <Box className="openSans" px={{ base: "10px", md: "30px", xl: "60px" }}>
            <Box pt="21px">
                {/* Breadcrumbs start */}
                <Flex align="center" gap="10px">
                    <Link
                        as={NextLink}
                        href="/"
                        fontSize={"14px"}
                        color="fadeGray_2"
                        display="block"
                    >
                        Home
                    </Link>

                    <Icon as={MdOutlineChevronRight} color="fadeGray_2" />

                    <Text href="#" color="fadeGray_2" fontSize={"14px"}>
                        Add a Property
                    </Text>

                    <Icon as={MdOutlineChevronRight} color="fadeGray_2" />
                    <Link
                        as={NextLink}
                        href="/"
                        fontSize={"14px"}
                        display="block"
                        fontWeight="700"
                    >
                        Rental Property
                    </Link>
                </Flex>
                <Flex
                    cursor={"pointer"}
                    mt="19px"
                    align={"center"}
                    gap="15px"
                    maxW="140px"
                >
                    <FaArrowLeft />
                    <Text fontSize={"15px"} as="button" onClick={goBack}>
                        Back
                    </Text>
                </Flex>
            </Box>
            <Box mt="26px" pb="30px">
                <Text
                    fontSize={{ base: "25px", md: "30px", xl: "35px" }}
                    fontWeight={700}
                    // bgColor={"light_80"}
                >
                    {currentStage}
                </Text>
            </Box>
            <Box>{children}</Box>
        </Box>
    );
};

export default SubmitPropertyLayout;
