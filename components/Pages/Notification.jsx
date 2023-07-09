import {
    Box,
    Text,
    Flex,
    Divider,
    Image,
    useDisclosure,
    IconButton,
} from "@chakra-ui/react";
import { Location, MessageTick } from "iconsax-react";
import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiChevronLeft, FiShare2 } from "react-icons/fi";
import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";
import { LightPrimaryButton, PrimaryButton } from "../Common/Buttons";
import { format } from "date-fns";
import { TaskModal } from "../Modals/StatusModal";
import { useCommonContext } from "@/Context/CommonContext";

const Notification = () => {
    const [active, setActive] = useState("notification");
    // const [selectedNotification, setSelectedNotification] = useState(null);
    const { selectedNotification, setSelectedNotification } =
        useCommonContext();

    const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

    const groupedNotifications = groupNotificationsByDate(notifications);

    const handleNotificationClick = (notification) => {
        setSelectedNotification(notification);
        onOpen();
    };

    return (
        <Box className="openSans">
            <Box mb={{ base: "20px", md: "30px", xl: "30px" }} px="">
                <Text
                    fontWeight={"700"}
                    fontSize={["25px", "45px", "45px", "45px"]}
                >
                    Notifications
                </Text>
            </Box>
            <Box
                py="31px"
                boxShadow={{
                    base: "none",
                    md: "0px 2px 20px rgba(102, 70, 28, 0.11)",
                    xl: "none",
                }}
                borderRadius="8px"
            >
                {/* Notification Nav Section */}
                <Flex
                    gap="10px"
                    align="center"
                    px={{ base: "10px", md: "20px", xl: "21px" }}
                >
                    <Text
                        fontWeight={active === "notification" ? 700 : 400}
                        fontSize="20px"
                        p="10px"
                        borderRadius={"100px"}
                        cursor="pointer"
                        bgColor={
                            active === "notification"
                                ? "stroke_1"
                                : "transparent"
                        }
                        onClick={() => setActive("notification")}
                    >
                        Notifications
                    </Text>
                    <Text
                        fontWeight={active === "message" ? 700 : 400}
                        fontSize="20px"
                        p="10px"
                        borderRadius={"100px"}
                        cursor="pointer"
                        bgColor={
                            active === "message" ? "stroke_1" : "transparent"
                        }
                        onClick={() => setActive("message")}
                    >
                        Messages
                    </Text>
                </Flex>

                <Divider my="20px" />

                {/* MEssage/Notification section  */}

                <Flex gap={{ base: "10px", md: "20px", xl: "40px" }}>
                    {/* Message/Notification Block */}
                    <Box
                        p="5px"
                        maxW="438px"
                        w="100%"
                        display={[
                            isOpen ? "none" : "block",
                            isOpen ? "none" : "block",
                            "block",
                        ]}
                    >
                        <NotificationBlock
                            selectedNotification={selectedNotification}
                            groupedNotifications={groupedNotifications}
                            handleNotificationClick={handleNotificationClick}
                        />
                    </Box>

                    {/* Notification Preview panel */}

                    {selectedNotification ? (
                        <Box
                            display={[
                                isOpen ? "block" : "none",
                                isOpen ? "block" : "none",
                                "block",
                            ]}
                        >
                            {selectedNotification.type === "bid" && (
                                <BidSellection onToggle={onToggle} />
                            )}

                            {/* Sell Notification  */}
                            {selectedNotification.type === "sell" && (
                                <SellSellection onToggle={onToggle} />
                            )}
                            {/* AcceptBidSellection */}

                            {/* AcceptBidSellection  */}
                            {selectedNotification.type === "status" && (
                                <AcceptBidSellection onToggle={onToggle} />
                            )}
                        </Box>
                    ) : (
                        <Box
                            display={[
                                isOpen ? "none" : "none",
                                isOpen ? "none" : "block",
                                "block",
                            ]}
                            w="100%"
                        >
                            <NoSelection />
                        </Box>
                    )}
                </Flex>
            </Box>
        </Box>
    );
};

export default Notification;

const notifications = [
    {
        id: 1,
        title: "Notification 1",
        message:
            "Nusaiba Sabiu Place a bid on 3 Units of your property ownership of  Six bedroom penthouse with cinema and swimming pool",
        date: "2022-03-22",
        type: "bid",
    },
    {
        id: 2,
        title: "Notification 2",
        message:
            "Ret SILO Wants to sell 3 Units of his property ownership of 3 Bedroom Apartment with Jacuzzi",
        date: "2022-03-23",
        type: "sell",
    },
    {
        id: 3,
        title: "Notification 3",
        message:
            "Mohammad Salisu Accepted your bid for 3 Units of Six bedroom penthouse with cinema and swimming pool",
        date: "2022-03-23",
        type: "status",
    },
];

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

