import { Box, Image, Flex, Text, Divider } from "@chakra-ui/react";
import { Heart, Location } from "iconsax-react";
import React from "react";

const SimilarHomeCard = () => {
    return (
        <Box
            p="10px"
            // m="10px"
            maxW="292px"
            boxShadow={"0px 4px 30px rgba(0, 0, 0, 0.08)"}
            rounded="20px"
        >
            <Box pos="relative">
                <Image src="/images/houseModal.svg" rounded="10px" alt="" />

                {/*Add  to favourite */}
                <Flex
                    cursor="pointer"
                    align="center"
                    justify="center"
                    pos="absolute"
                    bgColor="primary"
                    w="40px"
                    h="40px"
                    rounded="full"
                    top="10px"
                    right="20px"
                >
                    <Heart color="#fff" size="16" />
                </Flex>
            </Box>
            <Box mt="20px" p="10px">
                <Text
                    fontSize={{ base: "20px", md: "20px", xl: "20px" }}
                    fontWeight={"600"}
                >
                    {" "}
                    5 Bedroom Detached Duplex
                </Text>
                <Flex align="center" gap="10px" mt="10px">
                    <Location size="19" color="#292D32" />
                    <Text
                        fontSize={{
                            base: "15px",
                            md: "15px",
                            xl: "15px",
                        }}
                    >
                        1995 Broadway, New York
                    </Text>
                </Flex>

                <Divider my="10px" variant="dashed" bgColor="stroke" />

                <Box>
                    <Flex gap="20px" justify="space-between">
                        <Flex gap="10px" align={"center"}>
                            {/* Number of Beds  */}
                            <Flex>
                                <Image
                                    src="/images/bed.svg"
                                    alt="Total Number of beds"
                                    display={"inline-block"}
                                    w={"18px"}
                                />{" "}
                                <Text
                                    ml="6px"
                                    className="openSans"
                                    color={"light_4"}
                                    fontSize={{
                                        base: "12px",
                                        md: "12px",
                                        lg: "15px",
                                    }}
                                >
                                    <Text
                                        fontWeight={700}
                                        as="span"
                                        fontSize="15px"
                                        color="black"
                                    >
                                        {" "}
                                        {4}
                                    </Text>{" "}
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
                                    w={"18px"}
                                />{" "}
                                <Text
                                    ml="6px"
                                    className="openSans"
                                    color={"light_4"}
                                >
                                    <Text
                                        fontWeight={700}
                                        as="span"
                                        fontSize={"15px"}
                                        color="black"
                                    >
                                        {" "}
                                        {3}
                                    </Text>{" "}
                                    Bath
                                </Text>
                            </Flex>
                        </Flex>

                        <Text fontSize="15px" color="stroke">
                            <Text as="strong" color="black">
                                2,153{" "}
                            </Text>
                            sqft
                        </Text>
                    </Flex>
                </Box>
                <Divider my="10px" variant="dashed" bgColor="stroke" />

                <Flex align="center" justify="space-between">
                    <Text fontSize="12px">Posted Yesterday</Text>
                    <Text fontWeight="700" fontSize="20px">
                        ₦65M/
                        <Text as="span" fontWeight="400" fontSize="15px">
                            /Unit
                        </Text>{" "}
                    </Text>
                </Flex>
            </Box>
        </Box>
    );
};

export default SimilarHomeCard;
