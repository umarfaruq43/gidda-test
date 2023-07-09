import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";

import React, { useState } from "react";

import { SelectBox } from "../Common/InputComponents";

export const ApartmentFeatures = () => {
    return (
        <Box mt="50px">
            <Text fontSize={"25px"} fontWeight={700}>
                Apartment Features
            </Text>
            <Flex mt="20px" gap="20px">
                <SelectBox
                    placeholder="Number of Bedrooms"
                    value={""}
                    isLight={true}
                >
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </SelectBox>
                <SelectBox
                    placeholder="Number of Bathrooms"
                    value={""}
                    isLight={true}
                >
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </SelectBox>
            </Flex>

            <Flex mt="20px" gap="20px">
                <SelectBox
                    placeholder="Property  Condition"
                    value={""}
                    isLight={true}
                >
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </SelectBox>
                <SelectBox placeholder="Servicing" value={""} isLight={true}>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </SelectBox>
            </Flex>

            <Flex mt="20px" gap="20px">
                <SelectBox
                    w={["100%", null, "48%"]}
                    placeholder="Property  Condition"
                    value={""}
                    isLight={true}
                >
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </SelectBox>
            </Flex>
        </Box>
    );
};
