import ComponentSize from "@/Layout/ComponentSIze";
import { Box, Divider, Flex, Link, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import FeaturedCard from "./FeaturedCard";
import LatestPropertiesCard from "./LatestPropertiesCard";
import { proItems } from "@/utlis/dummyData";
import NextLink from "next/link";

const Otherproperties = ({ title, noOfUnits }) => {
    const NextArrow = (props) => {
        return (
            <Box
                as="button"
                onClick={() => sliderRef.current.slickPrev()}
                style={{ zIndex: 200 }}
                display="flex"
                alignItems="center"
                gap="7px"
                px="14px"
                py="7px"
                rounded="full"
                shadow={" 0px 2px 20px #E4F2F3"}
            >
                <FiChevronLeft fontSize={{ base: "20px", md: "24px" }} />
                <Text fontWeight={700}>prev</Text>
            </Box>
        );
    };

    const PrevArrow = (props) => {
        return (
            <Box
                as="button"
                onClick={() => sliderRef.current.slickNext()}
                style={{ zIndex: 200 }}
                display="flex"
                alignItems="center"
                gap="7px"
                px="14px"
                py="7px"
                rounded="full"
                shadow={" 0px 2px 20px #E4F2F3"}
            >
                <Text fontWeight={700}>next</Text>
                <FiChevronRight fontSize={{ base: "20px", md: "24px" }} />
            </Box>
        );
    };

    const mainSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        rows: 1,
        slideMargin: 20,
        prevArrow: PrevArrow,

        responsive: [
            {
                breakpoint: 1424, // adjust the breakpoint value as per your needs
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1324, // adjust the breakpoint value as per your needs
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1024, // adjust the breakpoint value as per your needs
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 2,
                    dots: false,
                },
            },
        ],
    };
    const sliderRef = useRef(null);
    return (
        <Box mt="30px" py="30px">
            <Flex align="center" justify="space-between">
                <Box>
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
                        {title}
                    </Text>

                    <Text
                        fontSize={{
                            base: "12px",
                        }}
                        mt={{ base: "5px", md: "", xl: "" }}
                    >
                        {noOfUnits} Units
                    </Text>
                </Box>

                <Link
                    alignSelf={"flex-end"}
                    as={NextLink}
                    href="#"
                    fontSize="12px"
                    fontWeight="700"
                    color="primary"
                >
                    VIEW ALL
                </Link>
            </Flex>
            <Box mt="10px">
                <Slider {...mainSliderSettings} ref={sliderRef}>
                    {proItems.map((item, index) => (
                        <LatestPropertiesCard
                            cardData={item}
                            key={index}
                            p={{ base: "5px", md: "10px", xl: "" }}
                        />
                    ))}
                </Slider>
            </Box>

            {/* Page DEscribtion */}
            <Flex
                mt="20px"
                align={"center"}
                justify={"space-between"}
                display={{ base: "none", md: "flex" }}
            >
                <Box>
                    <NextArrow />
                </Box>

                <PrevArrow />
            </Flex>
        </Box>
    );
};

export default Otherproperties;
