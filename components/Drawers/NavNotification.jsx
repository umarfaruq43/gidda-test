import {
    Box,
    Text,
    Flex,
    Divider,
    Image,
    useDisclosure,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
} from "@chakra-ui/react";
import { Location, MessageTick } from "iconsax-react";
import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiChevronLeft, FiShare2 } from "react-icons/fi";
import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";
import { LightPrimaryButton, PrimaryButton } from "../Common/Buttons";
import { format } from "date-fns";
import { useCommonContext } from "@/Context/CommonContext";
import { useRouter } from "next/router";

const NavNotification = ({ onClose, onOpen, isOpen }) => {
    const router = useRouter();
    const notifications = [
        {
            id: 1,
            title: "Notification 1",
            imageUrl: "/images/notificationImage.svg",
            message:
                "Nusaiba Sabiu Place a bid on 3 Units of your property ownership of  Six bedroom penthouse with cinema and swimming pool",
            date: "2022-03-22",
            type: "bid",
        },
        {
            id: 2,
            title: "Notification 2",
            imageUrl: "/images/retHouse.svg",
            message:
                "Ret SILO Wants to sell 3 Units of his property ownership of 3 Bedroom Apartment with Jacuzzi",
            date: "2022-03-23",
            type: "sell",
        },
        {
            id: 3,
            title: "Notification 3",
            imageUrl: "/images/saliuHouse.svg",
            message:
                "Mohammad Salisu Accepted your bid for 3 Units of Six bedroom penthouse with cinema and swimming pool",
            date: "2022-03-23",
            type: "status",
        },
    ];
    // const [selectedNotification, setSelectedNotification] = useState(null);
    const { selectedNotification, setSelectedNotification } =
        useCommonContext();

    const handleNotificationClick = (notification) => {
        setSelectedNotification(notification);

        if (router.pathname === "/profile/notification") {
            return;
        } else {
            router.push("/profile/notification");
        }
    };
    const groupNotificationsByDate = (notifications) => {
        const groupedNotifications = {};
        notifications.forEach((notification) => {
            const date = new Date(notification.date);
            const formattedDate = format(date, "yyyy-MM-dd");
            if (!groupedNotifications[formattedDate]) {
                groupedNotifications[formattedDate] = [];
            }
            groupedNotifications[formattedDate].push(notification);
        });
        return groupedNotifications;
    };
    const groupedNotifications = groupNotificationsByDate(notifications);

    return (
        <>
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent px="10px">
                    <Box p="20px" className="openSans">
                        <Text fontSize="25px" fontWeight="700">
                            Recent Notifications
                        </Text>
                    </Box>
                    <NotificationBlock
                        selectedNotification={selectedNotification}
                        groupedNotifications={groupedNotifications}
                        handleNotificationClick={handleNotificationClick}
                        onOpen={onOpen}
                        onClose={onClose}
                        isOpen={isOpen}
                    />
                    {/* <DrawerBody></DrawerBody> */}
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default NavNotification;

const NotificationBlock = ({
    groupedNotifications,
    handleNotificationClick,
    selectedNotification,
    onClose,
    onOpen,
    isOpen,
}) => {
    return (
        <>
            {Object.entries(groupedNotifications).map(
                ([date, notifications]) => {
                    return (
                        <Box key={date}>
                            {/* Date Box */}
                            <Box bgColor="fadePrimary" p="10px">
                                <Text
                                    fontSize={{
                                        base: "11px",
                                        md: "11px",
                                        xl: "11px",
                                    }}
                                    fontWeight={"400"}
                                >
                                    {date &&
                                        format(
                                            new Date(date),
                                            "EEEE, MMMM d, yyyy"
                                        )}
                                </Text>
                            </Box>
                            {notifications.map((notification) => {
                                // Use regular expression to match the name and object of the sentence
                                const nameRegex =
                                    /(?<=\bPlace a bid on\s|Accepted your bid for\s)(\S+\s?\S+?)\b/;
                                const objectRegex =
                                    /(?<=ownership of\s)([\w\s]+\b)/;

                                // Replace the name and object of the sentence with the same text wrapped in <strong> tags
                                const message = notification.message
                                    .replace(nameRegex, "<strong>$1</strong>")
                                    .replace(
                                        objectRegex,
                                        "<strong>$1</strong>"
                                    );

                                return (
                                    <Box key={notification.id}>
                                        {/* Short  Info Block */}
                                        <Box
                                            cursor="pointer"
                                            onClick={() => {
                                                handleNotificationClick(
                                                    notification
                                                );

                                                onClose();
                                            }}
                                            px={{
                                                base: "10px",
                                                md: "20px",
                                                xl: "20px",
                                            }}
                                            borderLeft={"4px"}
                                            borderLeftColor={
                                                notification ===
                                                selectedNotification
                                                    ? "white"
                                                    : "red_3"
                                            }
                                            // bgColor={""}
                                            backgroundColor={
                                                notification ===
                                                selectedNotification
                                                    ? "white"
                                                    : "fadeGray_1"
                                            }
                                        >
                                            <Flex
                                                py={["10px", null, "10px"]}
                                                gap="10px"
                                            >
                                                <Image
                                                    maxW="89px"
                                                    w="100%"
                                                    h="100%"
                                                    src={
                                                        notification &&
                                                        notification.imageUrl
                                                    }
                                                    alt="notification Image"
                                                />
                                                <Box className="openSans">
                                                    <Text
                                                        fontSize={{
                                                            base: "12px",
                                                            md: "12px",
                                                            xl: "12px",
                                                        }}
                                                        fontWeight={"400"}
                                                        noOfLines="3"
                                                        maxW="275px"
                                                        lineHeight={"20px"}
                                                        // dangerouslySetInnerHTML={{
                                                        //     __html: message,
                                                        // }}
                                                    >
                                                        <Text
                                                            as="strong"
                                                            color="primary"
                                                            fontWeight="700"
                                                            fontSize={"15px"}
                                                        >
                                                            Nusaiba Sabiu{" "}
                                                        </Text>
                                                        place a bid on 3 Units
                                                        of your property
                                                        ownership of{" "}
                                                        <Text
                                                            as="strong"
                                                            fontWeight="700"
                                                        >
                                                            Six bedroom
                                                            penthouse with
                                                            cinema and swimming
                                                            pool
                                                        </Text>
                                                    </Text>
                                                    {/* Notification Time */}
                                                    <Text
                                                        mt="10px"
                                                        fontSize="12px"
                                                        color="primary"
                                                    >
                                                        30 Mins ago
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>
                    );
                }
            )}
        </>
    );
};
