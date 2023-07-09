import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    useDisclosure,
    Flex,
    Box,
    RadioGroup,
    ButtonGroup,
    Input,
    SimpleGrid,
    Image,
    HStack,
    VStack,
    Divider,
    Icon,
} from "@chakra-ui/react";
import {
    ArrowLeft,
    ArrowLeft2,
    ArrowLeft3,
    ArrowRight2,
    ArrowRight3,
    Export,
    ExportCurve,
    Heart,
    House,
    Location,
    Menu,
    More,
    More2,
    StatusUp,
    TrendUp,
    HomeTrendUp,
    NotificationBing,
    Save2,
    UserEdit,
} from "iconsax-react";

import { useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight, BsShare } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight, FaCaretLeft } from "react-icons/fa";
import { LightPrimaryButton, PrimaryButton } from "../Common/Buttons";

import NextSixDates, { NextSixDatesArray } from "../Common/NextSixDates";
import TimeInputComponent from "../Common/TimeInputComponent";
import { TourSuccessModal } from "./StatusModal";

// SLider Imports import React from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SimilarHomeCard from "../Common/SimilarHomeCard";
import { useRouter } from "next/router";
import BidModal from "./BidModal";
import SellUnitsModal from "./SellUnitsModal";

export default function ItemDetailsModal({ onOpen, onClose, isOpen, datas }) {
    return (
        <>
            <Modal
                blockScrollOnMount={true}
                // isCentered

                isOpen={isOpen}
                onClose={onClose}
                size={"full"}
            >
                <ModalOverlay />
                <ModalContent
                    bgColor={"transparent"}
                    px={{ base: "0px", md: "16px", xl: "0px" }}
                    w="100%"
                    maxW={{ base: "100%", md: "1116px", xl: "1660px" }}
                >
                    <Box
                        bgColor={"white"}
                        borderRadius="0px"
                        className="openSans"
                    >
                        <Flex
                            flexDir={{
                                base: "column",
                                md: "column",
                                xl: "row",
                            }}
                        >
                            {/* Image section */}
                            <Box
                                maxW={{
                                    base: "100%",
                                    md: "100%",
                                    xl: "1019px",
                                }}
                                overflowX="hidden"
                                flex="1"
                                pos="relative"
                            >
                                <ImageSlider />

                                <Flex
                                    display={{
                                        base: "none",
                                        md: "flex",
                                        xl: "flex",
                                    }}
                                    w="100%"
                                    pos="absolute"
                                    top="0"
                                    left="0"
                                    px="20px"
                                    py="20px"
                                    className="blurBg"
                                    align="flex-start"
                                    justify="space-between"
                                    gap="20px"
                                >
                                    <Flex
                                        color="white"
                                        maxW="128px"
                                        display="flex"
                                        gap="15px"
                                        align="center"
                                        justify="center"
                                        cursor="pointer"
                                        py="20px"
                                        className="openSans"
                                        onClick={() => onClose()}
                                    >
                                        <FaArrowLeft /> Back
                                    </Flex>
                                    <Box
                                        p="10px"
                                        display={{
                                            base: "none",
                                            md: "block",
                                            xl: "none",
                                        }}
                                    >
                                        <Flex
                                            h="60px"
                                            w="60px"
                                            borderRadius="full"
                                            className="backdrop_2"
                                            color="black_500"
                                            align="center"
                                            justify="center"
                                            cursor="pointer"
                                        >
                                            <Heart color="#fff" size="16" />
                                        </Flex>

                                        <Flex
                                            mt="20px"
                                            h="60px"
                                            w="60px"
                                            borderRadius="full"
                                            className="backdrop_2"
                                            color="black_500"
                                            align="center"
                                            justify="center"
                                            cursor="pointer"
                                        >
                                            <BsShare color="#fff" size="16" />
                                        </Flex>
                                    </Box>
                                </Flex>
                            </Box>

                            {/* Details Information section */}
                            <Box
                                // px={{ base: "16px", md: "16px", xl: "0px" }}
                                w="100%"
                                maxW={{ base: "100%", md: "100%", xl: "645px" }}
                                pb="38px"
                            >
                                {/* Top Navigation Section */}
                                <TopNav
                                    display={{
                                        base: "none",
                                        md: "none",
                                        xl: "flex",
                                    }}
                                />
                                {/* Price Panel and Sell unit section */}
                                <PricePanel />
                                {/* Diveier */}
                                <Divider
                                    height={{ base: "15px", md: "1px" }}
                                    my="30px"
                                    bgColor="light_30"
                                />

                                <Nav />
                                {/* OverView Section */}
                                <Box
                                    maxH={{
                                        base: "100%",
                                        md: "100%",
                                        xl: "450px",
                                    }}
                                    overflowY={{
                                        base: "unset",
                                        md: "unset",
                                        xl: "auto",
                                    }}
                                >
                                    <OverView />
                                    {/* Diveier */}
                                    <Divider
                                        height={{ base: "15px", md: "1px" }}
                                        my="30px"
                                        bgColor="light_30"
                                    />
                                    {/* Amenities Section */}
                                    <Amenities />
                                    {/* Divider */}
                                    <Divider
                                        height={{ base: "15px", md: "1px" }}
                                        my="30px"
                                        bgColor="light_30"
                                    />
                                    {/* Addres Section */}
                                    <Address />
                                    {/* Divider */}
                                    <Divider
                                        height={{ base: "15px", md: "1px" }}
                                        my="30px"
                                        bgColor="light_30"
                                    />
                                    {/* Neigborhood  */}
                                    <Neigborhood />
                                    {/* Divider */}
                                    <Divider
                                        height={{ base: "15px", md: "1px" }}
                                        my="30px"
                                        bgColor="light_30"
                                    />
                                    {/* SimilarHome */}

                                    <SimilarHome />
                                    {/* Divider */}
                                    <Divider
                                        height={{ base: "15px", md: "1px" }}
                                        my="30px"
                                        bgColor="light_30"
                                    />

                                    {/* Other Owners  */}
                                    <OtherOwners />
                                    {/* Divider */}
                                    <Divider
                                        height={{ base: "15px", md: "1px" }}
                                        my="30px"
                                        bgColor="light_30"
                                    />
                                    {/* MarketValue */}
                                    <MarketValue />
                                    {/* Divider */}
                                    <Divider
                                        height={{ base: "15px", md: "1px" }}
                                        my="30px"
                                        bgColor="light_30"
                                    />
                                    {/* Purchase History */}
                                    <PurchaseHistory />
                                    {/* Divider */}
                                    <Divider
                                        height={{ base: "15px", md: "1px" }}
                                        my="30px"
                                        bgColor="light_30"
                                    />
                                    {/* LegalProtection */}
                                    <LegalProtection />
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                </ModalContent>
            </Modal>
        </>
    );
}

