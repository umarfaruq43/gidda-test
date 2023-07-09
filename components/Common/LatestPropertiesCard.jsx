import { useCommonContext } from "@/Context/CommonContext";
import {
    Box,
    Button,
    Divider,
    Flex,
    Icon,
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

const LatestPropertiesCard = ({ status, cardData, ...props }) => {
    const [isLiked, setIsLiked] = useState(cardData && cardData.isLiked);
    const [likedNo, setLikedNo] = useState(cardData && cardData.likes);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box {...props}>
            <Box
                overflow={"hidden"}
                w="100%"
                borderRadius={"8px"}
                bgColor={status === "sponsored" ? "primary_9" : "white"}
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
                    px={{ base: "5px", md: "14px", xl: "20px" }}
                    position={"relative"}
                    flexDir={{
                        base: "column",
                        md: "column",
                        xl: "column",
                    }}
                    gap={{ base: "15px", sm: "15px", xl: "30px" }}
                    transitionDuration=".5s"
                    bgColor={status === "sponsored" ? "primary_9" : "white"}
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
                            maxW={{ base: "100%", md: "357px", lx: "357px" }}
                        >
                            <Image
                                src="/images/beach_1.svg"
                                w="100%"
                                h="100%"
                                objectFit={"cover"}
                                alt="house_1"
                                borderRadius="10px"
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
                    <Box minW="7px">
                        {/* Price, Name and Address Box */}
                        <Box>
                            <Flex align={"center"} justify={"space-between"}>
                                <Flex gap="5px" align={"center"}>
                                    {/* Price in Number */}
                                    <Text
                                        fontWeight={700}
                                        fontSize={{
                                            base: "10px",
                                            sm: "15px",
                                            md: "15px",
                                            xl: "25px",
                                        }}
                                        className="openSans"
                                        color={"primary"}
                                    >
                                        {"₦670,000"}
                                    </Text>{" "}
                                    <Text
                                        fontSize={{
                                            base: "10px",
                                            sm: "15px",
                                            md: "12px",
                                        }}
                                        className="openSans"
                                    >
                                        PER UNIT
                                    </Text>
                                    {/* Unit Left Button */}{" "}
                                    <Box
                                        display={{
                                            base: "none",
                                            md: "block",
                                            xl: "",
                                        }}
                                        as="div"
                                        ml="5px"
                                        px="10px"
                                        py="5px"
                                        bgColor={"stroke_1"}
                                        className="openSans"
                                        borderRadius={"100px"}
                                        fontSize={{
                                            base: "12px",
                                            md: "12px",
                                        }}
                                    >
                                        {"3/10"} Units left
                                    </Box>
                                </Flex>
                                {/* Favourite section */}

                                <Icon
                                    as={Heart}
                                    boxSize={{ base: "15", md: "26px", xl: "" }}
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
                            </Flex>
                            {/* Item Name  */}
                            <Text
                                mt={{ base: "10px", md: "10px", xl: "10px" }}
                                className="openSans"
                                fontWeight={600}
                                fontSize={{
                                    base: "12px",
                                    sm: "15px",
                                    md: "15px",
                                    xl: "20px",
                                }}
                            >
                                Self-contain Studio Apartment with 24/7
                                electricity and water
                            </Text>
                            {/* Address */}
                            <Text
                                display={{ base: "none", md: "block", xl: "" }}
                                mt="10px"
                                color="light_3"
                                fontSize={{
                                    base: "15px",
                                    md: "11px",
                                    xl: "15px",
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
                                <Divider color={"stroke_3"} variant="solid" />
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    w="100%"
                                >
                                    <Flex
                                        py="10px"
                                        gap="10px"
                                        align={"center"}
                                        justify={"space-between"}
                                        w={{
                                            base: "100%",
                                            md: "60%",
                                            xl: "50%",
                                        }}
                                    >
                                        {/* Number of Beds  */}
                                        <Flex w="100%">
                                            <Image
                                                src="/images/bed.svg"
                                                alt="Total Number of beds"
                                                display={"inline-block"}
                                                w={{
                                                    base: "18px",
                                                    md: "18px",
                                                    xl: "18px",
                                                }}
                                            />{" "}
                                            <Text
                                                ml="6px"
                                                className="openSans"
                                                color={"light_4"}
                                                fontSize={{
                                                    base: "10px",
                                                    sm: "15px",
                                                    md: "15px",
                                                    xl: "",
                                                }}
                                            >
                                                <Text
                                                    fontWeight={700}
                                                    as="span"
                                                    fontSize={{
                                                        base: "10px",
                                                        sm: "15px",
                                                        md: "15px",
                                                        xl: "",
                                                    }}
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
                                        <Flex
                                            align={"center"}
                                            w="100%"
                                            justify={"flex-end"}
                                        >
                                            <Image
                                                src="/images/bath.svg"
                                                alt="Total Number of beds"
                                                display={"inline-block"}
                                                w={{
                                                    base: "18px",
                                                    md: "18px",
                                                    xl: "18px",
                                                }}
                                            />{" "}
                                            <Text
                                                ml="6px"
                                                className="openSans"
                                                color={"light_4"}
                                                fontSize={{
                                                    base: "10px",
                                                    sm: "15px",
                                                    md: "15px",
                                                    xl: "",
                                                }}
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

                                    <Text
                                        fontSize={"15px"}
                                        fontWeight={700}
                                        display={{
                                            base: "none",
                                            md: "block",
                                            xl: "",
                                        }}
                                    >
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
                            </Box>
                        )}

                        {/* Buttons Section */}
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

export default LatestPropertiesCard;

//  <Flex
//      align={"center"}
//      gap="10px"
//      minW={"78px"}
//      boxShadow="0px 2px 20px #E4F2F3"
//      py="18px"
//      h="65px"
//      justify="center"
//      borderRadius="5px"
//  >
//      <Heart
//          size="32"
//          color={isLiked ? "#DA0C0C" : "#292D32"}

//          onClick={() => {
//              if (isLiked) {
//                  setIsLiked(false);

//                  setLikedNo(likedNo - 1);
//              } else {
//                  setIsLiked(true);

//                  setLikedNo(likedNo + 1);
//              }
//          }}
//      />
//      <Text as={"span"}> {likedNo} </Text>
//  </Flex>;
