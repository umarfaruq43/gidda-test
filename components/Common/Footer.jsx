import {
    Box,
    Button,
    Flex,
    Image,
    Icon,
    Link,
    Divider,
    Text,
    Input,
} from "@chakra-ui/react";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { GrLinkedinOption } from "react-icons/gr";
import { RiWhatsappFill } from "react-icons/ri";
import { NextLink } from "next/link";
import { SlLocationPin, SlPhone } from "react-icons/sl";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SearchNormal1, ShoppingCart, UserTick } from "iconsax-react";
import NewsLetterInput from "./NewsLetterInput";

const Footer = () => {
    return (
        <Box maxW="100%" mt="133px">
            <Flex bgColor={"black"} color="white" justify={"space-evenly"}>
                <Flex
                    py={{ base: "40px", md: "50px", xl: "50px" }}
                    pl={{ base: "20px", md: "60px", xl: "60px" }}
                    px={{ base: "20px", md: "50px", xl: "50px" }}
                    gap="40px"
                    flexWrap={"wrap"}
                    justify="space-between"
                >
                    <Box minW={{ base: "fit-content", md: "417px" }}>
                        <Box maxW={"70px"}>
                            <Image
                                src="/images/logo.png"
                                alt="Gidda logo"
                                w="100%"
                                h="100%"
                            />
                        </Box>
                        {/* Social Icons */}
                        {/* <Flex mt="25px" gap="16px">
                            {socialIcons.map((item, i) => {
                                return (
                                    <Link to={item && item.link} key={i}>
                                        <Button
                                            _active={{}}
                                            _hover={{}}
                                            _focus={{}}
                                            bgColor="shadow_1"
                                            color="light_5"
                                            fontSize={"24px"}
                                            p="10px 20px"
                                            borderRadius={"10px"}
                                            boxShadow={
                                                "1px 1px 15px rgba(121, 123, 125, 0.15)"
                                            }
                                        >
                                           
                                            <Icon as={item && item.icon} />
                                        </Button>
                                    </Link>
                                );
                            })}
                        </Flex> */}

                        <Flex
                            mt="25px"
                            gap={{ base: "10px", md: "15px", xl: "15px" }}
                            flexWrap="wrap"
                        >
                            {pageLinks.map((item, i) => {
                                return (
                                    <Link
                                        key={i}
                                        to={item && item.link}
                                        as={NextLink}
                                        fontSize="15px"
                                        className="openSans"
                                        // minW="125px"
                                    >
                                        {item && item.text}
                                    </Link>
                                );
                            })}
                        </Flex>
                        <Box mt="25px">
                            <Text fontSize="12px">
                                Copyright 2022 Ret SILO. All Rights Reserved.
                            </Text>
                        </Box>
                    </Box>
                    {/* Divider */}
                    <Divider
                        orientation="vertical"
                        height="290px"
                        variant={"dashed"}
                        display={{ base: "none", md: "block", xl: "" }}
                    />
                    {/* Display on Small screen */}
                    <Divider
                        orientation="horizontal"
                        // height="100px"
                        variant={"dashed"}
                        display={{ base: "block", md: "none", xl: "none" }}
                    />
                    <Box minW={{ base: "100%", md: "327px" }}>
                        <Text
                            fontSize={"20px"}
                            fontWeight={"700"}
                            className="openSans"
                            mb="20px"
                        >
                            Contact Us
                        </Text>
                        {contactUs.map((item, i) => {
                            return (
                                <Flex
                                    gap="10px"
                                    key={i}
                                    align="center"
                                    mb="20px"
                                >
                                    <Flex
                                        w="44px"
                                        h="44px"
                                        bgColor={"shadow_1"}
                                        borderRadius="full"
                                        justify="center"
                                        align="center"
                                    >
                                        <Icon as={item.icon} fontSize="24px" />
                                    </Flex>
                                    <Box>
                                        <Text
                                            fontSize={"15px"}
                                            fontWeight={"400"}
                                            maxW="281px"
                                            className="openSans"
                                        >
                                            {item && item.text}
                                        </Text>
                                        {item.text2 && (
                                            <Text
                                                mt="5px"
                                                fontSize={"15px"}
                                                fontWeight={"400"}
                                                maxW="281px"
                                                className="openSans"
                                            >
                                                {item && item.text2}
                                            </Text>
                                        )}
                                    </Box>
                                </Flex>
                            );
                        })}
                    </Box>
                    {/* Divider */}
                    <Divider
                        orientation="vertical"
                        height="290px"
                        variant={"dashed"}
                        display={{ base: "none", md: "block", xl: "" }}
                    />
                    {/* Display on Small screen */}
                    <Divider
                        orientation="horizontal"
                        // height="100px"
                        variant={"dashed"}
                        display={{ base: "block", md: "none", xl: "none" }}
                    />
                    <Box minW={{ base: "100%", md: "327px" }}>
                        <Text
                            fontSize={"20px"}
                            fontWeight={"700"}
                            className="openSans"
                            mb="20px"
                        >
                            More
                        </Text>
                        {more.map((item, i) => {
                            return (
                                <Flex
                                    gap="10px"
                                    key={i}
                                    align="center"
                                    mb="20px"
                                >
                                    <Flex
                                        w="44px"
                                        h="44px"
                                        bgColor={"shadow_1"}
                                        borderRadius="full"
                                        justify="center"
                                        align="center"
                                    >
                                        <Icon as={item.icon} fontSize="24px" />
                                    </Flex>
                                    <Link as={NextLink} href="#">
                                        <Text
                                            fontSize={"15px"}
                                            fontWeight={"400"}
                                            maxW="281px"
                                            className="openSans"
                                        >
                                            {item && item.text}
                                        </Text>
                                    </Link>
                                </Flex>
                            );
                        })}
                    </Box>
                </Flex>
                {/* Join Our Newsletter */}
                <Flex
                    flex="1"
                    align="center"
                    bgColor={"shadow_1"}
                    p="50px"
                    display={{
                        base: "none",
                        md: "none",
                        lg: "none",
                        xxl: "block",
                    }}
                >
                    <Box>
                        <Text
                            fontSize={{ base: "25px", md: "25px", xl: "25px" }}
                            fontWeight={700}
                            mb="15px"
                        >
                            Join Our Newsletter
                        </Text>
                        {/* Input Box */}
                        <NewsLetterInput />

                        <Box mt="15px">
                            <Text fontSize={"12px"} fontWeight={400}>
                                * We’ll send you weekly updates for a better
                                finance management.
                            </Text>
                            <Text mt="15px" fontSize={"12px"} fontWeight={400}>
                                By clicking on the Submit button, you agree to
                                our Terms of Service and Privacy Policy.
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </Flex>

            <Flex
                flex="1"
                align="center"
                bgColor={"shadow_1"}
                p={{ base: "20px", md: "30px", xl: "50px" }}
                display={{
                    base: "block",
                    md: "block",
                    lg: "block",
                    xxl: "none",
                }}
                color="white"
            >
                <Flex
                    maxW="1366px"
                    mx="auto"
                    gap="30px"
                    flexDir={{ base: "column", md: "row" }}
                    align="center"
                >
                    <Box>
                        <Text
                            fontSize={{ base: "25px", md: "25px", xl: "25px" }}
                            fontWeight={700}
                        >
                            Join Our Newsletter
                        </Text>

                        <Box mt="15px">
                            <Text fontSize={"12px"} fontWeight={400}>
                                * We’ll send you weekly updates for a better
                                finance management.
                            </Text>
                            <Text mt="15px" fontSize={"12px"} fontWeight={400}>
                                By clicking on the Submit button, you agree to
                                our Terms of Service and Privacy Policy.
                            </Text>
                        </Box>
                    </Box>

                    {/* Input Box */}
                    <NewsLetterInput flex="1" />
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;

const socialIcons = [
    {
        icon: CgFacebook,
        link: "",
    },
    {
        icon: GrLinkedinOption,
        link: "",
    },
    {
        icon: BsTwitter,
        link: "",
    },
    {
        icon: RiWhatsappFill,
        link: "",
    },
];

const pageLinks = [
    {
        text: "About us",
        link: "/about",
    },
    {
        text: "Privacy Policy",
        link: "/about",
    },
    {
        text: "Terms of Use",
        link: "/about",
    },
    {
        text: "Cookies Policy",
        link: "/about",
    },
];

const contactUs = [
    {
        icon: SlLocationPin,
        text: "124BA Lawrenceville, Chicgao, Illinois, United States",
    },
    { icon: SlPhone, text: "+1-405-4959-55", text2: "+1-405-4959-55" },
    {
        icon: MdOutlineAlternateEmail,
        text: "info@gidda.com",
        text2: "support@gidda.com",
    },
];

const more = [
    {
        icon: ShoppingCart,
        text: "Sell your Property",
    },
    { icon: SearchNormal1, text: "Help and Support" },
    {
        icon: UserTick,
        text: "Our Partners",
    },
    {
        icon: SearchNormal1,
        text: "Become an Agent",
    },
];
