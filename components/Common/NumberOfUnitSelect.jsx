// import React from 'react'

// const NumberOfUnitSelect = () => {
//   return (
//     <div>NumberOfUnitSelect</div>
//   )
// }

// export default NumberOfUnitSelect

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

const NumberOfUnitSelect = ({ noOfUnit, setNoOfUnit }) => {
    return (
        <Box position="relative">
            <Menu gutter={0} matchWidth={true}>
                {({ isOpen }) => (
                    <>
                        <Text
                            opacity={isOpen || noOfUnit !== null ? 1 : 0}
                            position={"absolute"}
                            zIndex={1}
                            fontSize="14px"
                            bgColor="white"
                            px="10px"
                            left="20px"
                            top="-10px"
                        >
                            Number of Units
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
                                !isOpen && noOfUnit == null
                                    ? "fadeGray"
                                    : "transparent"
                            }
                            border={!isOpen && noOfUnit == null ? "0" : "1px"}
                            borderColor="light_1"
                            fontSize={["12px", "14px"]}
                            fontWeight="400"
                        >
                            {noOfUnit === null ? (
                                <Text color="light_2" as="span">
                                    Select Number of Units
                                </Text>
                            ) : (
                                ""
                            )}
                            {/* Value Indicator */}

                            {noOfUnit}
                        </MenuButton>

                        <MenuList
                            zIndex={"20"}
                            minW="100%"
                            borderRadius={"0"}
                            w="full"
                            py="8px"
                            mt="0"
                        >
                            {unitsAvail.map((item, i) => {
                                return (
                                    <MenuItem
                                        key={i}
                                        mt="10px"
                                        onClick={() => setNoOfUnit(item)}
                                    >
                                        {item}
                                    </MenuItem>
                                );
                            })}
                        </MenuList>
                    </>
                )}
            </Menu>
        </Box>
    );
};

export default NumberOfUnitSelect;

const unitsAvail = [1, 2, 3, 4];
