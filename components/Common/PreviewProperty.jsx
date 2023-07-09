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

// SLider Imports import React from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { amenities } from "@/utlis/dummyData";
import { images } from "@/next.config";
import { PropertySuccessModal } from "../Modals/StatusModal";

const PreviewProperty = ({ handleCurrentStep }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box>
            <Box>
                <ImageSlider />
                <Text
                    fontSize={{ base: "20px", md: "35px", xl: "45px" }}
                    mt="20px"
                    fontWeight={700}
                >
                    Master Bedroom
                </Text>
                {/* Amenities details */}
                <Flex
                    flexWrap={"wrap"}
                    mt={{ base: "30px", md: "30px", xl: "40px" }}
                    gap="20px"
                >
                    {amenities.map(({ img, item }, i) => {
                        return (
                            <AmenitiesPreview image={img} text={item} key={i} />
                        );
                    })}
                </Flex>
                {/*  */}
                <Box mt={{ base: "30px", md: "30px", xl: "40px" }}>
                    <DetailsPreview />
                </Box>
                <Box mt={{ base: "30px", md: "30px", xl: "40px" }}>
                    <PropertyAmenities />
                </Box>
                <Box mt={["20px", null, "40px"]}>
                    <PrimaryButton text="Proceed" onClick={onOpen} />
                </Box>
            </Box>
            {/* Modal Import Section */}
            <PropertySuccessModal
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
            />
        </Box>
    );
};

export default PreviewProperty;

const AmenitiesPreview = ({ image, text }) => {
    return (
        <Box
            textAlign={"center"}
            maxW={["44%", null, "189px"]}
            p={{ base: "10px", md: "15px", xl: "20px" }}
            boxShadow="0px 2px 20px rgba(102, 70, 28, 0.11)"
            rounded="5px"
            w="100%"
        >
            <Flex
                rounded={"full"}
                boxShadow={"0px 2px 25px 2px #D4E1EA"}
                w="30px"
                h="30px"
                mx="auto"
                align={"center"}
                justify={"center"}
            >
                <Image
                    src={image && image}
                    alt={text}
                    w="20px"
                    h="20px"
                    display="inline-block"
                    mx="auto"
                />
            </Flex>
            <Text fontSize="12px" fontWeight="700" mt="10px">
                {text}
            </Text>
        </Box>
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

const DetailsPreview = () => {
    return (
        <Box>
            <Text mt="20px" fontSize={"15px"}>
                Featuring an outdoor swimming pool, a fitness center, and a
                garden, Madinat Jumeirah Living - Lamtara 2 has accommodations
                in Dubai with free WiFi and garden views. This property has a
                balcony and free private parking.
            </Text>
            <Text mt="20px" fontSize={"15px"}>
                This air-conditioned apartment is equipped with 1 bedroom, a
                satellite flat-screen TV, a dining area, and a kitchen with a
                dishwasher and a fridge. Towels and bed linen are available in
                this accommodation.
            </Text>
            <Text mt="20px" fontSize={"15px"}>
                The apartment provides a terrace.
            </Text>
            <Text mt="20px" fontSize={"15px"}>
                Jumeira Public Beach is a 10-minute walk from Madinat Jumeirah
                Living - Lamtara 2, while Sufouh Beach is 2.7 km from the
                property. The nearest airport is Dubai International Airport,
                20.9 km from the accommodation.
            </Text>
            <Text mt="20px" fontSize={"15px"}>
                Madinat Jumeirah Living - Lamtara 2 has been welcoming
                Booking.com guests since Feb 9, 2022
            </Text>
            <Text mt="20px" fontSize={"15px"}>
                Distance in property description is calculated using ©
                OpenStreetMap
            </Text>
        </Box>
    );
};

const PropertyAmenities = () => {
    return (
        <Box
            boxShadow={"0px 2px 20px rgba(102, 70, 28, 0.11)"}
            rounded={"10px"}
            border={"1px"}
            borderColor={"stroke_3"}
            bgColor={"white"}
            p={"3px"}
        >
            <Text
                fontWeight={"700"}
                fontSize={"20px"}
                px="23px"
                py="15px"
                bgColor="stroke_3"
                rounded={"5px"}
                mb="10px"
            >
                Property Amenities
            </Text>
            <Flex gap="10px" flexDir={["column", null, "row"]}>
                <Box w="100%">
                    <Image src="/images/dummyMap.svg" alt="dummy image" />
                </Box>
                <Box p="10px" w="100%">
                    <Text fontWeight={"700"} fontSize={"15px"}>
                        Amenities
                    </Text>
                    <Box mt="10px">
                        <SimpleGrid
                            columns={2}
                            spacingX="7px"
                            spacingY={"20px"}
                            justify="space-between"
                            w="100%"
                            p="10px"
                        >
                            {amenities.slice(0, 8).map((item, i) => {
                                return (
                                    <Flex
                                        key={i}
                                        w="100%"
                                        align={"center"}
                                        gap="10px"
                                    >
                                        <Flex
                                            border={"1px"}
                                            borderColor="stroke_1"
                                            minW={"30px"}
                                            minH={"30px"}
                                            w="30px"
                                            h="30px"
                                            borderRadius={"100%"}
                                            justify="center"
                                            align={"center"}
                                            overflow="hidden"
                                        >
                                            <Image
                                                src={item.img}
                                                w={{
                                                    base: "20px",
                                                }}
                                                alt={"Item"}
                                            />
                                        </Flex>
                                        <Text
                                            fontSize="12px"
                                            fontWeight="700"
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
            </Flex>
        </Box>
    );
};
