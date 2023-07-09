import React from "react";
import { Box, Divider, Flex, Icon, Image, Text } from "@chakra-ui/react";
import ComponentSize from "@/Layout/ComponentSIze";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Briefcase, Home3, House } from "iconsax-react";
import { FadeButton } from "./Buttons";

const ShortPropertiesBox = () => {
    return (
        <Box
            h="fit-content"
            bg={[
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/images/house_1.jpg)",
            ]}
            bgBlendMode={["normal, normal", null, null, "multiply, normal"]}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            bgPos={"center"}
            rounded="10px"
            py={{ base: "20px", md: null, xl: "30px" }}
            px="18px"
            maxW={{ base: "100%", md: "428px", xl: "428px" }}
            w="100%"
            color={"white"}
        >
            <Text
                fontSize={{ base: "20px", md: "25px", xl: "30px" }}
                fontWeight={700}
                color="white"
                textShadow={"0px 4px 4px rgba(0, 0, 0, 0.5)"}
            >
                Lagos, Nigeria
            </Text>
            <Text
                fontSize={{ base: "15px", md: "15px", xl: "15px" }}
                color="white"
            >
                44B Wemabod Allen Avenue
            </Text>
            <Box pt={{ base: "25px", md: "35px", xl: "35px" }}>
                <Text
                    noOfLines={2}
                    fontWeight={700}
                    fontSize={{ base: "15px", md: "20px", xl: "" }}
                >
                    3 Bedroom Duplex with city line view at Ikeja
                </Text>
                <Divider color={"stroke_3"} variant="solid" my="5px" />
                {/* Number of available beds section */}
                <Flex align="center" justify="space-between" color="white">
                    <Flex py="10px" gap="10px" align={"center"}>
                        {/* Number of Beds  */}
                        <Flex>
                            <Image
                                src="/images/bed.svg"
                                alt="Total Number of beds"
                                display={"inline-block"}
                                w={{
                                    base: "18px",
                                    md: "18px",
                                    xl: "18px",
                                }}
                            />
                            <Text
                                ml="6px"
                                className="openSans"
                                fontSize={"12px"}
                            >
                                <Text
                                    fontWeight={700}
                                    as="span"
                                    fontSize={"15px"}
                                    mr="3px"
                                >
                                    {4}
                                </Text>
                                Bed
                            </Text>
                        </Flex>
                        {/* Divider */}
                        <Divider orientation="vertical" height={"17px"} />
                        {/* Number of BathRooms  */}
                        <Flex align={"center"}>
                            <Image
                                src="/images/bath.svg"
                                alt="Total Number of beds"
                                display={"inline-block"}
                                w={{
                                    base: "18px",
                                    md: "18px",
                                    xl: "18px",
                                }}
                            />
                            <Text
                                ml="6px"
                                className="openSans"
                                fontSize={"12px"}
                            >
                                <Text
                                    fontWeight={700}
                                    as="span"
                                    fontSize={"15px"}
                                    mr="3px"
                                >
                                    {3}
                                </Text>
                                Bath
                            </Text>
                        </Flex>
                    </Flex>

                    <Text fontSize={"15px"} fontWeight={700}>
                        1,009
                        <Text as="span" fontSize={"12px"} fontWeight={400}>
                            sqft
                        </Text>
                    </Text>
                </Flex>
                <Box mt="5px">
                    <FadeButton text="LEARN MORE" />
                </Box>
            </Box>
        </Box>
    );
};
export default ShortPropertiesBox;