const SellSellection = ({ onToggle }) => {
    const { onOpen, onClose, isOpen } = useDisclosure();
    return (
        <Box className="openSans">
            <Flex
                align="center"
                onClick={onToggle}
                mb="4"
                display={{ base: "flex", sm: "none", md: "none", xl: "none" }}
            >
                <FiChevronLeft />

                <Text fontSize={"12px"}>Back</Text>
            </Flex>
            <Flex gap="10px" align="center">
                <Box w="100%" maxW="40px" minW="40px" maxH="50px" minH="50px">
                    <Image
                        src="/images/bidAvatar.svg"
                        alt=""
                        maxW="50px"
                        minW="50px"
                        maxH="50px"
                        minH="50px"
                        objectFit={"cover"}
                    />
                </Box>
                <Box maxHeight="34px" flex="1" ml="10px">
                    <Text
                        noOfLines={1}
                        fontSize={{ base: "15px", md: "20px", xl: "20px" }}
                        fontWeight={700}
                        px={{ base: "0xp", md: "10px", xl: "10px" }}
                    >
                        <Text as="strong" color="primary">
                            {" "}
                            Ret SILO{" "}
                        </Text>
                        wants to sell 3 Units of his property ownership of 3
                        Bedroom Apartment with Jacuzzi
                    </Text>
                </Box>
            </Flex>
            <Divider my="10px" />
            <Box>
                <Text
                    fontSize={{
                        base: "15px",

                        md: "16px",
                        lg: "22px",
                        xl: "22px",
                    }}
                    fontWeight={400}
                    px="5px"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ultrices, mi at viverra iaculis, sapien ex ultricies
                    justo, ac ultricies dolor dolor at justo.
                </Text>
            </Box>

            {/* Card Details  */}
            <Box maxW="804px" position="relative" mt="30px">
                <Flex
                    p="10px"
                    gap="20px"
                    flexDir={{ base: "column", md: "column", lg: "row" }}
                >
                    <Box maxW="322px" w="100%">
                        <Image
                            src="/images/bidItem.svg"
                            alt="Bid Item Image"
                            borderRadius={"10px"}
                        />
                    </Box>
                    <Box>
                        <Text
                            fontWeight="700"
                            fontSize={{
                                base: "20px",
                                md: "20px",
                                lg: "30px",
                                xl: "30px",
                            }}
                        >
                            5 Bedroom Detached Duplex
                        </Text>
                        <Flex align="center" gap="10px">
                            <Location size="19" color="#292D32" />
                            <Text
                                fontSize={{
                                    base: "15px",
                                    md: "15px",
                                    xl: "20px",
                                }}
                            >
                                1995 Broadway, New York
                            </Text>
                        </Flex>

                        <Divider
                            w="100%"
                            color="stroke"
                            variant={"dashed"}
                            my="10px"
                        />
                        {/* Bed and bath section */}
                        <Box>
                            <Flex gap="20px" justify="space-between">
                                <Flex gap="10px" align={"center"}>
                                    {/* Number of Beds  */}
                                    <Flex>
                                        <Image
                                            src="/images/bed.svg"
                                            alt="Total Number of beds"
                                            display={"inline-block"}
                                            w={"18px"}
                                        />{" "}
                                        <Text
                                            ml="6px"
                                            className="openSans"
                                            color={"light_4"}
                                        >
                                            <Text
                                                fontWeight={700}
                                                as="span"
                                                fontSize={"15px"}
                                                color="black"
                                            >
                                                {" "}
                                                {4}
                                            </Text>{" "}
                                            Bed
                                        </Text>
                                    </Flex>
                                    {/* Divider */}
                                    <Divider
                                        orientation="vertical"
                                        height={"17px"}
                                    />
                                    {/* Number of BathRooms  */}
                                    <Flex align={"center"}>
                                        <Image
                                            src="/images/bath.svg"
                                            alt="Total Number of beds"
                                            display={"inline-block"}
                                            w={"18px"}
                                        />{" "}
                                        <Text
                                            ml="6px"
                                            className="openSans"
                                            color={"light_4"}
                                        >
                                            <Text
                                                fontWeight={700}
                                                as="span"
                                                fontSize={"15px"}
                                                color="black"
                                            >
                                                {" "}
                                                {3}
                                            </Text>{" "}
                                            Bath
                                        </Text>
                                    </Flex>
                                </Flex>

                                <Text fontSize="15px" color="stroke">
                                    <Text as="strong" color="black">
                                        2,153{" "}
                                    </Text>
                                    sqft
                                </Text>
                            </Flex>
                        </Box>

                        <Divider
                            w="100%"
                            color="stroke"
                            variant={"dashed"}
                            my="10px"
                        />
                        {/* Original Price Per Unit */}

                        <Flex gap="20px" justify="space-between">
                            <Text fontSize="15px" color="stroke">
                                Original Price Per Unit
                            </Text>

                            <Text fontSize="15px" color="stroke">
                                <Text as="strong" color="black" fontSzie="20px">
                                    ₦65K
                                </Text>
                                /Unit
                            </Text>
                        </Flex>

                        <Divider
                            w="100%"
                            color="stroke"
                            variant={"dashed"}
                            my="10px"
                        />

                        {/* Bidding Price Per Unit */}

                        <Flex gap="20px" justify="space-between">
                            <Text fontSize="15px" color="stroke">
                                Bidding Price Per Unit
                            </Text>

                            <Text fontSize="15px" color="stroke">
                                <Text as="strong" color="black" fontSzie="20px">
                                    ₦75K
                                </Text>
                                /Unit
                            </Text>
                        </Flex>

                        <Divider
                            w="100%"
                            color="stroke"
                            variant={"dashed"}
                            my="10px"
                        />

                        {/* Number of Units to be Purchased */}

                        <Flex gap="20px" justify="space-between">
                            <Text fontSize="15px" color="stroke">
                                Number of Units to be Purchased
                            </Text>

                            <Text fontSize="15px" color="stroke">
                                <Text as="strong" color="black" fontSzie="20px">
                                    3
                                </Text>
                                /Unit
                            </Text>
                        </Flex>
                    </Box>
                </Flex>

                {/* Buttons */}

                <Flex gap="10px" mt="30px" px="10px">
                    {/* TaskModal for Update  */}
                    <TaskModal
                        title="Task completed"
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar sodales tellus, id venenatis mauris consequat sagittis. "
                        onOpen={onOpen}
                        onClose={onClose}
                        isOpen={isOpen}
                    />

                    <LightPrimaryButton
                        text="NOT INTERESTED"
                        px="19px"
                        fontSize="15px"
                        fontWeight="400"
                        onClick={() => onOpen()}
                    />
                    <PrimaryButton
                        text="PLACE BID"
                        fontSize="15px"
                        fontWeight="400"
                        px="19px"
                        onClick={() => onOpen()}
                    />
                </Flex>
            </Box>

            <Divider my="10px" />

            <Flex py="13px" px="10px" align="center" justify={"space-between"}>
                <Text>2 minutes ago</Text>
                <Box>
                    <Flex gap="30px" align="center" fontSize="24px">
                        <AiTwotoneDelete cursor={"pointer"} />
                        <HiOutlineArchiveBoxArrowDown cursor={"pointer"} />
                        <FiShare2 cursor={"pointer"} />
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

const BidSellection = ({ onToggle }) => {
    return (
        <Box className="openSans">
            <Flex
                align="center"
                onClick={onToggle}
                mb="4"
                display={{ base: "flex", sm: "none", md: "none", xl: "none" }}
            >
                <FiChevronLeft />

                <Text fontSize={"12px"}>Back</Text>
            </Flex>
            <Flex gap="10px" align="center">
                <Box w="100%" maxW="40px" minW="40px" maxH="50px" minH="50px">
                    <Image
                        src="/images/bidAvatar.svg"
                        alt=""
                        maxW="50px"
                        minW="50px"
                        maxH="50px"
                        minH="50px"
                        objectFit={"cover"}
                    />
                </Box>
                <Box maxHeight="34px" flex="1" ml="10px">
                    <Text
                        noOfLines={1}
                        fontSize={{ base: "15px", md: "20px", xl: "20px" }}
                        fontWeight={700}
                        px={{ base: "0xp", md: "10px", xl: "10px" }}
                    >
                        <Text as="strong" color="primary">
                            {" "}
                            Nusaiba Sabiu{" "}
                        </Text>
                        Place a bid on 3 Units of your property ownership of Six
                        bedroom penthouse with cinema and swimming pool
                    </Text>
                </Box>
            </Flex>
            <Divider my="10px" />
            <Box>
                <Text
                    fontSize={{
                        base: "15px",

                        md: "16px",
                        lg: "22px",
                        xl: "22px",
                    }}
                    fontWeight={400}
                    px="5px"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ultrices, mi at viverra iaculis, sapien ex ultricies
                    justo, ac ultricies dolor dolor at justo.
                </Text>
            </Box>

            {/* Card Details  */}
            <Box maxW="804px" position="relative" mt="30px">
                <Flex
                    p="10px"
                    gap="20px"
                    flexDir={{ base: "column", md: "column", lg: "row" }}
                >
                    <Box maxW="322px" w="100%">
                        <Image
                            src="/images/bidItem.svg"
                            alt="Bid Item Image"
                            borderRadius={"10px"}
                        />
                    </Box>
                    <Box>
                        <Text
                            fontWeight="700"
                            fontSize={{
                                base: "20px",
                                md: "20px",
                                lg: "30px",
                                xl: "30px",
                            }}
                        >
                            5 Bedroom Detached Duplex
                        </Text>
                        <Flex align="center" gap="10px">
                            <Location size="19" color="#292D32" />
                            <Text
                                fontSize={{
                                    base: "15px",
                                    md: "15px",
                                    xl: "20px",
                                }}
                            >
                                1995 Broadway, New York
                            </Text>
                        </Flex>

                        <Divider
                            w="100%"
                            color="stroke"
                            variant={"dashed"}
                            my="10px"
                        />
                        {/* Bed and bath section */}
                        <Box>
                            <Flex gap="20px" justify="space-between">
                                <Flex gap="10px" align={"center"}>
                                    {/* Number of Beds  */}
                                    <Flex>
                                        <Image
                                            src="/images/bed.svg"
                                            alt="Total Number of beds"
                                            display={"inline-block"}
                                            w={"18px"}
                                        />{" "}
                                        <Text
                                            ml="6px"
                                            className="openSans"
                                            color={"light_4"}
                                        >
                                            <Text
                                                fontWeight={700}
                                                as="span"
                                                fontSize={"15px"}
                                                color="black"
                                            >
                                                {" "}
                                                {4}
                                            </Text>{" "}
                                            Bed
                                        </Text>
                                    </Flex>
                                    {/* Divider */}
                                    <Divider
                                        orientation="vertical"
                                        height={"17px"}
                                    />
                                    {/* Number of BathRooms  */}
                                    <Flex align={"center"}>
                                        <Image
                                            src="/images/bath.svg"
                                            alt="Total Number of beds"
                                            display={"inline-block"}
                                            w={"18px"}
                                        />{" "}
                                        <Text
                                            ml="6px"
                                            className="openSans"
                                            color={"light_4"}
                                        >
                                            <Text
                                                fontWeight={700}
                                                as="span"
                                                fontSize={"15px"}
                                                color="black"
                                            >
                                                {" "}
                                                {3}
                                            </Text>{" "}
                                            Bath
                                        </Text>
                                    </Flex>
                                </Flex>

                                <Text fontSize="15px" color="stroke">
                                    <Text as="strong" color="black">
                                        2,153{" "}
                                    </Text>
                                    sqft
                                </Text>
                            </Flex>
                        </Box>

                        <Divider
                            w="100%"
                            color="stroke"
                            variant={"dashed"}
                            my="10px"
                        />
                        {/* Original Price Per Unit */}

                        <Flex gap="20px" justify="space-between">
                            <Text fontSize="15px" color="stroke">
                                Original Price Per Unit
                            </Text>

                            <Text fontSize="15px" color="stroke">
                                <Text as="strong" color="black" fontSzie="20px">
                                    ₦65K
                                </Text>
                                /Unit
                            </Text>
                        </Flex>

                        <Divider
                            w="100%"
                            color="stroke"
                            variant={"dashed"}
                            my="10px"
                        />

                        {/* Bidding Price Per Unit */}

                        <Flex gap="20px" justify="space-between">
                            <Text fontSize="15px" color="stroke">
                                Bidding Price Per Unit
                            </Text>

                            <Text fontSize="15px" color="stroke">
                                <Text as="strong" color="black" fontSzie="20px">
                                    ₦75K
                                </Text>
                                /Unit
                            </Text>
                        </Flex>

                        <Divider
                            w="100%"
                            color="stroke"
                            variant={"dashed"}
                            my="10px"
                        />

                        {/* Number of Units to be Purchased */}

                        <Flex gap="20px" justify="space-between">
                            <Text fontSize="15px" color="stroke">
                                Number of Units to be Purchased
                            </Text>

                            <Text fontSize="15px" color="stroke">
                                <Text as="strong" color="black" fontSzie="20px">
                                    3
                                </Text>
                                /Unit
                            </Text>
                        </Flex>
                    </Box>
                </Flex>

                {/* Buttons */}

                <Flex gap="10px" mt="30px" px="10px">
                    <LightPrimaryButton
                        text="REJECT BID"
                        px="19px"
                        fontSize="15px"
                        fontWeight="400"
                    />
                    <PrimaryButton
                        text="ACCEPT BID"
                        fontSize="15px"
                        fontWeight="400"
                        px="19px"
                    />
                </Flex>
            </Box>

            <Divider my="10px" />

            <Flex py="13px" px="10px" align="center" justify={"space-between"}>
                <Text>2 minutes ago</Text>
                <Box>
                    <Flex gap="30px" align="center" fontSize="24px">
                        <AiTwotoneDelete cursor={"pointer"} />
                        <HiOutlineArchiveBoxArrowDown cursor={"pointer"} />
                        <FiShare2 cursor={"pointer"} />
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

const AcceptBidSellection = ({ onToggle }) => {
    return (
        <Box className="openSans">
            <Flex
                align="center"
                onClick={onToggle}
                mb="4"
                display={{ base: "flex", sm: "none", md: "none", xl: "none" }}
            >
                <FiChevronLeft />

                <Text fontSize={"12px"}>Back</Text>
            </Flex>
            <Flex gap="10px" align="center">
                <Box w="100%" maxW="40px" minW="40px" maxH="50px" minH="50px">
                    <Image
                        src="/images/bidAvatar.svg"
                        alt=""
                        maxW="50px"
                        minW="50px"
                        maxH="50px"
                        minH="50px"
                        objectFit={"cover"}
                    />
                </Box>
                <Box maxHeight="34px" flex="1" ml="10px">
                    <Text
                        noOfLines={1}
                        fontSize={{ base: "15px", md: "20px", xl: "20px" }}
                        fontWeight={700}
                        px={{ base: "0xp", md: "10px", xl: "10px" }}
                    >
                        <Text as="strong" color="primary">
                            {" "}
                            Mohammad Salisu{" "}
                        </Text>
                        accepted your bid for 3 Units of Six bedroom penthouse
                        with cinema and swimming pool
                    </Text>
                </Box>
            </Flex>
            <Divider my="10px" />

            {/* STatus Image  */}

            <Flex justify={"center"}>
                {" "}
                <Image src="/images/emailChecked.png" alt="Success Image" />
            </Flex>

            <Box>
                <Text
                    fontSize={{
                        base: "15px",

                        md: "16px",
                        lg: "22px",
                        xl: "22px",
                    }}
                    fontWeight={400}
                    px="5px"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ultrices, mi at viverra iaculis, sapien ex ultricies
                    justo, ac ultricies dolor dolor at justo.
                </Text>
            </Box>

            {/* Card Details  */}
            <Box maxW="804px" position="relative" mt="30px">
                <Flex
                    p="10px"
                    gap="20px"
                    flexDir={{ base: "column", md: "column", lg: "row" }}
                >
                    <Box maxW="322px" w="100%">
                        <Image
                            src="/images/bidItem.svg"
                            alt="Bid Item Image"
                            borderRadius={"10px"}
                        />
                    </Box>
                    <Box>
                        <Text
                            fontWeight="700"
                            fontSize={{
                                base: "20px",
                                md: "20px",
                                lg: "30px",
                                xl: "30px",
                            }}
                        >
                            5 Bedroom Detached Duplex
                        </Text>
                        <Flex align="center" gap="10px">
                            <Location size="19" color="#292D32" />
                            <Text
                                fontSize={{
                                    base: "15px",
                                    md: "15px",
                                    xl: "20px",
                                }}
                            >
                                1995 Broadway, New York
                            </Text>
                        </Flex>

                        <Divider
                            w="100%"
                            color="stroke"
                            variant={"dashed"}
                            my="10px"
                        />
                        {/* Bed and bath section */}
                        <Box>
                            <Flex gap="20px" justify="space-between">
                                <Flex gap="10px" align={"center"}>
                                    {/* Number of Beds  */}
                                    <Flex>
                                        <Image
                                            src="/images/bed.svg"
                                            alt="Total Number of beds"
                                            display={"inline-block"}
                                            w={"18px"}
                                        />{" "}
                                        <Text
                                            ml="6px"
                                            className="openSans"
                                            color={"light_4"}
                                        >
                                            <Text
                                                fontWeight={700}
                                                as="span"
                                                fontSize={"15px"}
                                                color="black"
                                            >
                                                {" "}
                                                {4}
                                            </Text>{" "}
                                            Bed
                                        </Text>
                                    </Flex>
                                    {/* Divider */}
                                    <Divider
                                        orientation="vertical"
                                        height={"17px"}
                                    />
                                    {/* Number of BathRooms  */}
                                    <Flex align={"center"}>
                                        <Image
                                            src="/images/bath.svg"
                                            alt="Total Number of beds"
                                            display={"inline-block"}
                                            w={"18px"}
                                        />{" "}
                                        <Text
                                            ml="6px"
                                            className="openSans"
                                            color={"light_4"}
                                        >
                                            <Text
                                                fontWeight={700}
                                                as="span"
                                                fontSize={"15px"}
                                                color="black"
                                            >
                                                {" "}
                                                {3}
                                            </Text>{" "}
                                            Bath
                                        </Text>
                                    </Flex>
                                </Flex>

                                <Text fontSize="15px" color="stroke">
                                    <Text as="strong" color="black">
                                        2,153{" "}
                                    </Text>
                                    sqft
                                </Text>
                            </Flex>
                        </Box>

                        <Divider
                            w="100%"
                            color="stroke"
                            variant={"dashed"}
                            my="10px"
                        />
                        {/* Original Price Per Unit */}

                        <Flex gap="20px" justify="space-between">
                            <Text fontSize="15px" color="stroke">
                                Price Per Unit
                            </Text>

                            <Text fontSize="15px" color="stroke">
                                <Text as="strong" color="black" fontSzie="20px">
                                    ₦65K
                                </Text>
                                /Unit
                            </Text>
                        </Flex>

                        <Divider
                            w="100%"
                            color="stroke"
                            variant={"dashed"}
                            my="10px"
                        />

                        <Divider
                            w="100%"
                            color="stroke"
                            variant={"dashed"}
                            my="10px"
                        />
                    </Box>
                </Flex>
            </Box>

            <Divider my="10px" />

            <Flex py="13px" px="10px" align="center" justify={"space-between"}>
                <Text>2 minutes ago</Text>
                <Box>
                    <Flex gap="30px" align="center" fontSize="24px">
                        <AiTwotoneDelete cursor={"pointer"} />
                        <HiOutlineArchiveBoxArrowDown cursor={"pointer"} />
                        <FiShare2 cursor={"pointer"} />
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

const Selection = () => {
    return <Box></Box>;
};

const NoSelection = () => {
    return (
        <Box>
            <Text
                px="10px"
                py="10px"
                fontSize={{ base: "20px", md: "25px", xl: "25px" }}
                fontWeight={700}
            >
                No notification selected
            </Text>
            <Divider />
            <Flex
                minH="400px"
                alignItems={"center"}
                justify="center"
                flexDir="column"
                gap="15px"
            >
                <MessageTick size="70" color="#292D32" variant="Bulk" />
                <Text maxW="277px" textAlign="center">
                    Click on a message to see full information on this page
                </Text>
            </Flex>
            <Divider />
        </Box>
    );
};

const NotificationBlock = ({
    groupedNotifications,
    handleNotificationClick,
    selectedNotification,
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
                                            onClick={() =>
                                                handleNotificationClick(
                                                    notification
                                                )
                                            }
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
                                                    : "white"
                                            }
                                        >
                                            <Flex
                                                py={["10px", null, "20px"]}
                                                gap="10px"
                                            >
                                                <Image
                                                    maxW="89px"
                                                    w="100%"
                                                    h="100%"
                                                    src="/images/notificationImage.svg"
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
                                                        noOfLines="4"
                                                        maxW="275px"
                                                        lineHeight={"20px"}
                                                        dangerouslySetInnerHTML={{
                                                            __html: message,
                                                        }}
                                                    />
                                                    {/* <Text
                                                            as="strong"
                                                            color="primary"
                                                            fontWeight="700"
                                                            fontSize={"15px"}
                                                        >
                                                            Nusaiba Sabiu
                                                        </Text>
                                                        Place a bid on 3 Units
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
                                                        </Text> */}

                                                    {/* </Text> */}
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
