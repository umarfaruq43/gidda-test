import React, { useRef, useState } from "react";
import ComponentSize from "@/Layout/ComponentSIze";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import FeaturedCard from "./FeaturedCard";
import LatestPropertiesCard from "./LatestPropertiesCard";
import { proItems } from "@/utlis/dummyData";
import { Home3, Icon } from "iconsax-react";
import { FadeButton } from "./Buttons";
import TopCategoriesCard from "./TopCategoriesCard";

const TopCategories = () => {
    const NextArrow = (props) => {
        return (
            <Box
                as="button"
                onClick={() => sliderRef.current.slickPrev()}
                style={{ zIndex: 200 }}
            >
                <FiChevronLeft fontSize={{ base: "20px", md: "24px" }} />
            </Box>
        );
    };

    const PrevArrow = (props) => {
        return (
            <Box
                as="button"
                onClick={() => sliderRef.current.slickNext()}
                style={{ zIndex: 200 }}
                className="backdrop_2"
            >
                <FiChevronRight fontSize={{ base: "20px", md: "24px" }} />
            </Box>
        );
    };

    const mainSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        rows: 2,
        slideMargin: 20,
        prevArrow: PrevArrow,

        responsive: [
            {
                breakpoint: 1524, // adjust the breakpoint value as per your needs
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
                },
            },
        ],
    };
    const sliderRef = useRef(null);
    return (
        <ComponentSize mt="60px" py="30px">
            <Flex justify="space-between">
                <Text
                    fontSize={{ base: "15px", md: "25px", xl: "35px" }}
                    fontWeight={700}
                >
                    Top Categories
                </Text>

                <Flex
                    rounded="100px"
                    p="10px"
                    gap="10px"
                    display={{
                        base: "none",
                        md: "flex",
                        xl: "flex",
                    }}
                    boxShadow={"0px 2px 25px 2px #D4E1EA"}
                >
                    <NextArrow />
                    <Divider orientation="vertical" bgColor="stroke_2" />
                    <PrevArrow />
                </Flex>
            </Flex>
            <Box mt="10px">
                <Slider {...mainSliderSettings} ref={sliderRef}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                        <TopCategoriesCard key={index} />
                    ))}
                </Slider>
            </Box>
        </ComponentSize>
    );
};

export default TopCategories;