const Nav = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const NavMenuDetails = [
        {
            icon: HomeTrendUp,
            text: "Overview",
            active: "overview",
        },
        {
            icon: StatusUp,
            text: "Amenities",
            active: "amenities",
        },
        {
            icon: Heart,
            text: "Address ",
            active: "address",
        },
        // {
        //     icon: Save2,
        //     text: "Tour",
        //     active: "tour",
        // },
        {
            icon: NotificationBing,
            text: "Nearby Neighborhood",
            active: "neighborhood",
        },
        {
            icon: UserEdit,
            text: "Similar Properties",
            active: "similarProperties",
        },
        {
            icon: Save2,
            text: "Other Owners",
            active: "otherOwners",
        },
        {
            icon: Save2,
            text: "Property Value",
            active: "propertyValue",
        },
        {
            icon: Save2,
            text: "Purchase History",
            active: "purchaseHistory",
        },
        {
            icon: Save2,
            text: "Local legal Protections",
            active: "localLegalProtections",
        },
    ];

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        beforeChange: (current, next) => setActiveSlide(next),
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    const sliderRef = useRef(null);
    const handleScrollToTop = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <Box maxW="100%">
            <Box>
                {/* <Flex align="center" gap="10px">
                    
                </Flex> */}

                <Box
                    align="center"
                    gap="10px"
                    px={{ base: "10px", md: "20px", xl: "20px" }}
                    pos="relative"
                >
                    <Button
                        rounded="full"
                        boxShadow={"-5px 0px 4px rgba(0, 0, 0, 0.25)"}
                        w="46px"
                        h="46px"
                        onClick={() => sliderRef.current.slickPrev()}
                        _hover={{}}
                        _active={{}}
                        _focus={{}}
                        pos="absolute"
                        style={{ zIndex: "1000" }}
                        right="0"
                        transform="auto"
                        translateY="-50%"
                        top="50%"
                        bgColor="whiteAlpha.600"
                        className="backdrop_2"
                        borderRightRadius={"100px"}
                    >
                        <ArrowRight3 color="#B0B0B0" />
                    </Button>
                    <Slider {...settings} ref={sliderRef}>
                        {NavMenuDetails.map((item, i) => (
                            <NavItem
                                key={i}
                                navData={item}
                                activeNav={"activeNav"}
                                onClick={() => handleScrollToTop(item.active)}
                            />
                        ))}
                    </Slider>
                    <Button
                        bgColor="whiteAlpha.600"
                        pos="absolute"
                        left="0"
                        top="50%"
                        transform="auto"
                        translateY="-50%"
                        borderRightRadius={"100px"}
                        boxShadow={"5px 0px 4px rgba(0, 0, 0, 0.25)"}
                        w="46px"
                        h="46px"
                        className="backdrop_2"
                        onClick={() => sliderRef.current.slickNext()}
                        _hover={{}}
                        _active={{}}
                        _focus={{}}
                        style={{ zIndex: "1000" }}
                    >
                        {" "}
                        <ArrowLeft3 color="#B0B0B0" />
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

