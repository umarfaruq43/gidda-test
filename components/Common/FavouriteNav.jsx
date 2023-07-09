import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { ArrowLeft2, ArrowRight2, Home3 } from "iconsax-react";
import React, { useRef, useState } from "react";

const FavouriteNav = ({
    activeFavourriteCategory,
    setActiveFavourriteCategory,
    favouriteItems,
}) => {
    // Scroll codes start

    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollContainerRef = useRef(null);

    const handleScroll = (scrollStep) => {
        const scrollContainer = scrollContainerRef.current;

        scrollContainer.scrollTo({
            left: scrollPosition + scrollStep,
            behavior: "smooth",
        });
        setScrollPosition(scrollPosition + scrollStep);
    };

    // Scroll codes ends

    return (
        <Flex mt="26px">
            {/* Left Arrow  */}

            <Box
                minW="36px"
                maxW="36px"
                display={"flex"}
                alignItems="center"
                onClick={() => handleScroll(-300)}
                cursor="pointer"
            >
                <ArrowLeft2
                    size="26"
                    color="#B0B0B0"
                    onClick={() => handleScroll(-300)}
                />
            </Box>
            {/* Main Nav  */}

            <Flex
                gap="30px"
                maxW={"1444px"}
                overflowX="auto"
                className="dateScroll"
                ref={scrollContainerRef}
            >
                {favouriteItems.map((item, i) => {
                    return (
                        <FavouriteBox
                            item={item}
                            key={i}
                            activeFavourriteCategory={
                                activeFavourriteCategory &&
                                activeFavourriteCategory
                            }
                            onClick={() => {
                                console.log(activeFavourriteCategory);
                                setActiveFavourriteCategory(item);
                            }}
                        />
                    );
                })}
            </Flex>

            {/* Right Arrow  */}

            <Box
                minW="36px"
                maxW="36px"
                display={"flex"}
                alignItems="center"
                onClick={() => handleScroll(300)}
                cursor="pointer"
            >
                <ArrowRight2
                    size="26"
                    color="#B0B0B0"
                    onClick={() => handleScroll(300)}
                />
            </Box>
        </Flex>
    );
};

export default FavouriteNav;

const FavouriteBox = ({ item, activeFavourriteCategory, ...props }) => {
    return (
        <Box
            {...props}
            bgRepeat={"no-repeat"}
            bgImage={item && item.image}
            bgPos={"center"}
            bgSize={"cover"}
            borderRadius="10px"
        >
            <Box
                p={["20px", "30px", "30px", "30px"]}
                cursor="pointer"
                bgPos={"center"}
                bgSize="cover"
                w="380px"
                maxW={["380px"]}
                h={["87px", "152px", "152px", "152px"]}
                borderRadius="10px"
                color="white"
                className={
                    activeFavourriteCategory.id === item.id
                        ? "activeFavourNav"
                        : "inActiveFavourNav"
                }
                // bg={activeFavourriteCategory.id === item.id ? ""}
                // bgGradient={}
            >
                <Text fontSize={["20px", "35px", "35px", "35px"]}>{item.type}</Text>
                <Flex mt="20px" align={"center"} gap="10px">
                    <Home3 size="32" color="white" />
                    <Flex
                        align="center"
                        gap="5px"
                        fontSize={["12px", "20px", "20px", "20px"]}
                    >
                        <Text
                            as="span"
                            fontWeight={"700"}
                            // fontSize={["1px", "15px", "15px", "15px"]}
                        >
                            23943
                        </Text>
                        <Text>Properties</Text>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};
