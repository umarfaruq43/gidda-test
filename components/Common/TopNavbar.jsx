import { useState } from "react";

import NextLink from "next/link";
import {
    Box,
    Flex,
    Heading,
    IconButton,
    Icon,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    List,
    ListItem,
    Text,
    Link,
    Image,
    Divider,
    Popover,
    PopoverTrigger,
    Button,
    PopoverContent,
    PopoverHeader,
    PopoverArrow,
    PopoverCloseButton,
    PopoverBody,
    Switch,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import SearchInput from "./SearchInput";
import {
    ArrowRight2,
    Edit2,
    Headphone,
    Heart,
    Home3,
    Message,
    Notification,
    NotificationBing,
    Shop,
    ShoppingCart,
    User,
} from "iconsax-react";
import { useAuthContext } from "@/Context/AuthContext";
import { HiBars3 } from "react-icons/hi2";
import NavNotification from "../Drawers/NavNotification";

export default function TopNavbar() {
    const { isLoggedIn } = useAuthContext();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        isOpen: isOpenNotification,
        onOpen: onOpenNotification,
        onClose: onCloseNotification,
    } = useDisclosure();

    return (
        <Flex
            align="center"
            justify="space-between"
            py="12px"
            px={{ base: "30px", md: "30px", xl: "60px" }}
            boxShadow="0px 4px 30px rgba(0, 0, 0, 0.08)"
            style={{ zIndex: 500 }}
            position="fixed"
            // w="100%"
            right="0"
            left="0"
            top="0"
            bgColor="white"
            gap="20px"
        >
            <Flex align="center" gap="20px" w="100%">
                <Link href="/" as={NextLink} minW="30px">
                    <Image src="/images/logo.png" w="34.65px" alt="Gida Logo" />
                </Link>

                {/* Search InPut */}

                <SearchInput />

                {/* Navigate Pages */}

                <Flex
                    w="100%"
                    gap="10px"
                    maxW="468px"
                    display={{
                        base: "none",
                        md: isLoggedIn ? "none" : "flex",
                        xl: "flex",
                    }}
                >
                    {" "}
                    <Link
                        href="/"
                        px="12px"
                        py="10px"
                        fontSize="20px"
                        _hover={{
                            borderColor: "primary",
                            fontWeight: "700",
                            color: "primary",
                        }}
                        transition={"ease-in-out"}
                        transitionDuration={".3s"}
                        borderBottom="1px"
                        borderColor="transparent"
                        flexShrink={"0"}
                    >
                        Buy Property
                    </Link>
                    <Link
                        href="/"
                        px="12px"
                        py="10px"
                        fontSize="20px"
                        _hover={{
                            borderColor: "primary",
                            fontWeight: "700",
                            color: "primary",
                        }}
                        transition={"ease-in-out"}
                        transitionDuration={".3s"}
                        borderBottom="1px"
                        borderColor="transparent"
                        flexShrink={"0"}
                    >
                        Rent Property
                    </Link>
                    <Link
                        href="/"
                        px="12px"
                        py="10px"
                        fontSize="20px"
                        _hover={{
                            borderColor: "primary",
                            fontWeight: "700",
                            color: "primary",
                        }}
                        transition={"ease-in-out"}
                        transitionDuration={".3s"}
                        borderBottom="1px"
                        borderColor="transparent"
                    >
                        Marketplace
                    </Link>
                </Flex>
            </Flex>

            <Flex
                display={{ base: "none", md: "flex", xl: "flex" }}
                align="center"
                gap="20px"
            >
                <Box>
                    <Flex gap="20px" align="center">
                        <Link
                            display={{ base: "none", md: "none", xl: "block" }}
                            href="/faq"
                        >
                            <Icon
                                as={Headphone}
                                boxSize="28px"
                                color="black_300"
                            />
                        </Link>
                        {isLoggedIn && (
                            <Box
                                display={{
                                    base: "none",
                                    md: "block",
                                    xl: "block",
                                }}
                                position="relative"
                                onClick={onOpenNotification}
                                cursor="pointer"
                            >
                                <Icon
                                    as={NotificationBing}
                                    boxSize="28px"
                                    color="black_300"
                                />

                                {/* Open SideMenu Notification onClick of THe bell Icon */}
                                <NavNotification
                                    onClose={onCloseNotification}
                                    onOpen={onOpenNotification}
                                    isOpen={isOpenNotification}
                                />

                                <Flex
                                    pos="absolute"
                                    bgColor="danger"
                                    w="15px"
                                    h="15px"
                                    rounded="full"
                                    top="-2px"
                                    right="-3px"
                                    align="center"
                                    justify="center"
                                >
                                    <Text
                                        fontSize="10px"
                                        lineHeight={"0"}
                                        fontWeight="700"
                                        color="white"
                                    >
                                        1
                                    </Text>
                                </Flex>
                            </Box>
                        )}

                        {isLoggedIn && (
                            <Link
                                display={{
                                    base: "none",
                                    md: "block",
                                    xl: "block",
                                }}
                                href="/profile/my_favorites"
                            >
                                <Icon
                                    as={Heart}
                                    boxSize="28px"
                                    color="black_300"
                                />
                            </Link>
                        )}

                        <Divider
                            orientation="veritical"
                            bgColor="black_300"
                            height="45px"
                            border="1px"
                            display={{
                                base: "none",
                                md: isLoggedIn ? "block" : "none",
                                xl: "block",
                            }}
                        />
                    </Flex>
                </Box>
            </Flex>
            <Box>
                {isLoggedIn ? (
                    <>
                        {" "}
                        <UserBoxPop />
                        <UserBoxSideDraw
                            onClose={onClose}
                            onOpen={onOpen}
                            isOpen={isOpen}
                        />
                    </>
                ) : (
                    <>
                        <NotLoggedIn
                            onClose={onClose}
                            onOpen={onOpen}
                            isOpen={isOpen}
                        />
                    </>
                )}
            </Box>
        </Flex>
    );
}

