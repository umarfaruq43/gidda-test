import {
    Box,
    Flex,
    Image,
    Text,
    Icon,
    Divider,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "@chakra-ui/react";
import {
    Cards,
    Heart,
    HomeTrendUp,
    NotificationBing,
    Save2,
    StatusUp,
    UserEdit,
} from "iconsax-react";
import { useRouter } from "next/router";
import React from "react";
import { FiMessageSquare } from "react-icons/fi";
import { GrCircleAlert } from "react-icons/gr";
import { BiUserCheck } from "react-icons/bi";
import { MdOutlineChevronRight } from "react-icons/md";

const SupportLayout = ({ children, activeNav, destination, title }) => {
    return (
        <Box maxW="1870px" pr="10px" overflowX={"hidden"}>
            {/* ************* */}
            <Box
                pl={{ base: "10px", md: "20px", lg: "20px", xl: "40px" }}
                mt="30px"
            >
                <Flex spacing="8px" align="center">
                    <Text href="#" fontSize="12px" color="fadeGray_2">
                        Home
                    </Text>
                    <Icon as={MdOutlineChevronRight} color="gray.500" />

                    <Text href="#" fontWeight="700">
                        {destination}
                    </Text>
                </Flex>
                <Box mt="20px" className="openSans" mb="">
                    <Text
                        fontSize={{
                            base: "25px",
                            md: "35px",
                            xl: "45px",
                        }}
                        fontWeight="700"
                    >
                        {title}
                    </Text>
                </Box>
            </Box>

            {/* {****************} */}
            <Flex flexDir={{ base: "column", md: "row", xl: "row" }}>
                <Box
                    overflowY={"auto"}
                    bgColor={"#fff"}
                    maxW={{ base: "100%", md: "300px", xl: "300px" }}
                    minW={"300px"}
                    w="100%"
                    pl={{ base: "0px", md: "20px", lg: "20px", xl: "40px" }}
                    pt={["20px"]}
                    borderRight="1px"
                    borderColor={{
                        base: "transparent",
                        md: "stroke_1",
                        xl: "stroke_1",
                    }}
                    // position={["relative", "fixed"]}
                    bottom="0"
                    top="0"
                    left="0"
                >
                    <Box p="10px">
                        {/* Bread Crumbs  */}

                        <Box
                            overflowX={{
                                base: "auto",
                                md: "auto",
                                xl: "hidden",
                            }}
                        >
                            <Flex
                                mt="10px"
                                flexDir={{
                                    base: "row",
                                    md: "column",
                                    xl: "column",
                                }}
                                flexWrap={"nowrap"}
                                gap="20px"
                                minW={{
                                    base: "100%",
                                    md: "100%",
                                    xl: "1286px",
                                }}
                                pb={["10px", "20px"]}
                                justify={{
                                    base: "flex-start",
                                    md: "space-around",
                                    xl: "",
                                }}
                                // position="relative"
                            >
                                {NavMenuDetails.map((item, i) => {
                                    return (
                                        <NavItem
                                            key={i}
                                            navData={item}
                                            activeNav={activeNav}
                                        />
                                    );
                                })}
                            </Flex>
                        </Box>
                        {/* <Divider /> */}
                    </Box>
                </Box>

                {/* Children component  */}
                <Box
                    flex="1"
                    // marginLeft={["0px", "386px"]}
                    maxW={{ base: "100%", md: "100%", xl: "1444px" }}
                    overflowX="auto"
                    pt={["30px", "50px"]}
                    // pr={{ base: "16px", md: "20px", xl: "20px" }}
                    px={{ base: "16px", md: "20px", xl: "20px" }}
                >
                    {children}
                </Box>
            </Flex>
        </Box>
    );
};

export default SupportLayout;

const NavItem = ({ navData, activeNav }) => {
    const { icon, text, active } = navData;
    const router = useRouter();

    return (
        <Box
            className="iconBox"
            _hover={{ boxShadow: " 0px 2px 20px #E4F2F3" }}
            _groupHover={{ fontWeight: "700" }}
            borderRadius="5px"
            boxShadow={active === activeNav ? " 0px 2px 20px #E4F2F3" : ""}
        >
            <Box
                // mt="10px"
                as="button"
                display="flex"
                alignItems="center"
                // borderBottom={active === activeNav ? "1px" : "1px"}
                // borderColor={active === activeNav ? "primary" : "transparent "}
                py="10px"
                w={"100%"}
                onClick={() => router.push(`/${active}`)}
            >
                <Icon
                    as={icon}
                    fontSize="30px"
                    // color={active === activeNav ? "primary" : "black_300"}
                    // className={"iconSax"}
                />

                <Text
                    flex={1}
                    // color={active === activeNav ? "primary" : "black_300"}
                    ml={active === activeNav ? "5px" : "8px"}
                    className="openSans"
                    fontWeight={active === activeNav ? "700" : "400"}
                    fontSize={["15px", "20px", "20px", "20px"]}
                    lineHeight={"27px"}
                    textAlign="left"
                    _groupHover={{ fontWeight: "700" }}

                    // _hover={{ color: "primary" }}
                >
                    {text}
                </Text>
            </Box>
        </Box>
    );
};

const NavMenuDetails = [
    {
        icon: GrCircleAlert,
        text: "General FAQ",
        active: "faq",
        destination: "Support",
        title: "FAQ/Help",
    },
    {
        icon: FiMessageSquare,
        text: "Contact Support",
        active: "contact",
        destination: "Contact",
        title: "Contact Support",
    },
    {
        icon: BiUserCheck,
        text: "Become an Agent",
        active: "/sign_up",
        destination: "",
        title: "",
    },

    {
        icon: Cards,
        text: "Payment System",
        active: "payment",
        destination: "Payment Systems",
        title: "Payment Systems",
    },
];
