import {
    Box,
    Text,
    Flex,
    Link,
    Icon,
    Image,
    SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { MdOutlineChevronRight } from "react-icons/md";
import ScreenSize from "@/Layout/ScreenSize";
import LatestProperties from "../Common/LatestProperties";
import LatestPropertiesCard from "../Common/LatestPropertiesCard";
import Otherproperties from "../Common/Otherproperties";

const Locations = ({ data }) => {
    return (
        <ScreenSize>
            <Box px={{ base: "10px", md: "30px", xl: "60px" }}>
                <Box className="openSans">
                    <Box pt="21px">
                        {/* Bread Crumbs Start  */}
                        <Flex align="center" gap="10px">
                            <Link
                                as={NextLink}
                                href="/"
                                fontSize={{ base: "12px", md: "14px" }}
                                color="fadeGray_2"
                                display="block"
                            >
                                Home
                            </Link>

                            <Icon
                                as={MdOutlineChevronRight}
                                color="fadeGray_2"
                            />

                            <Text
                                href="#"
                                color="fadeGray_2"
                                fontSize={{ base: "12px", md: "14px" }}
                            >
                                Locations
                            </Text>

                            <Icon
                                as={MdOutlineChevronRight}
                                color="fadeGray_2"
                            />
                            <Link
                                as={NextLink}
                                href="/"
                                fontSize={{ base: "12px", md: "14px" }}
                                display="block"
                                fontWeight="700"
                            >
                                {data}
                            </Link>
                        </Flex>
                        <Box>
                            <Text
                                fontSize={{
                                    base: "21px",
                                    md: "29px",
                                    xl: "31px",
                                }}
                                fontWeight="700"
                                my={["19px", null, "20px", null, "28px"]}
                            >
                                Properties at{" "}
                                <Text as="span" color="primary">
                                    {data}
                                </Text>
                            </Text>
                        </Box>
                        <Flex
                            justify={"space-between"}
                            fontSize={{
                                base: "12px",
                                sm: "15px",
                                md: "17px",
                                xl: "",
                            }}
                        >
                            <Text>1248 results • Dec. 14 - 22</Text>
                            <Box color="primary">Sort by: price</Box>
                        </Flex>
                    </Box>
                </Box>
                {/* Sponsor Section */}
                <Box mt={{ base: "20px", md: "42px", xl: "" }}>
                    <Text fontSize={{ base: "12px", md: "", xl: "" }}>
                        SPONSORED BY
                    </Text>
                    <Flex align="center" justify="space-between">
                        <Text
                            fontWeight="700"
                            fontSize={{
                                base: "12px",
                                sm: "15px",
                                md: "24px",
                                xl: "",
                            }}
                            mt={{ base: "5px", md: "", xl: "" }}
                        >
                            CEM Nigeria Limited
                        </Text>

                        <Link
                            as={NextLink}
                            href="#"
                            fontSize="12px"
                            fontWeight="700"
                            color="primary"
                        >
                            {" "}
                            LEARN MORE{" "}
                        </Link>
                    </Flex>
                    <SimpleGrid
                        columns={{ base: "2", sm: "2", md: "2", lg:"4", xl: "4" }}
                        spacing="15px"
                        mt="21px"
                    >
                        <LatestPropertiesCard status="sponsored" />
                        <LatestPropertiesCard status="sponsored" />
                        <LatestPropertiesCard status="sponsored" />
                        <LatestPropertiesCard status="sponsored" />
                    </SimpleGrid>{" "}
                </Box>

                {/* Other Section */}
                <Otherproperties title="House" noOfUnits="23943" />
                <Otherproperties title="Islands" noOfUnits="341" />
                <Otherproperties title="Office Spaces" noOfUnits="10" />
            </Box>
        </ScreenSize>
    );
};

export default Locations;

