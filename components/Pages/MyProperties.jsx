import { useCommonContext } from "@/Context/CommonContext";
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
import React, { useState } from "react";
import { LightPrimaryButton, PrimaryButton } from "../Common/Buttons";
import ListTypeNav from "../Common/ListTypeNav";
import ItemDetailsModal from "../Modals/ItemDetailsModal";

const MyProperties = () => {
    const { isGrid } = useCommonContext();
    return (
        <Box>
            <Box mb={["20px", "30px", "30px", "30px"]} px="10px">
                <Text
                    fontWeight={"700"}
                    fontSize={["25px", "45px", "45px", "45px"]}
                >
                    My Properties
                </Text>
                <Flex
                    align="center"
                    mt="25px"
                    gap="10px"
                    justify="space-between"
                >
                    <Text fontWeight="400" fontSize={["15px", "25px"]}>
                        {6} Properties own
                    </Text>
                    <Flex gap="23px">
                        <Box
                            display={{ base: "none", md: "block", xl: "block" }}
                        >
                            <ListTypeNav />
                        </Box>
                        <Box>
                            <Text fontSize="15px">Sort by: Date</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
            <Box mt="">
                {!true ? (
                    <NoProperty />
                ) : (
                    <SimpleGrid
                        columns={{
                            base: "1",
                            sm: isGrid ? "2" : "1",
                            md: isGrid ? "2" : "1",
                            lg: isGrid ? "3" : "1",
                        }}
                        // flexWrap={{ base: "wrap", md: "wrap", xl: "wrap" }}
                        gap="20px"
                    >
                        {proItems.map((item, i) => {
                            return (
                                <PropertiesCard cardData={item} key={item.id} />
                            );
                        })}
                    </SimpleGrid>
                )}
            </Box>
        </Box>
    );
};

export default MyProperties;
const proItems = [
    { id: "1", message: "modal 1", likes: 4, isLiked: true },
    { id: "2", message: "modal 2", likes: 10, isLiked: true },
    { id: "3", message: "modal 3", likes: 14, isLiked: false },

    { id: "4", message: "modal 4", likes: 40, isLiked: true },

    { id: "5", message: "modal 5", likes: 94, isLiked: false },
];
const PropertiesCard = ({ cardData }) => {
    const { isGrid } = useCommonContext();
    const [isLiked, setIsLiked] = useState(cardData && cardData.isLiked);
    const [likedNo, setLikedNo] = useState(cardData && cardData.likes);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            // maxW={isGrid ? "415px" : "100%"}
            // mb="30px"
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
                    md: isGrid ? "column" : "row",
                    xl: isGrid ? "column" : "row",
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
                        md: isGrid ? "100%" : "320px",
                        lg: isGrid ? "100%" : "420px",
                    }}
                    minW={{ base: "100%", md: "100%", lx: "357px" }}
                    w={{ base: "100%", md: "100%", xl: "100%" }}
                >
                    <Box
                        mb="10px"
                        maxW={{ base: "100%", md: "357px", lx: "357px" }}
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
                            maxW="100%"
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
                                    // maxW={{ base: "100%", md: "113px" }}
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
                    // maxW={{ base: "100%", md: "309px", xl: "478px" }}
                    minW="157px"
                >
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
                            Self-contain Studio Apartment with 24/7 electricity
                            and water
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
                            display={{ base: "none", md: "block", xl: "block" }}
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
                                                md: isGrid ? "18px" : "27px",
                                                xl: isGrid ? "18px" : "27px",
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
                                                md: isGrid ? "18px" : "27px",
                                                xl: isGrid ? "18px" : "27px",
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
                            <Divider color={"stroke_3"} variant="dashed" />
                        </Box>
                    )}

                    {/* Woners  and Units owned */}
                    <Flex align="center" gap="10px" justify="space-between">
                        <Flex align="center" mt="10px" gap="10px">
                            {[1, 2, 3, 4, 5].map((item, i) => {
                                return (
                                    <Box
                                        key={i}
                                        _first={{ marginLeft: "0px" }}
                                        marginLeft={{
                                            base: "-31px",
                                            md: isGrid ? "-31px" : "-35px",
                                            xl: isGrid ? "-31px" : "-31px",
                                        }}
                                    >
                                        <Image
                                            borderRadius="100px"
                                            src="/images/avatar.svg"
                                            width={{
                                                base: "40px",
                                                md: isGrid ? "40px" : "60px",
                                                xl: isGrid ? "40px" : "60px",
                                            }}
                                            height={{
                                                base: "40px",
                                                md: isGrid ? "40px" : "60px",
                                                xl: isGrid ? "40px" : "60px",
                                            }}
                                            alt="owners Image"
                                        />
                                    </Box>
                                );
                            })}

                            <Text fontSize="12px">Other Owners</Text>
                        </Flex>

                        <Button
                            _focus={{}}
                            _active={{}}
                            _hover={{}}
                            color="primary"
                            bgColor="primary_5"
                            className="openSans"
                            fontSize={"12px"}
                        >
                            {" "}
                            8 Units Owned{" "}
                        </Button>
                    </Flex>

                    {/* Buttons Section */}

                    <Flex
                        gap="10px"
                        mt="10px"
                        align="center"
                        justify="space-between"
                    >
                        <PrimaryButton
                            text="Sell Unit"
                            fontSize="15px"
                            px="19px"
                            maxW={{
                                base: "100%",
                                md: isGrid ? "342" : "429px",
                                lg: isGrid ? "342" : "429px",
                            }}
                        />{" "}
                        <Flex
                            align={"center"}
                            gap="10px"
                            minW={"78px"}
                            boxShadow="0px 2px 20px #E4F2F3"
                            py="18px"
                            h="65px"
                            justify="center"
                            borderRadius="5px"
                        >
                            <Heart
                                size="32"
                                color={isLiked ? "#DA0C0C" : "#292D32"}
                                variant={isLiked ? "Bulk" : "Outline"}
                                onClick={() => {
                                    if (isLiked) {
                                        setIsLiked(false);

                                        setLikedNo(likedNo - 1);
                                    } else {
                                        setIsLiked(true);

                                        setLikedNo(likedNo + 1);
                                    }
                                }}
                            />
                            <Text as={"span"}> {likedNo} </Text>
                        </Flex>
                    </Flex>
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
    );
};

const NoProperty = () => {
    return (
        <Flex py="100px" px="50px" justify="center" bgColor="light_6">
            <Box align="center">
                <Box>
                    <Box1 size="100" color="#B0B0B0" variant="Bulk" />
                </Box>
                <Text
                    mt="30px"
                    fontSize={{ base: "25px", md: "35px", xl: "35px" }}
                    className="openSans"
                    fontWeight={700}
                >
                    You don’t have any property at the moment.
                </Text>
                <Text
                    mt="30px"
                    fontSize={{ base: "15px", md: "20px", xl: "20px" }}
                    fontWeight={400}
                    className="openSans"
                >
                    When you buy a property or units of a property or
                    properties, they will appear on this page
                </Text>

                <PrimaryButton
                    text="Buy a Property"
                    maxW="429px"
                    fontSize="15px"
                    mt="30px"
                />
            </Box>
        </Flex>
    );
};
