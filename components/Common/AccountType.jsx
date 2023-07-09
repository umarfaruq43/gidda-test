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

const AccountType = ({ accountType, setAccountType }) => {
    return (
        <Box position="relative">
            <Menu gutter={0} matchWidth={true}>
                {({ isOpen }) => (
                    <>
                        <Text
                            opacity={isOpen || accountType !== null ? 1 : 0}
                            position={"absolute"}
                            zIndex={1}
                            fontSize="14px"
                            bgColor="white"
                            px="10px"
                            left="20px"
                            top="-10px"
                        >
                            Account Type
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
                                !isOpen && accountType == null
                                    ? "fadeGray"
                                    : "transparent"
                            }
                            border={
                                !isOpen && accountType == null ? "0" : "1px"
                            }
                            borderColor="light_1"
                            fontSize={["12px", "14px"]}
                            fontWeight="400"
                            // isActive={isOpen}
                            // color=
                        >
                            {/* {isOpen ? "Close" : "Open"} */}
                            {accountType === null ? (
                                <Text color="light_2" as="span">
                                    Select Account Type
                                </Text>
                            ) : (
                                ""
                            )}

                            {accountType === "agent" ? "Agent" : ""}
                            {accountType === "buyer" ? "Property Buyer" : ""}
                        </MenuButton>

                        <MenuList
                            zIndex={"20"}
                            minW="100%"
                            borderRadius={"0"}
                            w="full"
                            py="8px"
                            mt="0"
                        >
                            <MenuItem onClick={() => setAccountType("buyer")}>
                                I am a Property Buyer
                            </MenuItem>
                            <MenuItem
                                mt="10px"
                                onClick={() => setAccountType("agent")}
                            >
                                I want to be an Agent
                            </MenuItem>
                        </MenuList>
                    </>
                )}
            </Menu>
        </Box>
    );
};

export default AccountType;