const UserBoxPop = () => {
    return (
        <Box display={{ base: "none", md: "none", xl: "block" }}>
            <Popover placement="top-start" autoFocus="false" outline="none">
                <PopoverTrigger>
                    <Flex align="center" gap="10px" w="100%">
                        <Image
                            src="/images/owner.svg"
                            alt=""
                            rounded="full"
                            objectFit={"cover"}
                            maxW="45px"
                            maxH="45px"
                            w="100%"
                        />

                        <Text
                            w="100%"
                            fontSize={{ base: "12px", md: "12px", xl: "12px" }}
                            fontWeight={"500px"}
                            className="roboto"
                        >
                            Richard Lucas
                        </Text>
                    </Flex>
                </PopoverTrigger>
                <PopoverContent
                    outline="none"
                    p="10px"
                    bgColor="light_60"
                    className="backdrop_2"
                    border="1px"
                    borderColor="stroke_3"
                    shadow={"xl"}
                >
                    <Box bgColor="white" rounded="10px">
                        <Box p="8px 10px">
                            <Flex align="center" gap="10px" w="100%">
                                <Image
                                    src="/images/owner.svg"
                                    alt=""
                                    rounded="full"
                                    objectFit={"cover"}
                                    maxW="45px"
                                    maxH="45px"
                                    w="100%"
                                />

                                <Box>
                                    <Text
                                        w="100%"
                                        fontSize="25px"
                                        fontWeight={"500px"}
                                        className="roboto"
                                        lineHeight={"34px"}
                                    >
                                        Richard Lucas
                                    </Text>
                                    <Text
                                        color="black_600"
                                        fontSize="15px"
                                        fontWeight="400"
                                    >
                                        Home Buyer
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Divider bgColor="light_60" h="5px" />

                        <PopoverBody>
                            {desktop.map(({ image, text, url }, i) => {
                                return (
                                    <Link
                                        href={`${url}`}
                                        as={NextLink}
                                        key={i}
                                        _hover={{
                                            shadow: "xl",
                                            fontWeight: "600",
                                        }}
                                        py="10px"
                                        display="block"
                                    >
                                        <Flex gap="10px">
                                            <Image src={image} alt={text} />
                                            <Box>
                                                <Text fontSize="20px">
                                                    {" "}
                                                    {text}{" "}
                                                </Text>
                                            </Box>
                                        </Flex>
                                    </Link>
                                );
                            })}

                            <Divider bgColor="light_60" h="5px" />

                            <Box py="12px">
                                <Switch colorScheme={"blue"} />
                            </Box>
                        </PopoverBody>
                    </Box>
                </PopoverContent>
            </Popover>
        </Box>
    );
};

