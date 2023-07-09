import ComponentSize from "@/Layout/ComponentSIze";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import FeaturedCard from "./FeaturedCard";
import LatestPropertiesCard from "./LatestPropertiesCard";
import { proItems } from "@/utlis/dummyData";

const LatestProperties = () => {
        const [currentSlide, setCurrentSlide] = useState(1);
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
        const mainCurentPage = currentSlide / 2;
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
        afterChange: (slideIndex) => setCurrentSlide(slideIndex),
        responsive: [
            {
                breakpoint: 1524, // adjust the breakpoint value as per your needs
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1324, // adjust the breakpoint value as per your needs
                settings: {
                    slidesToShow: 2,
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
                    Latest Properties
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
            <Flex mt="20px" align={"center"} justify={"space-between"}>
                <Box></Box>
                <Flex
                    display={{
                        base: "none",
                        md: "flex",
                        xl: "flex",
                    }}
                    gap="10px"
                >
                    <NextArrow />
                    <Box
                        p="10px"
                        boxShadow={"0px 2px 20px #E4F2F3"}
                        fontSize={{ base: "10px", sm: "12px", md: "12px" }}
                        fontWeight={700}
                    >
                        Page {mainCurentPage}
                    </Box>
                    <PrevArrow />
                </Flex>
            </Flex>
        </ComponentSize>
    );
};

export default LatestProperties;
