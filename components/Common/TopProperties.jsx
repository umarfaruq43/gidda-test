import React from "react";
import { Box, Divider, Flex, Icon, Image, Text } from "@chakra-ui/react";
import ComponentSize from "@/Layout/ComponentSIze";
import { LongPropertiesBox } from "./LongPropertiesBox";
import { FadeButton } from "./Buttons";
import ShortPropertiesBox from "./ShortPropertiesBox";

const TopProperties = () => {
    return (
        <ComponentSize mt="30px">
            <Box justify="space-between">
                <Text
                    fontSize={{ base: "15px", md: "33px", xl: "33px" }}
                    fontWeight={700}
                >
                    Top Properties
                </Text>
                <Text
                    mt="10px"
                    maxW="900px"
                    fontSize={["18px"]}
                    display={{ base: "none", md: "block", xl: "block" }}
                >
                    Take a deep dive and browse homes for sale, original
                    neighborhood photos, resident reviews and local insights to
                    find what is right for you.
                </Text>
            </Box>

            <Flex
                mt="20px"
                gap="20px"
                flexDir={{ base: "column", md: "row", xl: "row" }}
            >
                <LongPropertiesBox />

                <Flex flexDir={"column"} gap="20px" w="100%">
                    <ShortPropertiesBox />
                    <ShortPropertiesBox />
                </Flex>

                <LongPropertiesBox
                    display={{
                        base: "none",
                        base: "none",
                        md: "block",
                        xl: "block",
                    }}
                />

                <Flex
                    flexDir={"column"}
                    gap="20px"
                    w="100%"
                    display={{ base: "none", md: "none", xl: "flex" }}
                >
                    <ShortPropertiesBox />
                    <ShortPropertiesBox />
                </Flex>
            </Flex>
        </ComponentSize>
    );
};

export default TopProperties;