const UserBoxSideDraw = ({ onClose, onOpen, isOpen }) => {
    const { isLoggedIn } = useAuthContext();

    return (
        <Box display={{ base: "block", md: "block", xl: "none" }}>
            <Flex
                align="center"
                gap="10px"
                w="100%"
                cursor="pointer"
                onClick={onOpen}
            >
                <Image
                    display={{ base: "none", md: "block", xl: "block" }}
                    src="/images/owner.svg"
                    alt="user"
                    rounded="full"
                    objectFit={"cover"}
                    maxW="45px"
                    maxH="45px"
                    w="100%"
                />

                <Text
                    display={{ base: "none", md: "none", xl: "block" }}
                    w="100%"
                    fontSize={{ base: "12px", md: "12px", xl: "12px" }}
                    fontWeight={"500px"}
                    className="roboto"
                >
                    Richard Lucas
                </Text>

                <Icon
                    as={HiBars3}
                    boxSize="22px"
                    display={{ base: "block", md: "block", xl: "none" }}
                />
            </Flex>
            {/* Dawer Nav Bar  */}
            <SideNav onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
        </Box>
    );
};

const desktop = [
    {
        image: "/images/navHouse.svg",
        text: "Submit a Property",
        url: "/property",
    },

    {
        image: "/images/navUser.svg",
        text: "Help",
        url: "/faq",
    },
    {
        image: "/images/settings.svg",
        text: "Settings",
        url: "/profile/manage_account",
    },
    {
        image: "/images/logout.svg",
        text: "Log out",
        url: "#",
    },
];

const NotLoggedIn = ({ onClose, onOpen, isOpen }) => {
    return (
        <>
            <Icon
                as={HiBars3}
                boxSize="22px"
                display={{ base: "block", md: "none", xl: "none" }}
                onClick={onOpen}
            />

            {/* Side Nav */}

            <SideNav onClose={onClose} onOpen={onOpen} isOpen={isOpen} />

            <Flex
                align="center"
                gap="25px"
                display={{ base: "none", md: "flex", xl: "flex" }}
            >
                <Flex
                    align="center"
                    justify="center"
                    minW="40px"
                    h="40px"
                    bgColor="stroke_1"
                    rounded="full"
                    display={{ base: "none", md: "none", xl: "flex" }}
                >
                    <Icon as={User} variant="Outline" boxSize="28px" />
                </Flex>

                <Link
                    as={NextLink}
                    href="/sign_up"
                    flexShrink={"0"}
                    fontSize="20px"
                    _hover={{}}
                >
                    Sign Up
                </Link>

                <Link as={NextLink} href="/login" fontSize="20px" _hover={{}}>
                    Login
                </Link>
            </Flex>
        </>
    );
};

const tabMenu = [
    {
        icon: Home3,
        text: "Buy Properties",
        url: "/property",
    },
    {
        icon: Shop,
        text: "Rent Properties",
        url: "/rent_properties",
    },
    {
        icon: ShoppingCart,
        text: "Marketplace",
        url: "/marketplace",
    },
    {
        icon: Headphone,
        text: "Support",
        url: "/contact",
    },
];

