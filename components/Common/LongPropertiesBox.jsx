import React from "react";
import { Box, Divider, Flex, Icon, Image, Text } from "@chakra-ui/react";
import ComponentSize from "@/Layout/ComponentSIze";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Briefcase, Home3, House } from "iconsax-react";
import { FadeButton } from "./Buttons";
import { useRouter } from "next/router";

export const LongPropertiesBox = ({ ...props }) => {
    const router = useRouter();
    const detailsSection = [
        {
            text: "Houses",
            availableNo: 23943,
            icon: Home3,
        },
        {
            text: "Lands",
            availableNo: 4553,
            icon: false,
            img: "/images/land.svg",
        },

        {
            text: "Office Spaces",
            availableNo: 9822,
            icon: Briefcase,
        },

        {
            text: "Rental Properties",
            availableNo: 17720,
            icon: House,
        },
    ];
    return (
        <Box
           
            maxW={{ base: "100%", md: "426px", xl: "426px" }}
            w="100%"
            {...props}
            
        >
            <Flex
                bg={[
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/images/longImg_1.jpg)",
                ]}
                bgBlendMode={["normal, normal", null, null, "multiply, normal"]}
                bgRepeat={"no-repeat"}
                bgSize={"cover"}
                bgPos={"center"}
                // minH={{ base: "auto", md: "500px", xl: "500px" }}
                h="100%"
                flexDir={"column"}
                // bgColor={"red"}
                rounded="10px"
                py={{ base: "20px", md: null, xl: "30px" }}
                px="18px"
                justify={"space-between"}
            >
                <Text
                    fontSize={{ base: "20px", md: "25px", xl: "30px" }}
                    fontWeight={700}
                    color="white"
                    textShadow={"0px 4px 4px rgba(0, 0, 0, 0.5)"}
                >
                    Lagos, Nigeria
                </Text>

                <Box mt="60px">
                    {detailsSection.map(
                        ({ text, availableNo, icon, img }, i) => {
                            return (
                                <Flex
                                    mt="20px"
                                    align={"center"}
                                    gap="10px"
                                    key={i}
                                    color="white"
                                >
                                    {icon ? (
                                        <Icon
                                            as={icon}
                                            boxSize={[
                                                "20px",
                                                null,
                                                null,
                                                "26px",
                                            ]}
                                            color="white"
                                        />
                                    ) : (
                                        <Image src={img && img} alt={text} />
                                    )}
                                    <Flex
                                        align="center"
                                        gap="5px"
                                        fontSize={{
                                            base: "15px",
                                            md: "",
                                            xl: "",
                                        }}
                                    >
                                        <Text
                                            as="span"
                                            fontWeight={"700"}
                                            fontSize={[
                                                "1px",
                                                "15px",
                                                "15px",
                                                "15px",
                                            ]}
                                        >
                                            {availableNo}
                                        </Text>
                                        <Text>{text}</Text>
                                    </Flex>
                                </Flex>
                            );
                        }
                    )}
                    <Box mt="10px">
                        <FadeButton
                            text="VIEW ALL"
                            onClick={() =>
                                router.push("/locations/Lagos Nigeria")
                            }
                        />
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};
