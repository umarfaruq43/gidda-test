import ComponentSize from "@/Layout/ComponentSIze";
import { Box, Image, useBreakpointValue, Flex, Text } from "@chakra-ui/react";

import React from "react";
import { LightPrimaryButton } from "./Buttons";

const Hero = () => {
    const imageSrc = useBreakpointValue({
        base: "/images/hero2.jpg",

        md: "/images/hero2.jpg",
        xl: "/images/hero.svg",
    });
    return (
        <Box
            mt={{ base: "0px", md: "", xl: "30px" }}
            px={{ base: "0px", md: "0px", xl: "60px" }}
        >
            <Box
                h={{ base: "615px", md: "515px", xl: "" }}
                overflow={"hidden"}
                bgImage={imageSrc}
                bg={[
                    `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${imageSrc})`,
                ]}
                bgBlendMode={["normal, normal", null, null, "multiply, normal"]}
                bgPos="center"
                bgSize="cover"
                color="white"
                px={{ base: "16px", md: "40px", xl: "60px" }}
            >
                <Flex w="100%" h="100%" align="center">
                    <Box
                        maxW={{
                            base: "100%",
                            // sm: "413px",
                            md: "523px",
                            xl: "800px",
                        }}
                    >
                        <Text
                            fontSize={{
                                base: "35px",
                                // sm: "27px",
                                md: "35px",
                                xl: "55px",
                            }}
                            fontWeight="700"
                        >
                            Explore, Buy & Sell Properties & Find a perfect
                            Apartment
                        </Text>
                        <Text
                            mt="10px"
                            fontSize={{
                                base: "15px",
                                // sm: "11px",
                                md: "15px",
                                xl: "25px",
                            }}
                        >
                            Get the absolute value from Gida based on our
                            reputable partners who have licenses from the
                            government to operate.
                        </Text>
                        <Box mt="10px">
                            <LightPrimaryButton
                                text="LEARN MORE"
                                BorderCol="primary"
                                // maxW={["155px", "160px", "200px"]}
                                maxW={{
                                    base: "155px",
                                    md: "200px",
                                    xl: "375px",
                                }}
                                color="primary"
                                fontWeight="700"
                                boxShadow="0px 4px 20px rgba(0, 0, 0, 0.25)"
                            />
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default Hero;
