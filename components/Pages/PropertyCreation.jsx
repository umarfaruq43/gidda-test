import ScreenSize from "@/Layout/ScreenSize";
import { Box, Text, Flex, Link, Icon, Image } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { MdOutlineChevronRight } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { PrimaryButton } from "../Common/Buttons";
import { useRouter } from "next/router";
import { useCommonContext } from "@/Context/CommonContext";
const PropertyCreation = () => {
    const router = useRouter();
    const { goBack } = useCommonContext();
    return (
        <ScreenSize>
            <Box
                maxW="1537px"
                px={{ base: "10px", md: "30px", xl: "60px" }}
                mx={"auto"}
                className="openSans"
            >
                {/* Top Navigation Section */}
                <Box pt="21px">
                    <Flex align="center" gap="15px">
                        <Link as={NextLink} href="/" fontSize={"14px"}>
                            Home
                        </Link>

                        <Icon as={MdOutlineChevronRight} color="gray.500" />

                        <Text href="#" fontWeight="700">
                            Add a Property
                        </Text>
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
                <Box mt="19px">
                    <Text
                        fontSize={{ base: "25px", md: "30px", xl: "35px" }}
                        fontWeight={700}
                    >
                        Add a Property
                    </Text>
                </Box>

                <Flex
                    rounded={"20px"}
                    mt="40px"
                    p={{ base: "10px", md: "30px", xl: "70px" }}
                    boxShadow={"0px 2px 20px #E4F2F3"}
                    bgColor={"white"}
                    gap="30px"
                    flexDir={{ base: "column", md: "row", xl: "row" }}
                >
                    <Box
                        w="100%"
                        textAlign={"center"}
                        boxShadow={"0px 2px 20px rgba(102, 70, 28, 0.11)"}
                        px={{ base: "10px", md: "20px", xl: "37px" }}
                        py="37px"
                        rounded={"10px"}
                    >
                        <Image
                            src="/images/apartment.svg"
                            display={"inline-block"}
                            alt="apartment Icon"
                        />
                        <Box mt="20px" py="10px">
                            <Text
                                fontSize={{
                                    base: "25px",
                                    md: "30px",
                                    xl: "35px",
                                }}
                                fontWeight={700}
                            >
                                Rental Property
                            </Text>
                        </Box>
                        <Box mt="20px" maxW={"583px"} mx="auto">
                            <Text fontSize={"15px"}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nam pulvinar sodales tellus, id
                                venenatis mauris consequat sagittis.{" "}
                            </Text>
                        </Box>
                        <Box mt="20px">
                            <PrimaryButton
                                text="CREATE"
                                maxW="357px"
                                onClick={() => {
                                    router.push("/rental_property");
                                }}
                            />
                        </Box>
                    </Box>

                    <Box
                        w="100%"
                        textAlign={"center"}
                        boxShadow={"0px 2px 20px rgba(102, 70, 28, 0.11)"}
                        px={{ base: "10px", md: "20px", xl: "37px" }}
                        py="37px"
                        rounded={"10px"}
                    >
                        <Image
                            src="/images/largeHouse.svg"
                            display={"inline-block"}
                            alt="apartment Icon"
                        />
                        <Box mt="20px" py="10px">
                            <Text
                                fontSize={{
                                    base: "25px",
                                    md: "30px",
                                    xl: "35px",
                                }}
                                fontWeight={700}
                            >
                                Large Property
                            </Text>
                        </Box>
                        <Box mt="20px" maxW={"583px"} mx="auto">
                            <Text fontSize={"15px"}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nam pulvinar sodales tellus, id
                                venenatis mauris consequat sagittis.{" "}
                            </Text>
                        </Box>
                        <Box mt="20px">
                            <PrimaryButton text="CREATE" maxW="357px" />
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </ScreenSize>
    );
};

export default PropertyCreation;
