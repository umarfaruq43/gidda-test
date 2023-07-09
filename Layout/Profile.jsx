// import {
//     Heart,
//     HomeTreadUp,
//     homeTreadUp,
//     NotificationBell,
//     Save_2,
//     StatusUp,
//     UserEdit,
// } from "@/public/Icon";
import { Box, Flex, Image, Text, Icon, Divider } from "@chakra-ui/react";
import {
    Heart,
    HomeTrendUp,
    NotificationBing,
    Save2,
    StatusUp,
    UserEdit,
} from "iconsax-react";
import { useRouter } from "next/router";
import React from "react";

const Profile = ({ children, activeNav }) => {
    return (
        <Box maxW="1870px" pr="10px" overflowX={"hidden"}>
            <Flex flexDir={{ base: "column", md: "column", xl: "row" }}>
                <Box
                    overflowY={"auto"}
                    bgColor={"#fff"}
                    maxW={{ base: "100%", md: "100%", xl: "387px" }}
                    minW={"387px"}
                    w="100%"
                    // pl={["0px", "60px"]}
                    pl={{ base: "0px", md: "0px", lg: "0px", xl: "40px" }}
                    // pr={["20px"]}
                    pt={["20px"]}
                    borderRight="1px"
                    borderColor={{
                        base: "transparent",
                        md: "transparent",
                        xl: "stroke_1",
                    }}
                    // position={["relative", "fixed"]}
                    bottom="0"
                    top="0"
                    left="0"
                    // flex={1}

                    // bgColor={["red", "green", "blue"]}
                >
                    {/* User Box */}
                    <Box p="10px">
                        {/* User Image and Name Details */}
                        <Flex
                            flexDir={{
                                base: "row",
                                md: "row",
                                xl: "column",
                            }}
                            align={{
                                base: "center",
                                md: "center",
                                xl: "unset",
                            }}
                        >
                            <Box
                                w={["120px", "179px"]}
                                h={["120px", "179px"]}
                                rounded={"full"}
                            >
                                <Image
                                    w="100%"
                                    h="100%"
                                    objectFit={"cover"}
                                    src="/images/avatar.svg"
                                    alt="User Profile Pic"
                                />
                            </Box>

                            <Box p="10px">
                                <Text
                                    fontWeight={"700"}
                                    fontSize={["25px", "45px"]}
                                    className="openSans"
                                >
                                    Kim Ryeong
                                </Text>
                                <Text
                                    mt="10px"
                                    className="openSans"
                                    fontSize={["15px", "25px"]}
                                >
                                    Home Buyer
                                </Text>
                            </Box>
                        </Flex>
                        {/* Other Nav Menus */}
                        <Box
                            overflowX={{
                                base: "auto",
                                md: "auto",
                                xl: "hidden",
                            }}
                            // pos={"relative"}
                        >
                            <Flex
                                mt="10px"
                                flexDir={{
                                    base: "row",
                                    md: "row",
                                    xl: "column",
                                }}
                                flexWrap={"nowrap"}
                                gap="20px"
                                borderBottom={"1px"}
                                borderColor={"stroke_1"}
                                minW="1286px"
                                pb={["10px", "20px"]}
                                // w={["1000px", "1300px", "1300px", "1300px"]}
                                // bgColor={"red"}
                                justify={{
                                    base: "flex-start",
                                    md: "space-around",
                                    xl: "",
                                }}
                                // position="relative"
                            >
                                {/* <Box
                                display={{base: "", md: "", xl: ""}}
                                    bgColor="red"
                                    color="#fff"
                                    h="62px"
                                    position={"fixed"}
                                    // top="0"
                                    // bottom='1px'
                                    left="0px"
                                >
                                    {"<"}
                                </Box> */}

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

export default Profile;

const NavItem = ({ navData, activeNav }) => {
    const { icon, text, active } = navData;
    const router = useRouter();

    return (
        <Box className="iconBox">
            <Box
                // mt="10px"
                as="button"
                display="flex"
                alignItems="center"
                borderBottom={active === activeNav ? "1px" : "1px"}
                borderColor={active === activeNav ? "primary" : "transparent "}
                py="10px"
                w={"100%"}
                _hover={{
                    borderBottom: "1px",
                    borderColor: "primary",
                    color: "primary",
                }}
                onClick={() => router.push(`/profile/${active}`)}
            >
                <Icon
                    as={icon}
                    fontSize="30px"
                    color={active === activeNav ? "primary" : "black_300"}
                    className={"iconSax"}
                />

                <Text
                    flex={1}
                    color={active === activeNav ? "primary" : "black_300"}
                    ml={active === activeNav ? "5px" : "8px"}
                    className="openSans"
                    fontWeight={active === activeNav ? "700" : "400"}
                    fontSize={["15px", "20px", "20px", "20px"]}
                    lineHeight={"27px"}
                    textAlign="left"
                    _hover={{ color: "primary" }}
                >
                    {text}
                </Text>
            </Box>
        </Box>
    );
};

const NavMenuDetails = [
    {
        icon: HomeTrendUp,
        text: "My Properties",
        active: "my_properties",
    },
    {
        icon: StatusUp,
        text: "Transaction History",
        active: "transaction_history",
    },
    {
        icon: Heart,
        text: "My Favorites",
        active: "my_favorites",
    },
    {
        icon: Save2,
        text: "Saved Searches",
        active: "saved_searches",
    },
    {
        icon: NotificationBing,
        text: "Notifications",
        active: "notification",
    },
    {
        icon: UserEdit,
        text: "Manage Account",
        active: "manage_account",
    },
];
