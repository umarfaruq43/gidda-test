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
import { PrimaryButton, LightPrimaryButton } from "../Common/Buttons";
import { Heart, Icon } from "iconsax-react";
import TourModal from "../Modals/TourModal";
import ContactAgentModal from "../Modals/ContactAgentModal";

const FavouriteCard = () => {
    const [isLiked, setIsLiked] = useState("false");
    const {
        isOpen: isOpenTourModal,
        onOpen: onOpenTourModal,
        onClose: onCloseTourModal,
    } = useDisclosure();
    const {
        isOpen: isOpenMessageModal,
        onOpen: onOpenMessageModal,
        onClose: onCloseMessageModal,
    } = useDisclosure();

    const {
        isOpen: isOpenSuccessModal,
        onOpen: onOpenSuccessModal,
        onClose: onCloseSuccessModal,
    } = useDisclosure();

    return (
        <Box
            // shadow={"md"}
            mb="30px"
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
            <Box
                py={{ base: "20px", md: "20px", xl: "20px" }}
                px={{ base: "10px", md: "20px", xl: "20px" }}
                position={"relative"}
                display={"flex"}
                flexDir={["column", "row", "row", "row"]}
                gap={{ base: "15px", sm: "15px", xl: "30px" }}
                flexWrap={{ base: "wrap", md: "wrap", xl: "wrap" }}
            >
                {/* Image Section */}
                <Box
                    flexShrink={"0"}
                    maxW={{ base: "100%", md: "357px", lx: "357px" }}
                    minW={{ base: "100%", md: "100%", lx: "357px" }}
                    w={{ base: "100%", md: "unset", xl: "unset" }}
                >
                    <Box
                        mb="10px"
                        // maxW={{ base: "100%", md: "357px", lx: "357px" }}
                    >
                        <Image
                            src="/images/beach_1.svg"
                            w="100%"
                            h="100%"
                            objectFit={"cover"}
                            alt="house_1"
                            //   maxH={["192px", "251px", ""]}
                            borderRadius="10px"
                            // maxW={{ base: "100%", md: "357px", lx: "357px" }}
                        />
                    </Box>

                    {/* Small Images Sections */}
                    <Flex
                        gap="10px"
                        display={{ base: "none", md: "flex", xl: "" }}
                    >
                        {[1, 2, 3].map((i) => {
                            return (
                                <Box
                                    w="100%"
                                    maxW={{ base: "100%", md: "113px" }}
                                    //   maxH={["73px", "93px"]}
                                    key={i}
                                    pos={"relative"}
                                    overflow="hidden"
                                    borderRadius="10px"
                                >
                                    <Image
                                        src="/images/beach_1.svg"
                                        alt="house_1"
                                        maxW={"100%"}
                                        w="100%"
                                        h="100%"
                                        objectFit={"cover"}
                                    />

                                    {/* Overlay Div */}

                                    {i === 3 && (
                                        <Flex
                                            position={"absolute"}
                                            top={0}
                                            bottom={0}
                                            left={0}
                                            right={0}
                                            backgroundColor={
                                                "rgba(0, 0, 0, 0.6)"
                                            }
                                            justify="center"
                                            align={"center"}
                                        >
                                            <Text
                                                fontWeight={"700"}
                                                color="white"
                                                fontSize={"12px"}
                                            >
                                                {25} + more
                                            </Text>
                                        </Flex>
                                    )}
                                </Box>
                            );
                        })}
                    </Flex>
                </Box>
                {/* Price And Name section */}
                <Box
                    maxW={{
                        base: "100%",
                        md: "309px",
                        lg: "409px",
                        xl: "500px",
                    }}
                    minW="157px"
                >
                    {/* Price, Name and Address Box */}
                    <Box
                        minH={{
                            base: "fit-content",
                            md: "285px",
                            lg: "285px",
                        }}
                    >
                        <Flex align={"center"} gap="5px">
                            {/* Price in Number */}
                            <Text
                                fontWeight={700}
                                fontSize="25px"
                                className="openSans"
                                color={"primary"}
                            >
                                {"₦670,000"}
                            </Text>{" "}
                            <Text
                                fontSize={{ base: "12px", md: "15px" }}
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
                                fontSize={{ base: "12px", xl: "15px" }}
                            >
                                {"3/10"} Units left
                            </Box>
                        </Flex>
                        {/* Item Name  */}
                        <Text
                            mt={{ base: "13px", sm: "10px", xl: "10px" }}
                            className="openSans"
                            fontWeight={600}
                            fontSize={{
                                base: "20px",
                                sm: "25px",
                                lg: "20px",
                                xl: "30px",
                            }}
                        >
                            Self-contain Studio Apartment with 24/7 electricity
                            and water
                        </Text>
                        {/* Address */}
                        <Text mt="10px" color="light_3" fontSize={[]}>
                            2109 Lawrence Street. Chicago, Illinois
                        </Text>
                    </Box>
                    {/* Number of Rooms and Gents */}
                    {true && (
                        <Box
                            mt="10px"
                            display={{ base: "none", md: "block", xl: "block" }}
                        >
                            <Divider color={"stroke_3"} variant="dashed" />
                            <Flex py="10px" gap="10px" align={"center"}>
                                {/* Number of Beds  */}
                                <Flex>
                                    <Image
                                        src="/images/bed.svg"
                                        alt="Total Number of beds"
                                        display={"inline-block"}
                                        w={["19px", "27px", "27px", "27px"]}
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
                                        w={["19px", "27px", "27px", "27px"]}
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
                            <Divider color={"stroke_3"} variant="dashed" />
                        </Box>
                    )}
                </Box>

                {/* Divider  */}

                {/*  Amenities and contact agent Sections */}
                <Box
                    maxW={{
                        base: "100%",
                        sm: "100%",
                        md: "409px",
                        xl: "409px",
                    }}
                    minW={{ base: "100%", md: "209px", xl: "" }}
                    w="100%"
                >
                    <Box minH="279px">
                        <Text
                            fontWeight={700}
                            fontSize={["25px"]}
                            className="openSans"
                        >
                            Amenities
                        </Text>
                        <Flex mt="10px">
                            <SimpleGrid
                                columns={2}
                                spacingX="7px"
                                spacingY={"20px"}
                                justify="space-between"
                            >
                                {amenities.map((item, i) => {
                                    return (
                                        <Box key={i}>
                                            {item.status && (
                                                <Flex
                                                    key={i}
                                                    w="100%"
                                                    align={"center"}
                                                    gap="10px"
                                                >
                                                    <Flex
                                                        border={"1px"}
                                                        borderColor="stroke_1"
                                                        minW={"40px"}
                                                        minH={"40px"}
                                                        borderRadius={"100%"}
                                                        justify="center"
                                                        align={"center"}
                                                        overflow="hidden"
                                                    >
                                                        <Image
                                                            src={`/images/${item.img}`}
                                                            w={{
                                                                base: "15px",
                                                                xl: "30px",
                                                            }}
                                                            alt={"Item"}
                                                        />
                                                    </Flex>
                                                    <Text
                                                        fontSize="20px"
                                                        fontWeight="400"
                                                        className="openSans"
                                                    >
                                                        {item.item}
                                                    </Text>
                                                </Flex>
                                            )}
                                        </Box>
                                    );
                                })}
                            </SimpleGrid>
                        </Flex>
                    </Box>

                    <Flex gap="10px" mt="10px">
                        {/* Modal for Contact */}
                        <ContactAgentModal
                            isOpen={isOpenMessageModal}
                            onOpen={onOpenMessageModal}
                            onClose={onCloseMessageModal}
                            isOpenSuccess={isOpenSuccessModal}
                            onOpenSuccess={onOpenSuccessModal}
                            onCloseSuccess={onCloseSuccessModal}
                        />
                        <PrimaryButton
                            text="Contact Agent"
                            fontSize="15px"
                            px="19px"
                            onClick={onOpenMessageModal}
                        />{" "}
                        <LightPrimaryButton
                            text="Schedule Tour"
                            px="19px"
                            fontSize="15px"
                            onClick={onOpenTourModal}
                        />
                        {/* Modal for tour  */}
                        <TourModal
                            onOpen={onOpenTourModal}
                            onClose={onCloseTourModal}
                            isOpen={isOpenTourModal}
                        />
                        <Flex align={"center"} gap="10px" minW={"78px"}>
                            <Heart
                                size="32"
                                color={isLiked ? "#DA0C0C" : ""}
                                variant={isLiked ? "Bulk" : "Outline"}
                            />
                            <Text as={"span"}>11 </Text>
                        </Flex>
                    </Flex>
                </Box>

                {true && (
                    <Box
                        mt="10px"
                        display={{ base: "block", md: "none", xl: "none" }}
                    >
                        <Divider color={"stroke_3"} variant="dashed" />
                        <Flex py="10px" gap="10px" align={"center"}>
                            {/* Number of Beds  */}
                            <Flex>
                                <Image
                                    src="/images/bed.svg"
                                    alt="Total Number of beds"
                                    display={"inline-block"}
                                    w={["19px", "27px", "27px", "27px"]}
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
                            <Divider orientation="vertical" height={"17px"} />
                            {/* Number of BathRooms  */}
                            <Flex align={"center"}>
                                <Image
                                    src="/images/bath.svg"
                                    alt="Total Number of beds"
                                    display={"inline-block"}
                                    w={["19px", "27px", "27px", "27px"]}
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
                        <Divider color={"stroke_3"} variant="dashed" />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default FavouriteCard;

const amenities = [
    {
        item: "Kitchen",
        status: true,
        img: "pot.svg",
    },
    {
        item: "Running Water",
        status: true,
        img: "tap.svg",
    },
    {
        item: "Bathroom",
        status: true,
        img: "shower.svg",
    },
    {
        item: "Garden",
        status: true,
        img: "garden.svg",
    },
    {
        item: "Free Internet",
        status: true,
        img: "internet.svg",
    },
    {
        item: "Master Bedroom",
        status: true,
        img: "masterBed.svg",
    },
];
