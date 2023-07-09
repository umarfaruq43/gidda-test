import { amenities } from "@/utlis/dummyData";
import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";

import React, { useState } from "react";

export const AmenitiesSelection = () => {
    const [selectedAmenity, setSelectedAmenity] = useState([]);
    console.log(selectedAmenity);
    const handleSelectedAmenities = (selctedItem) => {
        if (selectedAmenity.includes(selctedItem)) {
            const removedData = selectedAmenity.filter(
                (item) => item.item !== selctedItem.item
            );

            setSelectedAmenity(removedData);
        } else {
            setSelectedAmenity([...selectedAmenity, selctedItem]);
        }
    };
    return (
        <Box mt="50px">
            <Text fontSize={"25px"} fontWeight={700}>
                Amenities
            </Text>
            <Flex mt="20px" gap="10px" flexWrap={"wrap"}>
                {amenities.map((currentAmenity, i) => {
                    return (
                        <Box
                            key={i}
                            as="button"
                            border={"1px"}
                            borderColor={"stroke_3"}
                            rounded={"100px"}
                            px={["20px"]}
                            py="10px"
                            fontSize={"14px"}
                            bgColor={
                                selectedAmenity.includes(currentAmenity)
                                    ? "primary"
                                    : "white"
                            }
                            color={
                                selectedAmenity.includes(currentAmenity)
                                    ? "white"
                                    : "black"
                            }
                            onClick={() =>
                                handleSelectedAmenities(currentAmenity)
                            }
                        >
                            {currentAmenity && currentAmenity.item}
                        </Box>
                    );
                })}
            </Flex>
        </Box>
    );
};