const SimilarHome = () => {
    const mainSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        // afterChange: (index) => setSelectedImage(index),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const sliderRef = useRef(null);

    return (
        <Box
            maxW="100%"
            px={{ base: "10px", md: "20px", xl: "20px" }}
            id="similarProperties"
        >
            <Flex align="center" justify="space-between">
                <Text
                    fontSize={{ base: "20px", md: "25px", xl: "25px" }}
                    fontWeight={"700"}
                >
                    Similar Home
                </Text>

                <Flex align="center" gap="10px">
                    <Button
                        rounded="full"
                        boxShadow={"0px 2px 20px #E4F2F3"}
                        w="46px"
                        h="46px"
                        className="backdrop_2"
                        onClick={() => sliderRef.current.slickNext()}
                        _hover={{}}
                        _active={{}}
                        _focus={{}}
                    >
                        {" "}
                        <ArrowLeft3 color="#B0B0B0" />
                    </Button>
                    <Button
                        rounded="full"
                        boxShadow={"0px 2px 20px #E4F2F3"}
                        w="46px"
                        h="46px"
                        onClick={() => sliderRef.current.slickPrev()}
                        _hover={{}}
                        _active={{}}
                        _focus={{}}
                    >
                        <ArrowRight3 color="#D49633" />
                    </Button>
                </Flex>
            </Flex>
            <Box mt="20px">
                <Box>
                    <Slider {...mainSliderSettings} ref={sliderRef}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((image, index) => (
                            <Box key={index}>
                                <SimilarHomeCard />
                            </Box>
                        ))}
                    </Slider>
                </Box> 
            </Box>
        </Box>
    );
};

const LegalProtection = () => {
    const data = [
        {
            title: "Housing",
            details:
                "Housing protections include being unfairly evicted, denied housing, or refused the ability to rent or buy housing.",
        },
        {
            title: "Employment",

            details:
                "Employment protections include being fired, denied employment, or otherwise discriminated against by an employer.",
        },
        {
            title: "Public Accomodations",
            details:
                "Public accommodations protections include being unfairly refused services or entry to or from places accessible to the public (retail stores, restaurants, parks, hotels, etc).",
        },
    ];
    return (
        <Box
            px={{ base: "10px", md: "20px", xl: "20px" }}
            id="localLegalProtections"
        >
            <Text
                fontSize={{ base: "20px", md: "25px", xl: "25px" }}
                fontWeight={"700"}
            >
                Legal Protection
            </Text>

            <Box mt="20px">
                <Flex gap="20px" align="center" mb="20px">
                    <Flex
                        minW="68px"
                        minH="68px"
                        bgColor="primary_5"
                        rounded="full"
                        align="center"
                        justify="center"
                    >
                        <Image
                            src="/images/law.svg"
                            alt="Law Icon"
                            maxW="46px"
                        />
                    </Flex>
                    <Box>
                        <Text>
                            Are there legal protections for the new community
                            residents at the city level in Anchorage?
                        </Text>
                    </Box>
                </Flex>

                {/*  */}
                {data.map(({ details, title }, i) => {
                    return (
                        <Box
                            p="15px"
                            bgColor="primary_7"
                            key={i}
                            rounded="5px"
                            mb="20px"
                        >
                            <Text
                                fontSize={{
                                    base: "20px",
                                    md: "30px",
                                    xl: "20px",
                                }}
                                fontWeight="600"
                            >
                                {" "}
                                {title}{" "}
                            </Text>
                            <Text
                                fontSize={{
                                    base: "15px",
                                    md: "20px",
                                    xl: "15px",
                                }}
                            >
                                {" "}
                                {details}{" "}
                            </Text>
                        </Box>
                    );
                })}

                <Text>
                    The listing content relating to real estate for sale on this
                    web site comes in part from the IDX Program of Lagos
                    Multiple Listing Service, Inc. (LG MLS). Real estate
                    listings held by brokerage firms other than Gida, Inc. are
                    marked with either the listing brokerage’s logo or the LG
                    MLS logo and information about them includes the name of the
                    listing brokerage. All information is deemed reliable but is
                    not guaranteed and should be independently verified for
                    accuracy. Copyright 2022 Lagos Multiple Listing Service,
                    Inc. All rights reserved.
                </Text>
                <Text mt="20px">
                    The listing broker’s offer of compensation is made only to
                    participants of the MLS where the listing is filed.
                </Text>
            </Box>
        </Box>
    );
};