const SideNav = ({ onClose, onOpen, isOpen }) => {
    const { isLoggedIn } = useAuthContext();

    const mobileMenu = [
        {
            icon: Message,
            text: "Messages",
            url: "/message",
            visibility: isLoggedIn,
        },
        {
            icon: Notification,
            text: "Notification",
            url: "/profile/notification",
            visibility: isLoggedIn,
        },
        {
            icon: Heart,
            text: "Favorites",
            url: "/profile/favorites",
            visibility: isLoggedIn,
        },
    ];
    return (
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent p="10px">
                {/* Show Box if User is loggedIn  or show  */}
                {isLoggedIn ? (
                    <Flex
                        bgColor="primary"
                        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                        borderRadius="10px"
                        // h="359px"
                        align="center"
                        justify="center"
                        py="20px"
                        flexDir="column"
                        cursor="pointer"
                    >
                        <Image
                            src="/images/owner.svg"
                            alt="User"
                            rounded="full"
                            objectFit={"cover"}
                            maxW={{ base: "120px", md: "200px", xl: "" }}
                            maxH={{ base: "120px", md: "200px", xl: "" }}
                            w="100%"
                        />
                        <Box
                            mt="10px"
                            className="openSans"
                            color="white"
                            textAlign="center"
                            p="5px"
                        >
                            <Text w="100%" fontSize="35px" fontWeight={"700"}>
                                Richard Lucas
                            </Text>

                            <Text
                                mt="10px"
                                w="100%"
                                fontSize="12px"
                                fontWeight={"700"}
                                className="openSans"
                            >
                                HOME BUYER
                            </Text>
                        </Box>
                        <Flex mt="5px">
                            <Button
                                height="28px"
                                bgColor="white"
                                py="5px"
                                px="15px"
                                fontSize="12px"
                                _hover={{}}
                                _focus={{}}
                                _active={{}}
                                rounded="full"
                            >
                                Manage Profile
                                <Icon as={Edit2} ml="10px" />
                            </Button>
                        </Flex>
                    </Flex>
                ) : (
                    ""
                )}
                <DrawerBody>
                    <Box>
                        {!isLoggedIn && (
                            <Box mb="10px">
                                <Link as={NextLink} href="/">
                                    <Image
                                        src="/images/largeLogo.svg"
                                        alt="Logo"
                                    />
                                </Link>
                            </Box>
                        )}

                        {tabMenu.map(({ icon, text, url }, i) => {
                            return (
                                <Link
                                    key={i}
                                    _hover={{}}
                                    _notLast={{
                                        borderBottom: "1px",
                                        borderColor: "light_70",
                                    }}
                                    href={url}
                                    display="block"
                                >
                                    <Flex
                                        align="center"
                                        gap="10px"
                                        py="10px"
                                        justify="space-between"
                                    >
                                        <Flex gap="10px" align="center">
                                            <Icon
                                                as={icon}
                                                variant="Outline"
                                                boxSize="25px"
                                            />
                                            <Text fontSize="20px">
                                                {" "}
                                                {text}{" "}
                                            </Text>
                                        </Flex>

                                        <Flex>
                                            <Icon
                                                as={ArrowRight2}
                                                variant="Outline"
                                                boxSize="15px"
                                            />
                                        </Flex>
                                    </Flex>
                                </Link>
                            );
                        })}
                        {mobileMenu.map(
                            ({ icon, text, url, visibility }, i) => {
                                return (
                                    <Link
                                        key={i}
                                        _hover={{}}
                                        _notLast={{
                                            borderBottom: "1px",
                                            borderColor: "light_70",
                                        }}
                                        display={{
                                            base: visibility ? "block" : "none",
                                            md: "none",
                                            xl: "none",
                                        }}
                                        href={url}
                                    >
                                        <Flex
                                            align="center"
                                            gap="10px"
                                            py="10px"
                                            justify="space-between"
                                        >
                                            <Flex gap="10px" align="center">
                                                <Icon
                                                    as={icon}
                                                    variant="Outline"
                                                    boxSize="25px"
                                                />
                                                <Text fontSize="20px">
                                                    {" "}
                                                    {text}{" "}
                                                </Text>
                                            </Flex>

                                            <Flex>
                                                <Icon
                                                    as={ArrowRight2}
                                                    variant="Outline"
                                                    boxSize="15px"
                                                />
                                            </Flex>
                                        </Flex>
                                    </Link>
                                );
                            }
                        )}
                    </Box>
                    <Divider bgColor="light_60" h="20px" my="30px" />
                    {isLoggedIn &&
                        desktop.map(({ image, text, url }, i) => {
                            return (
                                <Link
                                    href={`${url}`}
                                    as={NextLink}
                                    key={i}
                                    _hover={{
                                        shadow: "xl",
                                        fontWeight: "600",
                                    }}
                                    py="10px"
                                    display="block"
                                >
                                    <Flex gap="10px">
                                        <Image src={image} alt={text} />
                                        <Box>
                                            <Text fontSize="20px">
                                                {" "}
                                                {text}{" "}
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Link>
                            );
                        })}
                    {/* Show SignIN and SignUp Option if user is not loggged in */}
                    {!isLoggedIn ? (
                        <>
                            <Link
                                _hover={{}}
                                _notLast={{
                                    borderBottom: "1px",
                                    borderColor: "light_70",
                                }}
                                display="block"
                                href="/sign_up"
                            >
                                <Flex
                                    align="center"
                                    gap="10px"
                                    py="10px"
                                    justify="space-between"
                                >
                                    <Flex gap="10px" align="center">
                                        <Text fontSize="20px"> Sign Up </Text>
                                    </Flex>

                                    <Flex>
                                        <Icon
                                            as={ArrowRight2}
                                            variant="Outline"
                                            boxSize="15px"
                                        />
                                    </Flex>
                                </Flex>
                            </Link>

                            {/* Login  */}

                            <Link
                                _hover={{}}
                                _notLast={{
                                    borderBottom: "1px",
                                    borderColor: "light_70",
                                }}
                                display="block"
                                href="/login"
                            >
                                <Flex
                                    align="center"
                                    gap="10px"
                                    py="10px"
                                    justify="space-between"
                                >
                                    <Flex gap="10px" align="center">
                                        <Text fontSize="20px"> Login </Text>
                                    </Flex>

                                    <Flex>
                                        <Icon
                                            as={ArrowRight2}
                                            variant="Outline"
                                            boxSize="15px"
                                        />
                                    </Flex>
                                </Flex>
                            </Link>
                        </>
                    ) : (
                        ""
                    )}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};
