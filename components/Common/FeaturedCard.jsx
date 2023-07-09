import React, { useState } from "react";

import {
    Box,
    Button,
    Divider,
    Flex,
    Image,
    SimpleGrid,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { Box1, Heart } from "iconsax-react";
import { PrimaryButton } from "./Buttons";
import ItemDetailsModal from "../Modals/ItemDetailsModal";

const FeaturedCard = ({ cardData, isGrid = true, ...props }) => {
    const [isLiked, setIsLiked] = useState(cardData && cardData.isLiked);
    const [likedNo, setLikedNo] = useState(cardData && cardData.likes);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box {...props}>
            <Box
                w="100%"
                borderRadius={"10px"}
                bgColor="white"
                boxShadow={"0px 2px 20px rgba(102, 70, 28, 0.11)"}
                border={"1px"}
                borderColor={"transparent"}
                _hover={{
                    boxShadow: "0px 2px 20px rgba(102, 70, 28, 0.11)",
                    cursor: "pointer",
                    borderColor: "primary",
                }}
                transitionDuration=".5s"
            >
                <Flex
                    py={{ base: "10px", md: "20px", xl: "20px" }}
                    px={{ base: "5px", md: "20px", xl: "20px" }}
                    position={"relative"}
                    flexDir={{
                        base: "column",
                        md: "column",
                        xl: "column",
                    }}
                    gap={{ base: "15px", sm: "15px", xl: "30px" }}
                    transitionDuration=".5s"
                    // flexWrap={{ base: "wrap", md: "wrap", xl: "wrap" }}
                >
                    {/* Image Section */}
                    <Box
                        onClick={() => onOpen()}
                        flexShrink={"0"}
                        maxW={{
                            base: "100%",
                            md: "100%",
                            lg: "100%",
                        }}
                        minW={{ base: "100%", md: "100%", lx: "357px" }}
                        w={{ base: "100%", md: "100%", xl: "100%" }}
                    >
                        <Box
                            mb="10px"
                            // maxW={{ base: "100%", md: "357px", lx: "357px" }}
                        >
                            <SimpleGrid
                                gap="10px"
                                columns={{ base: "1", md: "2", xl: "" }}
                            >
                                {/* Big IMAGE */}
                                <Image
                                    src="/images/feature_1.svg"
                                    w="100%"
                                    h="100%"
                                    objectFit={"cover"}
                                    alt="house_1"
                                    borderRadius="10px"
                                />
                                {/* Min Images */}
                                <Flex
                                    flexDir="column"
                                    gap="10px"
                                    overflow={"hidden"}
                                >
                                    <Flex
                                        gap="10px"
                                        display={{
                                            base: "none",
                                            md: "flex",
                                        }}
                                        align="center"
                                        justify="space-between"
                                        w="100%"
                                        maxW="100%"
                                    >
                                        <Box>
                                            <Image
                                                src="/images/beach_1.svg"
                                                // w="50%"
                                                h="100%"
                                                minH="129px"
                                                objectFit={"cover"}
                                                alt="house_1"
                                                borderRadius="10px"
                                            />
                                        </Box>
                                        <Box>
                                            <Image
                                                src="/images/beach_1.svg"
                                                // w="50%"
                                                h="100%"
                                                minH="129px"
                                                objectFit={"cover"}
                                                alt="house_1"
                                                borderRadius="10px"
                                            />
                                        </Box>
                                    </Flex>
                                    <Flex gap="10px" w="100%">
                                        <Box
                                            w="100%"
                                            display={{
                                                base: "block",
                                                md: "none",
                                                xl: "none",
                                            }}
                                        >
                                            <Image
                                                src="/images/beach_1.svg"
                                                w="100%"
                                                h="100%"
                                                maxH="129px"
                                                objectFit={"cover"}
                                                alt="house_1"
                                                borderRadius="10px"
                                                maxW="100%"
                                            />
                                        </Box>
                                        <Box w="100%">
                                            <Image
                                                src="/images/beach_1.svg"
                                                w="100%"
                                                h="100%"
                                                maxH="129px"
                                                objectFit={"cover"}
                                                alt="house_1"
                                                borderRadius="10px"
                                            />
                                        </Box>
                                    </Flex>
                                </Flex>
                            </SimpleGrid>
                        </Box>
                    </Box>
                    {/* Price And Name section */}
                    <Box minW="157px">
                        {/* Price, Name and Address Box */}
                        <Box>
                            <Flex align={"center"} gap="5px">
                                {/* Price in Number */}
                                <Text
                                    fontWeight={700}
                                    fontSize={{
                                        base: "20px",
                                        md: isGrid ? "20px" : "25px",
                                        xl: "25px",
                                    }}
                                    className="openSans"
                                    color={"primary"}
                                >
                                    {"₦670,000"}
                                </Text>{" "}
                                <Text
                                    fontSize={{
                                        base: "12px",
                                        md: isGrid ? "12px" : "15px",
                                    }}
                                    className="openSans"
                                >
                                    PER UNIT
                                </Text>
                                {/* Unit Left Button */}{" "}
                                <Box
                                    as="div"
                                    ml="5px"
                                    px="10px"
                                    py="5px"
                                    bgColor={"stroke_1"}
                                    className="openSans"
                                    borderRadius={"100px"}
                                    fontSize={{
                                        base: "12px",
                                        md: isGrid ? "12px" : "15px",
                                    }}
                                >
                                    {"3/10"} Units left
                                </Box>
                            </Flex>
                            {/* Item Name  */}
                            <Text
                                mt={{ base: "10px", md: "10px", xl: "10px" }}
                                className="openSans"
                                fontWeight={600}
                                fontSize={{
                                    base: isGrid ? "20px" : "20px",
                                    md: isGrid ? "20px" : "20px",
                                    lg: isGrid ? "20px" : "35px",
                                }}
                            >
                                Self-contain Studio Apartment with 24/7
                                electricity and water
                            </Text>
                            {/* Address */}
                            <Text
                                mt="10px"
                                color="light_3"
                                fontSize={{
                                    base: "15px",
                                    md: isGrid ? "15px" : "20px",
                                    lg: "",
                                }}
                            >
                                2109 Lawrence Street. Chicago, Illinois
                            </Text>
                        </Box>
                        {/* Number of Rooms and Gents */}
                        {true && (
                            <Box
                                mt="10px"
                                display={{
                                    base: "block",
                                    md: "block",
                                    xl: "block",
                                }}
                            >
                                <Divider color={"stroke_3"} variant="dashed" />
                                <Flex align="center" justify="space-between">
                                    <Flex py="10px" gap="10px" align={"center"}>
                                        {/* Number of Beds  */}
                                        <Flex>
                                            <Image
                                                src="/images/bed.svg"
                                                alt="Total Number of beds"
                                                display={"inline-block"}
                                                w={{
                                                    base: "18px",
                                                    md: isGrid
                                                        ? "18px"
                                                        : "27px",
                                                    xl: isGrid
                                                        ? "18px"
                                                        : "27px",
                                                }}
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
                                                    {4}
                                                </Text>{" "}
                                                Bed
                                            </Text>
                                        </Flex>
                                        {/* Divider */}
                                        <Divider
                                            orientation="vertical"
                                            height={"17px"}
                                        />
                                        {/* Number of BathRooms  */}
                                        <Flex align={"center"}>
                                            <Image
                                                src="/images/bath.svg"
                                                alt="Total Number of beds"
                                                display={"inline-block"}
                                                w={{
                                                    base: "18px",
                                                    md: isGrid
                                                        ? "18px"
                                                        : "27px",
                                                    xl: isGrid
                                                        ? "18px"
                                                        : "27px",
                                                }}
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

                                    <Text fontSize={"15px"} fontWeight={700}>
                                        1,009{" "}
                                        <Text
                                            as="span"
                                            fontSize={"12px"}
                                            color="light_4"
                                            fontWeight={400}
                                        >
                                            sqft
                                        </Text>{" "}
                                    </Text>
                                </Flex>
                                {/* <Divider color={"stroke_3"} variant="dashed" /> */}
                            </Box>
                        )}
                    </Box>
                </Flex>

                {/* Modal to view More deatils */}
                <ItemDetailsModal
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                    datas={cardData}
                />
            </Box>
        </Box>
    );
};

export default FeaturedCard;