const PurchaseHistory = () => {
    return (
        <Box px={{ base: "10px", md: "20px", xl: "20px" }} id="purchaseHistory">
            <Text
                fontSize={{ base: "20px", md: "25px", xl: "25px" }}
                fontWeight={"700"}
            >
                Purchase History
            </Text>

            <Box mt="20px">
                {[1, 2, 3, 4].map((text, i) => {
                    return (
                        <Flex gap="20px" key={i}>
                            <Text
                                alignSelf={"center"}
                                mb={{ base: "40px", md: "30px", xl: "30px" }}
                            >
                                2018
                            </Text>

                            <Box pos="relative">
                                <Divider
                                    orientation="vertical"
                                    variant="dashed"
                                    h="100%"
                                />
                                <Box
                                    pos="absolute"
                                    bgColor="primary"
                                    rounded="full"
                                    w="20px"
                                    h="20px"
                                    transform="auto"
                                    top="40%"
                                    translateY={"-50%"}
                                    left="50%"
                                    translateX="-50%"
                                ></Box>
                            </Box>
                            <Box
                                mb="40px"
                                p="15px"
                                rounded="10px"
                                boxShadow="0px 4px 15px 2px rgba(0, 0, 0, 0.05)"
                                w="100%"
                            >
                                <Text
                                    fontSize={{
                                        base: "15px",
                                        md: "20px",
                                        xl: "20px",
                                    }}
                                    fontWeight="600"
                                >
                                    A group purchased 100% of this property
                                </Text>
                                <Divider
                                    variant="dashed"
                                    my={{
                                        base: "10px",
                                        md: "15px",
                                        xl: "15px",
                                    }}
                                    color="stroke"
                                />
                                <Flex align="center" justify="space-between">
                                    <Text>
                                        <Text as="strong">₦150,555 </Text>/ Unit
                                    </Text>
                                    <Text>Total: ₦629,394,022.99</Text>
                                </Flex>
                            </Box>
                        </Flex>
                    );
                })}
            </Box>
        </Box>
    );
};

const MarketValue = () => {
    return (
        <Box px={{ base: "10px", md: "20px", xl: "20px" }} id="propertyValue">
            <Text
                fontSize={{ base: "20px", md: "25px", xl: "25px" }}
                fontWeight={"700"}
            >
                Market Value
            </Text>

            <Box mt="20px">
                <Image
                    src="/images/chart.svg"
                    alt="location"
                    w="100%"
                    minW="100%"
                    maxH="364px"
                />
            </Box>
        </Box>
    );
};

