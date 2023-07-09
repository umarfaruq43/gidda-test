import React from "react";

import { Box, Flex, Text , Icon } from "@chakra-ui/react";

import { Home3 } from "iconsax-react";
import { FadeButton } from "./Buttons";

const TopCategoriesCard = () => {
    return (
        <Box p="10px">
            <Flex
                bg={[
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(/images/house_1.jpg)",
                ]}
                bgBlendMode={["normal, normal", null, null, "multiply, normal"]}
                bgRepeat={"no-repeat"}
                bgSize={"cover"}
                bgPos={"center"}
                rounded="10px"
                py={{ base: "20px", md: null, xl: "30px" }}
                px="18px"
                h={{ base: "234px", md: "246px", xl: "322px" }}
                gap={{ base: "10px", md: "20px", xl: "20px" }}
                flexDir={"column"}
                justifyContent={"flex-end"}
            >
                <Box>
                    <Text
                        fontSize={{
                            base: "20px",
                            md: "25px",
                            xl: "30px",
                        }}
                        fontWeight={700}
                        color="white"
                        textShadow={"0px 4px 4px rgba(0, 0, 0, 0.5)"}
                    >
                        Mansions
                    </Text>
                    {/* Number of House section  */}

                    <Flex
                        mt={{
                            base: "10px",
                            md: "10px",
                            xl: "",
                        }}
                        align={"center"}
                        gap="10px"
                        color="white"
                    >
                        <Icon
                            as={Home3}
                            boxSize={["20px", null, null, "26px"]}
                            color="white"
                        />

                        <Flex
                            align="center"
                            gap="5px"
                            fontSize={{
                                base: "10px",
                                sm: "15px",
                                md: "",
                                xl: "",
                            }}
                        >
                            <Text
                                as="span"
                                fontWeight={"700"}
                                fontSize={["10px", "15px", "15px", "15px"]}
                            >
                                {23943}
                            </Text>
                            <Text fontSize={["10px", "15px", "15px", "15px"]}>
                                {" "}
                                Properties
                            </Text>
                        </Flex>
                    </Flex>
                    {/* BUtton */}
                    <Box mt={["10px", "20px"]}>
                        <FadeButton type="thick" text="LEARN MORE" />
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default TopCategoriesCard;
