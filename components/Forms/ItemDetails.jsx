import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";

import React, { useState } from "react";

import { PropertyInputBox } from "../Common/InputComponents";

import TextAreaInputComponent from "../Common/TextAreaInputComponent";

export const ItemDetails = () => {
    return (
        <Box mt="50px">
            <Text fontSize={"25px"} fontWeight={700}>
                Item Details
            </Text>
            <Box mt="20px">
                <PropertyInputBox
                    inputType={"text"}
                    InputPlaceholder={"Item Details Name"}
                    value={""}
                    inputName={"item_name"}
                />

                <TextAreaInputComponent
                    mt="20px"
                    value={""}
                    inputName={"item_description"}
                    // inputLabel={""}
                    inputPlaceHolder={"Item Description"}
                />

                <PropertyInputBox
                    mt="20px"
                    inputType={"text"}
                    InputPlaceholder={"Amount Per Month"}
                    value={""}
                    inputName={"item_price_montly"}
                />
            </Box>
        </Box>
    );
};
