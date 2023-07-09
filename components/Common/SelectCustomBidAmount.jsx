import { Box, Text, Icon, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { RxDot } from "react-icons/rx";
import {
    IoIosCheckmarkCircle,
    IoIosCheckmarkCircleOutline,
} from "react-icons/io";

const SelectCustomBidAmount = ({ setCustomBid, customBid, bidData }) => {
    return (
        <Box>
            <SimpleGrid columns={3}>
                {bidData.map((item, i) => {
                    return (
                        <CustomBox
                            item={item}
                            key={i}
                            customBid={customBid}
                            onClick={() => setCustomBid(item)}
                        />
                    );
                })}
            </SimpleGrid>
        </Box>
    );
};

export default SelectCustomBidAmount;

const CustomBox = ({ item, customBid, ...props }) => {
    return (
        <Box
            position="relative"
            cursor="pointer"
            p="8px"
            maxW="120px"
            border="1px"
            borderColor={
                customBid && customBid.id === item.id ? "primary" : "stroke"
            }
            rounded="5px"
            {...props}
        >
            <Text
                fontSize="15px"
                fontWeight="700"
                color={
                    customBid && customBid.id === item.id ? "primary" : "stroke"
                }
            >
                {item && item.price}
            </Text>
            <Text fontSize="10px">{item && item.discount} Lower</Text>
            {/* Mark Icon */}
            <Icon
                as={
                    customBid && customBid.id === item.id
                        ? IoIosCheckmarkCircle
                        : RxDot
                }
                color={
                    customBid && customBid.id === item.id ? "primary" : "stroke"
                }
                position="absolute"
                top="3px"
                right="3px"
                // w="8px"
                // h="8px"
                // fontSize='1'
            />
        </Box>
    );
};
