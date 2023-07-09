import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    useDisclosure,
    Flex,
    Box,
    RadioGroup,
    ButtonGroup,
    Input,
} from "@chakra-ui/react";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useRef, useState } from "react";
import { PrimaryButton } from "../Common/Buttons";
import MeetingChannel from "../Common/MeetingChannel";
import NextSixDates, { NextSixDatesArray } from "../Common/NextSixDates";
import TimeInputComponent from "../Common/TimeInputComponent";
import { TourSuccessModal } from "./StatusModal";

export default function TourModal({ onOpen, onClose, isOpen }) {
    const {
        isOpen: isOpenTourStatusModal,
        onOpen: onOpenTourStatusModal,
        onClose: onCloseTourStatusModal,
    } = useDisclosure();

    const [active, setActive] = useState("meet");
    const [selectedDate, setSelectedDate] = useState(null);
    const [meetingTime, setMeetingTime] = useState("");
    const [meetingChannel, setMeetingChannel] = useState(null);

    const handleMeetingTime = (e) => {
        setMeetingTime(e.target.value);
    };

    // Scroll codes start

    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollContainerRef = useRef(null);

    const handleScroll = (scrollStep) => {
        const scrollContainer = scrollContainerRef.current;
        scrollContainer.scrollTo({
            left: scrollPosition + scrollStep,
            behavior: "smooth",
        });
        setScrollPosition(scrollPosition + scrollStep);
    };

    // Scroll codes ends

    const handleSubmit = () => {
        console.log(meetingChannel);
        console.log(active);
        console.log(meetingTime);
        console.log(selectedDate);
        onClose();
        onOpenTourStatusModal();
    };

    return (
        <>
            {/* <Button onClick={onOpen}>Open Modal</Button> */}
            <TourSuccessModal
                onOpen={onOpenTourStatusModal}
                onClose={onCloseTourStatusModal}
                isOpen={isOpenTourStatusModal}
            />
            <Modal
                blockScrollOnMount={true}
                isCentered
                isOpen={isOpen}
                onClose={onClose}
                size={"2xl"}
            >
                <ModalOverlay />

                <ModalContent
                    bgColor={"transparent"}
                    p={{ base: "10px", md: "16px", xl: "20px" }}
                    w="100%"
                >
                    <Box bgColor={"white"} borderRadius="10px">
                        <Flex align={"center"}>
                            {" "}
                            <ModalHeader
                                flex={1}
                                className="openSans"
                                fontSize={{ base: "20px", md: "25px", xl: "" }}
                            >
                                Take a tour with our agent
                            </ModalHeader>
                            <ModalCloseButton
                                pos={"relative"}
                                bottom="0"
                                top="0"
                            />
                        </Flex>
                        <ModalBody>
                            {/* TOggle video and In person  */}
                            <Flex>
                                <Button
                                    fontSize="15px"
                                    w="100%"
                                    _hover={{}}
                                    _focus={{}}
                                    _active={{}}
                                    bgColor={
                                        active === "meet"
                                            ? "primary_2"
                                            : "transparent"
                                    }
                                    border={"1px"}
                                    outline="none"
                                    borderColor={
                                        active === "meet" ? "info" : "stroke_3"
                                    }
                                    borderRightRadius={"0px"}
                                    onClick={() => setActive("meet")}
                                >
                                    In-Person
                                </Button>
                                <Button
                                    fontSize="15px"
                                    w="100%"
                                    _hover={{}}
                                    _focus={{}}
                                    _active={{}}
                                    outline="none"
                                    bgColor={
                                        active === "video"
                                            ? "primary_2"
                                            : "transparent"
                                    }
                                    border={"1px"}
                                    borderColor={
                                        active === "video" ? "info" : "stroke_3"
                                    }
                                    borderLeftRadius={"0px"}
                                    onClick={() => setActive("video")}
                                >
                                    Video chat
                                </Button>
                            </Flex>
                            <Flex mt="26px">
                                {/* Left Arrow  */}

                                <Box
                                    minW="36px"
                                    maxW="36px"
                                    display={"flex"}
                                    alignItems="center"
                                    onClick={() => handleScroll(-300)}
                                    cursor="pointer"
                                >
                                    <ArrowLeft2
                                        size="26"
                                        color="#B0B0B0"
                                        onClick={() => handleScroll(-300)}
                                    />
                                </Box>
                                {/* Preferred time */}
                                <Flex
                                    gap="16px"
                                    pb="12px"
                                    overflowX={"auto"}
                                    className="dateScroll"
                                    ref={scrollContainerRef}
                                >
                                    {NextSixDatesArray.map(
                                        (currentDates, i) => {
                                            const {
                                                day,
                                                dayOfWeek,
                                                month,
                                                date,
                                            } = currentDates;

                                            return (
                                                <Box
                                                    key={i}
                                                    cursor={"pointer"}
                                                    className="openSans"
                                                    maxW="92px"
                                                    minW="92px"
                                                    w="92px"
                                                    bgColor={
                                                        date === selectedDate
                                                            ? "primary_2"
                                                            : "transparent"
                                                    }
                                                    border="1px"
                                                    borderColor={
                                                        date === selectedDate
                                                            ? "info"
                                                            : "primary_3"
                                                    }
                                                    textAlign="center"
                                                    py="20px"
                                                    px="20px"
                                                    borderRadius={"5px"}
                                                    onClick={() =>
                                                        setSelectedDate(date)
                                                    }
                                                >
                                                    <Text
                                                        className="openSans"
                                                        fontSize={"15px"}
                                                        fontWeight={400}
                                                        lineHeight="20px"
                                                    >
                                                        {dayOfWeek}
                                                    </Text>
                                                    <Text
                                                        className="openSans"
                                                        // my="5px"
                                                        fontSize={"20px"}
                                                        fontWeight={700}
                                                    >
                                                        {day}
                                                    </Text>
                                                    <Text
                                                        className="openSans"
                                                        fontSize={"15px"}
                                                        fontWeight={400}
                                                        lineHeight="20px"
                                                    >
                                                        {month}
                                                    </Text>
                                                </Box>
                                            );
                                        }
                                    )}
                                </Flex>

                                {/* Right Arrow  */}

                                <Box
                                    minW="36px"
                                    maxW="36px"
                                    display={"flex"}
                                    alignItems="center"
                                    onClick={() => handleScroll(300)}
                                    cursor="pointer"
                                >
                                    <ArrowRight2
                                        size="26"
                                        color="#B0B0B0"
                                        onClick={() => handleScroll(300)}
                                    />
                                </Box>
                            </Flex>

                            {/* Meeting chanel option Only Show if meeting mode is set to Video */}

                            {active === "video" && (
                                <Box mt="20px">
                                    <MeetingChannel
                                        meetingChannel={meetingChannel}
                                        setMeetingChannel={setMeetingChannel}
                                    />
                                </Box>
                            )}

                            <Box mt="20px">
                                <TimeInputComponent
                                    value={meetingTime}
                                    inputName={"meeting_time"}
                                    inputLabel={"Select Time"}
                                    inputPlaceHolder={"Select Time"}
                                    onChange={handleMeetingTime}
                                />
                            </Box>
                            <Box mt="20px">
                                <PrimaryButton
                                    text="Request this time"
                                    onClick={handleSubmit}
                                    isDisabled={
                                        meetingTime === "" ||
                                        selectedDate === null ||
                                        (active === "video" &&
                                            meetingChannel === null)
                                            ? true
                                            : false
                                    }
                                />
                            </Box>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                colorScheme="blue"
                                mr={3}
                                onClick={onClose}
                                _hover={{}}
                                _focus={{}}
                                _active={{}}
                            >
                                Close
                            </Button>
                            {/* <Button variant="ghost">close button </Button> */}
                        </ModalFooter>
                    </Box>
                </ModalContent>
            </Modal>
        </>
    );
}