const OtherOwners = () => {
    const data = [
        {
            name: "Betty Ajewole",
            ImgUrl: "",
            valueType: "Unit’s Current Value",
            value: "₦2,000,000",
        },
    ];
    const { onOpen, onClose, isOpen } = useDisclosure();

    return (
        <Box px={{ base: "10px", md: "20px", xl: "20px" }} id="otherOwners">
            {/* Bid Modal start */}
            <BidModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
            {/* Bid Modal end  */}
            <Text
                fontSize={{ base: "20px", md: "25px", xl: "25px" }}
                fontWeight={"700"}
            >
                Other Owners
            </Text>

            <Box mt="30px">
                {[1, 2, 3].map((item, i) => {
                    return (
                        <Box
                            key={i}
                            mb="10px"
                            boxShadow="0px 2px 20px #E4F2F3"
                            p="10px"
                            rounded="5px"
                        >
                            <Flex align="center" justify="space-between">
                                <Flex align="center" gap="10px">
                                    <Image
                                        src="/images/owner.svg"
                                        alt=""
                                        w={{
                                            base: "60px",
                                            md: "120px",
                                            xl: "60px",
                                        }}
                                        h={{
                                            base: "60px",
                                            md: "120px",
                                            xl: "60px",
                                        }}
                                        borderRadius="10px"
                                    />
                                    <Text fontSize="20px" fontWeight="600">
                                        Betty Ajewole
                                    </Text>
                                </Flex>

                                <Box>
                                    <Button
                                        _hover={{}}
                                        _active={{}}
                                        py="17px"
                                        px="48px"
                                        bgColor="primary"
                                        w={{ base: "", md: "", xl: "" }}
                                        color="white"
                                        fontSize="12px"
                                        onClick={() => onOpen()}
                                    >
                                        {" "}
                                        BID{" "}
                                    </Button>
                                </Box>
                            </Flex>

                            <Divider variant="dashed" my="10px" />

                            {/* Deteminator  */}

                            <Box>
                                <Flex
                                    gap="10px"
                                    align="center"
                                    justify="space-between"
                                >
                                    {/* column 1 */}
                                    <Flex
                                        gap="10px"
                                        align="center"
                                        display={{
                                            base: "none",
                                            md: "flex",
                                            xl: "flex",
                                        }}
                                    >
                                        <Flex
                                            align="center"
                                            justify="center"
                                            boxShadow="0px 2px 20px rgba(102, 70, 28, 0.11)"
                                            w={{
                                                base: "40px",
                                                md: "65px",
                                                xl: "40px",
                                            }}
                                            h={{
                                                base: "40px",
                                                md: "65px",
                                                xl: "40px",
                                            }}
                                            rounded="full"
                                        >
                                            <StatusUp
                                                size="20"
                                                color="#292D32"
                                                variant="TwoTone"
                                            />
                                        </Flex>
                                        <Box>
                                            <Text
                                                fontSize={{
                                                    base: "12px",
                                                    md: "20px",
                                                    xl: "12px",
                                                }}
                                            >
                                                Unit’s Current Value
                                            </Text>
                                            <Text
                                                fontWeight="700"
                                                fontSize={{
                                                    base: "15px",
                                                    md: "25px",
                                                    xl: "15px",
                                                }}
                                            >
                                                ₦2,000,000
                                            </Text>
                                        </Box>
                                    </Flex>

                                    {/* column 2 */}
                                    <Flex gap="10px" align="center">
                                        <Flex
                                            align="center"
                                            justify="center"
                                            boxShadow="0px 2px 20px rgba(102, 70, 28, 0.11)"
                                            w={{
                                                base: "40px",
                                                md: "65px",
                                                xl: "40px",
                                            }}
                                            h={{
                                                base: "40px",
                                                md: "65px",
                                                xl: "40px",
                                            }}
                                            rounded="full"
                                        >
                                            <TrendUp
                                                size="20"
                                                color="#292D32"
                                                variant="TwoTone"
                                            />
                                        </Flex>
                                        <Box>
                                            <Text
                                                fontSize={{
                                                    base: "12px",
                                                    md: "20px",
                                                    xl: "12px",
                                                }}
                                            >
                                                Price Per Unit
                                            </Text>
                                            <Text
                                                fontWeight="700"
                                                fontSize={{
                                                    base: "15px",
                                                    md: "25px",
                                                    xl: "15px",
                                                }}
                                            >
                                                ₦132,000
                                            </Text>
                                        </Box>
                                    </Flex>

                                    {/* column  3*/}

                                    <Flex gap="10px" align="center">
                                        <Flex
                                            align="center"
                                            justify="center"
                                            boxShadow="0px 2px 20px rgba(102, 70, 28, 0.11)"
                                            w={{
                                                base: "40px",
                                                md: "65px",
                                                xl: "40px",
                                            }}
                                            h={{
                                                base: "40px",
                                                md: "65px",
                                                xl: "40px",
                                            }}
                                            rounded="full"
                                        >
                                            <House
                                                size="20"
                                                color="#292D32"
                                                variant="TwoTone"
                                            />
                                        </Flex>
                                        <Box>
                                            <Text
                                                fontSize={{
                                                    base: "12px",
                                                    md: "20px",
                                                    xl: "12px",
                                                }}
                                            >
                                                Number of Units
                                            </Text>
                                            <Text
                                                fontWeight="700"
                                                fontSize={{
                                                    base: "15px",
                                                    md: "25px",
                                                    xl: "15px",
                                                }}
                                            >
                                                7
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

const Neigborhood = () => {
    const data = [
        {
            icon: "trek.svg",
            title: "Access to Major road",
            details: "5 / 100 Score (Car-Dependent)",
        },
        {
            icon: "shopping.svg",
            title: "Super Mall",
            details: "50 Kilometers Away",
        },
        {
            icon: "museum.svg",
            title: "County Museum",
            details: "About 100 Meters Away",
        },
        {
            icon: "park.svg",
            title: "Town Park",
            details: "10 Miles Away",
        },
        {
            icon: "bike.svg",
            title: "Bike/Motorcycle",
            details: "Good road path for bikes",
        },
        {
            icon: "school.svg",
            title: "Private School",
            details: "350 Meters Away",
        },
    ];
    return (
        <Box px={{ base: "10px", md: "20px", xl: "20px" }} id="neighborhood">
            <Text
                fontSize={{ base: "20px", md: "25px", xl: "25px" }}
                fontWeight={"700"}
            >
                Neigborhood
            </Text>

            <Box mt="20px">
                <SimpleGrid
                    minChildWidth={{
                        base: "182px",
                        md: "265px",
                        xl: "280px",
                    }}
                    spacingY="30px"
                    spacingX={"20px"}
                >
                    {data.map((item, i) => {
                        return (
                            <Flex key={i} gap="10px" align="center">
                                <Box
                                    borderRadius="full"
                                    bgColor="primary"
                                    p="10px"
                                >
                                    <Image
                                        src={`/images/${item.icon}`}
                                        w="32px"
                                        h="32px"
                                        alt={item.title}
                                    />
                                </Box>
                                <Box>
                                    <Text fontSize="20px" fontWeight="700">
                                        {item.title}
                                    </Text>
                                    <Divider variant="dashed" />
                                    <Text noOfLines={1} fontSize="15px">
                                        {item.details}
                                    </Text>
                                </Box>
                            </Flex>
                        );
                    })}
                </SimpleGrid>
            </Box>
        </Box>
    );
};

const Address = () => {
    return (
        <Box px={{ base: "10px", md: "20px", xl: "20px" }} id="address">
            <Text
                fontSize={{ base: "20px", md: "25px", xl: "25px" }}
                fontWeight={"700"}
            >
                Address
            </Text>

            <Box mt="20px">
                <Image
                    src="/images/location.svg"
                    alt="location"
                    w="100%"
                    minW="100%"
                    maxH="364px"
                />
            </Box>
        </Box>
    );
};

const Amenities = () => {
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
    return (
        <Box px={{ base: "10px", md: "20px", xl: "20px" }} id="amenities">
            <Text
                fontSize={{ base: "20px", md: "25px", xl: "25px" }}
                fontWeight={"700"}
            >
                Amenities
            </Text>

            <Box mt="20px">
                <SimpleGrid
                    minChildWidth={{
                        base: "182px",
                        md: "265px",
                        xl: "280px",
                    }}
                    spacingY="20px"
                    spacingX={"5px"}
                >
                    {amenities.map((item, i) => {
                        return (
                            <Flex key={i} gap="10px" align="center">
                                <Flex
                                    border={"1px"}
                                    borderColor="stroke_1"
                                    minW={"40px"}
                                    minH={"40px"}
                                    borderRadius={"100%"}
                                    justify="center"
                                    align={"center"}
                                    overflow="hidden"
                                    boxShadow="0px 2px 25px 2px #D4E1EA"
                                >
                                    <Image
                                        src={`/images/${item.img}`}
                                        w={{
                                            base: "30px",
                                            xl: "30px",
                                        }}
                                        alt={"Item"}
                                    />
                                </Flex>
                                <Text
                                    fontSize={{
                                        base: "15px",
                                        md: "20px",
                                        xl: "15px",
                                    }}
                                    fontWeight="400"
                                    className="openSans"
                                >
                                    {item.item}
                                </Text>
                            </Flex>
                        );
                    })}
                </SimpleGrid>
            </Box>
        </Box>
    );
};

const OverView = () => {
    const overViewBox = [
        "GAS FP",
        "GATE ACCESS",
        "LARGE DECK",
        "STORAGE SHED",
        "FENCED YARD",
        "WALK-IN CLOSETS",
        "BEAUTIFUL HOME",
    ];

    return (
        <Box px={{ base: "10px", md: "20px", xl: "20px" }} id="overview">
            <Text
                fontSize={{ base: "20px", md: "25px", xl: "25px" }}
                fontWeight={"700"}
            >
                Overview
            </Text>
            <Flex mt="20px" flexWrap="wrap" gap="10px">
                {overViewBox &&
                    overViewBox.map((item, i) => {
                        return (
                            <Button
                                _hover={{}}
                                _active={{}}
                                _focus={{}}
                                key={i}
                                bgColor="primary_6"
                                py="8px"
                                px="20px"
                                fontSize="15px"
                                color="primary"
                            >
                                {" "}
                                {item}{" "}
                            </Button>
                        );
                    })}
            </Flex>
            <Box mt="20px">
                <Text color="light_20" fontSize="17px" noOfLines={7}>
                    Beautiful home in a fantastic neighborhood! NO HOA!!! This
                    home is open, spacious and ready to host large family
                    gatherings! Upstairs: Master & 2nd BR, 2 full BA, Large LR,
                    Gas FP, open kitchen, formal dining and patio. Downstairs: 2
                    BR, Family RM, Gas FP & 3RD Full BA. Fenced yard with gate
                    access for {`RV's`}, raised garden bed, storage shed and
                    large deck for those summer cookouts! Easy to show! Home is
                    NOT vacant! Available to show from 1pm to 9pm Sunday thru
                    Saturday!
                </Text>
                <Text
                    color="primary"
                    cursor="pointer"
                    as="span"
                    fontSize="17px"
                    fontWeight="bold"
                    textDecor={"underline"}
                >
                    {" "}
                    See More
                </Text>
            </Box>
        </Box>
    );
};

const PricePanel = () => {
    const { onOpen, onClose, isOpen } = useDisclosure();

    return (
        <Box px={{ base: "16px", md: "20px", xl: "20px" }} pt="20px">
            <Flex align="center" justify="space-between">
                {/* Price panel */}

                <Flex
                    w="100%"
                    gap="10px"
                    flexDir={{ base: "column", md: "row", xl: "row" }}
                >
                    <Text
                        fontWeight="700"
                        fontSize={{ base: "20px", md: "25px", xl: "35px" }}
                    >
                        ₦629,394,022.99
                    </Text>

                    <Flex align="flex-end" gap="10px">
                        <Text
                            className="openSans"
                            color={"light_4"}
                            pr="10px"
                            borderRight={"1px"}
                            borderRightColor="stroke"
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

                        <Text
                            className="openSans"
                            color={"light_4"}
                            pr="10px"
                            borderRight={"1px"}
                            borderRightColor="stroke"
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

                        <Text className="openSans" color={"light_4"}>
                            <Text
                                fontWeight={700}
                                as="span"
                                fontSize={"15px"}
                                color="black"
                            >
                                {" "}
                                {"2,153"}
                            </Text>{" "}
                            sqft
                        </Text>
                    </Flex>
                </Flex>

                {/* More modal functions, to be visible on small screen alone */}
                <Flex
                    w="100%"
                    gap="20px"
                    display={{ base: "flex", md: "none", xl: "none" }}
                    justify="flex-end"
                >
                    <Flex gap="5px" cursor="pointer" align="center">
                        <Heart color="#292D32" size="27" />
                        <Text
                            display={{
                                base: "none",
                                md: "block",
                                xl: "block",
                            }}
                            fontSize="16px"
                        >
                            Save
                        </Text>
                    </Flex>

                    <Flex gap="5px" cursor="pointer" align="center">
                        <ExportCurve
                            color="#292D32"
                            size="27"
                            variant="Linear"
                        />
                        <Text
                            display={{
                                base: "none",
                                md: "block",
                                xl: "block",
                            }}
                            fontSize="16px"
                        >
                            Share
                        </Text>
                    </Flex>
                    <Box>
                        <More size="27" />
                    </Box>
                </Flex>
            </Flex>
            <Box>
                <Flex align="center" gap="10px" mt="15px">
                    <Box display={{ base: "none", md: "block", xl: "block" }}>
                        <Location size="24px" />
                    </Box>

                    <Text fontSize={{ base: "20px", md: "20px", xl: "20px" }}>
                        Plot PC 12. Churchgate Street. Victoria Island, Lagos
                    </Text>
                </Flex>

                <Flex
                    align={{ base: "flex-start", md: "center", xl: "center" }}
                    gap="10px"
                    mt="15px"
                    justify="space-between"
                    flexDir={{ base: "column", md: "row", xl: "row" }}
                >
                    <Text fontSize="20px">
                        <Text as="strong">Price/ Unit Est.</Text> ₦186,910/
                        <Text as="span" color="" fontSize="15px">
                            Unit
                        </Text>
                    </Text>
                    {/* Unit left button */}
                    <Box
                        as="div"
                        ml="5px"
                        px="10px"
                        py="5px"
                        bgColor={"stroke_1"}
                        className="openSans"
                        borderRadius={"100px"}
                        fontSize={{ base: "12px", xl: "15px" }}
                        fontWeight="700"
                        maxW="135px"
                        display={{ base: "block", md: "none", xl: "block" }}
                    >
                        {"3/10"} Units left
                    </Box>
                </Flex>
                <Box mt="15px">
                    <LightPrimaryButton
                        text="Sell Units"
                        fontWeight="700"
                        color="primary"
                        borderColor="primary"
                        _active={{}}
                        onClick={() => {
                            onOpen();
                        }}
                    />
                </Box>
            </Box>

            {/* Sell Unit Modal */}
            <SellUnitsModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
        </Box>
    );
};

const TopNav = ({ ...props }) => {
    return (
        <Flex
            mb="10px"
            {...props}
            align={"center"}
            justify="space-between"
            borderBottom="1px"
            borderBottomColor={"stroke_3"}
            py="8px"
            px="20px"
        >
            <Image src="/images/logo.png" w="34px" h="100%" alt="Gida logo" />

            <Flex gap="20px">
                <Flex gap="5px" cursor="pointer" align="center">
                    <Heart color="#292D32" size="27" />
                    <Text
                        display={{
                            base: "none",
                            md: "block",
                            xl: "block",
                        }}
                        fontSize="16px"
                    >
                        Save
                    </Text>
                </Flex>

                <Flex gap="5px" cursor="pointer" align="center">
                    <ExportCurve color="#292D32" size="27" variant="Linear" />
                    <Text
                        display={{
                            base: "none",
                            md: "block",
                            xl: "block",
                        }}
                        fontSize="16px"
                    >
                        Share
                    </Text>
                </Flex>
                <Box>
                    <More size="27" />
                </Box>
            </Flex>
        </Flex>
    );
};

const ImageSlider = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const images = [
        "/images/houseModal.svg",
        "/images/houseModal.svg",
        "/images/houseModal.svg",
        "/images/houseModal.svg",
        "/images/houseModal.svg",
        "/images/houseModal.svg",
        "/images/houseModal.svg",
        "/images/houseModal.svg",
        "/images/houseModal.svg",
        "/images/houseModal.svg",
    ];

    const mainSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        afterChange: (index) => setSelectedImage(index),
    };
    // thumb Arrow Next and prev
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <Box
                as="button"
                // onClick={onClick}
                onClick={() => sliderRef.current.slickNext(3)}
                bgColor="light_10"
                className="backdrop_2"
                pos="absolute"
                bottom="6px"
                px="10px"
                top="0"
                left="0"
                style={{ zIndex: 1000 }}
            >
                <FiChevronLeft fontSize={"24px"} />
            </Box>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <Box
                as="button"
                onClick={onClick}
                bgColor="light_10"
                className="backdrop_2"
                pos="absolute"
                style={{ zIndex: 1000 }}
                bottom="6px"
                top="0"
                right="0"
                px="10px"
            >
                <FiChevronRight fontSize="24px" />
            </Box>
        );
    };

    const thumbnailSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        initialSlide: selectedImage,
        // afterChange: (index) => setSelectedImage(index),
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const sliderRef = useRef(null);
    const handleThumbnailClick = (index) => {
        setSelectedImage(index);
        sliderRef.current.slickGoTo(index);
    };
    return (
        <Box>
            <Box position={"relative"}>
                <Button
                    onClick={() => sliderRef.current.slickPrev()}
                    pos="absolute"
                    right="20px"
                    top="50%"
                    transform={""}
                    translateY="-50%"
                    style={{ zIndex: 1000 }}
                    bgColor="black_500"
                    color="white"
                    fontSize="15px"
                    _hover={{}}
                    _active={{}}
                    _focus={{}}
                    rightIcon={<BsArrowRight />}
                    className="backdrop_2"
                >
                    Prev
                </Button>
                <Button
                    className="backdrop_2"
                    onClick={() => sliderRef.current.slickNext()}
                    pos="absolute"
                    left="20px"
                    top="50%"
                    transform={""}
                    translateY="-50%"
                    style={{ zIndex: 1000 }}
                    bgColor="black_500"
                    color="white"
                    fontSize="15px"
                    _hover={{}}
                    _active={{}}
                    _focus={{}}
                    leftIcon={<BsArrowLeft />}
                >
                    {" "}
                    Next
                </Button>
                <Slider {...mainSliderSettings} ref={sliderRef}>
                    {images.map((image, index) => (
                        <Box key={index}>
                            <Image
                                src={image}
                                alt=""
                                w="100%"
                                objectFit={"cover"}
                                maxH="730px"
                                image
                            />
                        </Box>
                    ))}
                </Slider>
            </Box>
            <Slider {...thumbnailSliderSettings}>
                {images.map((image, index) => (
                    <Box
                        key={index}
                        onClick={() => handleThumbnailClick(index)}
                        // px="10px"
                        _notFirst={{ px: "10px" }}

                        // maxW="201px"
                    >
                        <Image
                            src={image}
                            // opacity={selectedImage === index ? 1 : 0.5}
                            alt=""
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

const NavItem = ({ navData, activeNav, ...props }) => {
    const { icon, text, active } = navData;
    const router = useRouter();

    return (
        <Box className="iconBox" {...props}>
            <Box
                // mt="10px"
                as="button"
                display="flex"
                alignItems="center"
                borderBottom={active === activeNav ? "1px" : "1px"}
                borderColor={active === activeNav ? "primary" : "transparent "}
                py="10px"
                w={"100%"}
                _hover={{
                    borderBottom: "1px",
                    borderColor: "primary",
                    color: "primary",
                }}
                onClick={() => {}}
            >
                <Icon
                    as={icon}
                    fontSize="15px"
                    color={"#000"}
                    className={"iconSax"}
                />

                <Text
                    flex={1}
                    color={active === activeNav ? "primary" : "black_300"}
                    ml={active === activeNav ? "5px" : "8px"}
                    className="openSans"
                    fontWeight={active === activeNav ? "700" : "400"}
                    fontSize={["15px"]}
                    lineHeight={"27px"}
                    textAlign="left"
                    _hover={{ color: "primary" }}
                >
                    {text}
                </Text>
            </Box>
        </Box>
    );
};
