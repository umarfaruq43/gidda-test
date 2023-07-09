import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Box,
    Portal,
    Text,
} from "@chakra-ui/react";
import { ArrowBottom, ArrowDown } from "@/public/Icon";

const MeetingChannel = ({ meetingChannel, setMeetingChannel }) => {
    return (
        <Box position="relative">
            <Menu gutter={0} matchWidth={true}>
                {({ isOpen }) => (
                    <>
                        <Text
                            opacity={isOpen || meetingChannel !== null ? 1 : 0}
                            position={"absolute"}
                            zIndex={1}
                            fontSize="14px"
                            bgColor="white"
                            px="10px"
                            left="20px"
                            top="-10px"
                        >
                            Select Meeting Channel
                        </Text>
                        <MenuButton
                            as={Button}
                            rightIcon={
                                !isOpen ? <ArrowDown /> : <ArrowBottom />
                            }
                            height="60px"
                            w="100%"
                            textAlign={"left"}
                            _hover={{}}
                            _focus={{}}
                            _active={{}}
                            bgColor={
                                !isOpen && meetingChannel == null
                                    ? "fadeGray"
                                    : "transparent"
                            }
                            border={
                                !isOpen && meetingChannel == null ? "0" : "1px"
                            }
                            borderColor="light_1"
                            fontSize={["12px", "14px"]}
                            fontWeight="400"
                        >
                            {meetingChannel === null ? (
                                <Text color="light_2" as="span">
                                    Select Meeting Channel
                                </Text>
                            ) : (
                                ""
                            )}
                            {/* Value Indicator */}
                            {meetingChannel === "google_meet"
                                ? "Google Meet"
                                : ""}
                            {meetingChannel === "teams_meeting"
                                ? "Microsoft Teams"
                                : ""}
                            {meetingChannel === "zoom_meeting"
                                ? "Zoom Meeting"
                                : ""}
                        </MenuButton>

                        <MenuList
                            zIndex={"20"}
                            minW="100%"
                            borderRadius={"0"}
                            w="full"
                            py="8px"
                            mt="0"
                        >
                            <MenuItem
                                onClick={() => setMeetingChannel("google_meet")}
                            >
                                Google Meet
                            </MenuItem>
                            <MenuItem
                                mt="10px"
                                onClick={() =>
                                    setMeetingChannel("teams_meeting")
                                }
                            >
                                Microsoft Teams
                            </MenuItem>

                            <MenuItem
                                mt="10px"
                                onClick={() =>
                                    setMeetingChannel("zoom_meeting")
                                }
                            >
                                Zoom Meeting
                            </MenuItem>
                        </MenuList>
                    </>
                )}
            </Menu>
        </Box>
    );
};

export default MeetingChannel;
